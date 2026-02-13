FROM node:20-slim
WORKDIR /app
COPY package.json package-lock.json* ./
COPY . .
RUN npm ci --only=production
RUN npm run build
EXPOSE 3001
CMD ["node", "./dist/index.js"]
