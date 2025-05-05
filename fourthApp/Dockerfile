
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Production Stage
EXPOSE 3004
CMD ["nginx", "-g", "daemon off;"]