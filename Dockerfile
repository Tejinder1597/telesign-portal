 # Stage 1: Build the React application
FROM node:16 as build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy built files from the builder stage
COPY --from=build /app/build /usr/share/nginx/html/telesign-webportal
# COPY nginx.conf to adjust the routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Create a custom Nginx configurati
CMD ["nginx", "-g", "daemon off;"]