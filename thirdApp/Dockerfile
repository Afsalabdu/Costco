
FROM node:18-alpine AS build
WORKDIR /thirdApp
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:stable-alpine AS production
COPY --from=build /thirdApp/.dist /index.html
EXPOSE 3003
CMD ["nginx", "-g", "daemon off;"]