FROM node
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Stage 2
FROM nginx
COPY --from=node /src/app/dist/ask-frontend /share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


