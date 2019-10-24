FROM node as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install puppeteer
RUN npm run test -- --watch=false --browsers=ChromeHeadless
RUN npm run build


# Stage 2
FROM nginx
COPY --from=node /usr/src/app/dist/ask-frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


