FROM node:22-alpine3.19
WORKDIR /app

COPY . .

RUN npm install

# RUN npm run build

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
