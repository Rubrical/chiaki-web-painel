FROM node:22.3.0
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli

EXPOSE 80
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
