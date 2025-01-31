FROM node:16-alpine as builder

WORKDIR /usr/src/cumi-web

COPY package.json ./

RUN npm install

COPY . ./

RUN $(npm bin)/ng build --aot --configuration production

FROM nginx:alpine

COPY --from=builder /usr/src/cumi-web/dist/cumi-web:4.3.2 /usr/share/nginx/html/cumi-web

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY docker/nginx.conf /etc/nginx/conf.d/

COPY docker-entrypoint.sh /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

EXPOSE 80

CMD ["sh", "/docker-entrypoint.sh"]
