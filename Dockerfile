FROM node:lts-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm install
RUN npm run bootstrap
RUN npm run build
EXPOSE 5000-5002
CMD ["npm","run","prod"]
