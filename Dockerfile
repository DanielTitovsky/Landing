FROM node:18-alpine AS builder
WORKDIR /app
#подтягиваю зависимости
COPY package.json package-lock.json ./
RUN npm ci
#добавляю и собираю приложение
COPY . .
RUN npm run build
#добавляем nginx и кладем сбилженный проект
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
#запускаем
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
