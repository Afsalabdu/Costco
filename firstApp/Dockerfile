
FROM node:18-alpine AS build
WORKDIR /firstApp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /firstApp/.dist /index.html
EXPOSE 3002
CMD ["nginx", "-g", "daemon off;"]