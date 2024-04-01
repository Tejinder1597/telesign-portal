import http from "../common/commonHTTP";


const getCookie = (name: any) => {
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookiePair = cookieArray[i].split('=');
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
};

const RegisterUser = async(userData: any) => {
    try { 
        const response = await http.post('/users/registration', userData);
        return response;
    } catch (error: any) {
        console.error('Registration failed:', error.response ? error.response.data : error.message);
        throw(error);
    }
};

const setCookie = (cookieName: string, value: string, timeToLive: number) => {
    // Encode value
    const cookieValue = encodeURIComponent(value);

    let expires = "";
    if (timeToLive) {
        const date = new Date();

        date.setTime(date.getTime() + timeToLive * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = cookieName + "=" + cookieValue + expires + "; path=/; secure; samesite=strict";
}

const LoginUser = async(loginData: any) => {
    try {
        const response = await http.post('/users/login', loginData);
        setCookie('access_token', response.data.access_token, 240);
        return response;
    } catch (error: any) {
        console.error('Login Failed:', error.response ? error.response.data: error.message);
        throw(error);
    }
};


export default {
    RegisterUser,
    LoginUser
}

