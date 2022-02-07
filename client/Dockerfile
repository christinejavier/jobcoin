# Pull official base image
FROM node:14-alpine3.14

# Create app directory and use it as working directory
RUN mkdir -p /srv/app/jobcoin-admin-client

# Set working directory
WORKDIR /srv/app/jobcoin-admin-client

# Install app dependencies
COPY package.json /srv/app/jobcoin-admin-client
COPY package-lock.json /srv/app/jobcoin-admin-client
RUN npm install

# Add app
COPY . /srv/app/jobcoin-admin-client

# Start app
CMD ["npm", "run", "client"]