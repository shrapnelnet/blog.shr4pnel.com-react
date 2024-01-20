FROM node:20
WORKDIR /usr/src/blog-shr4pnel-com
COPY package.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]