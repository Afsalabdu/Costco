
FROM node:18-alpine AS build
WORKDIR /MFApp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /MFApp/.dist /index.html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]