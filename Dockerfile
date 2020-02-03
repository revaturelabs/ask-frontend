FROM node:latest-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod 



# Stage 2
FROM nginx
COPY --from=node /app/dist/ask-frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


