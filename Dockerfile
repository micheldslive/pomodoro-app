FROM node:14-alpine

WORKDIR /pomodoro-app

COPY . .

RUN yarn

EXPOSE 5173

CMD ["yarn","dev"]
