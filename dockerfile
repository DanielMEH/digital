FROM node:alpine
WORKDIR /frontend

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

#EXPOSE 3000


CMD ["yarn", "dev"]




# WORKDIR /frontend

# COPY package*.json .

# RUN npm install

# COPY . .

# RUN npm run build 

# EXPOSE 3000

# CMD ["npm", "start"]
