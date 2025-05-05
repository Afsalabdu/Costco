
FROM node:18-alpine AS build
WORKDIR /fourthApp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /fourthApp/.dist /index.html
EXPOSE 3004
CMD ["nginx", "-g", "daemon off;"]