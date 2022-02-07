# Pull official base image
FROM node:14-alpine3.14

# Create app directory and use it as working directory
RUN mkdir -p /srv/app/jobcoin-admin-server

# Set working directory
WORKDIR /srv/app/jobcoin-admin-server

# Install app dependencies
COPY package.json /srv/app/jobcoin-admin-server
COPY package-lock.json /srv/app/jobcoin-admin-server
RUN npm install

# Add app
COPY . /srv/app/jobcoin-admin-server

# Start app
CMD ["npm", "run", "server"]