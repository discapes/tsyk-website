FROM node:alpine
WORKDIR /build

COPY package*.json ./
RUN npm i
COPY . .
RUN npx svelte-kit sync
RUN npm run build

EXPOSE 8888
ENV PORT=8888
CMD node build

