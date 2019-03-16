# Pull Node Version 8
FROM node:10.15.3

# Labels
LABEL version="1.0.4" \
      maintainer="joseph@josephmorse.me"

# Expose Port
EXPOSE 3000

# Set Work Dir
WORKDIR /usr/profile

# Copy package.json
COPY package.json .

# Run NPM install
RUN npm install

ENV NODE_ENV production

# COPY OVER OTHER FILES
COPY . .

# Run Build
RUN ["npm", "run", "build"]

# Start Server
CMD npm run start
