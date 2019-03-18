FROM node:8.15.1-slim
# RUN apt-get update && apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
# RUN  npm install && npm run build && cp -r dist/* /var/www/html && rm -rf /app
RUN  npm install && npm run build && cp -r dist/* && npx http-server dist -g
# CMD ["nginx","-g","daemon off;"]
