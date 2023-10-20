FROM node:18-alpine

#working directory
WORKDIR /customer-dashboard

# copy package
COPY package*.json  /customer-dashboard/

#install packages
RUN npm install -f
RUN npm install -g serve

# copy source files
COPY src/ /customer-dashboard/src

COPY public/ /customer-dashboard/public

# build react app
RUN npm run build


CMD ["npm", "run", "prod"]

