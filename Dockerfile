# Pull Node Version 8
FROM node:8

# Labels
LABEL version="1.0.3" \
      maintainer="joseph@josephmorse.me"

# Expose Port
EXPOSE 3000

# Set Work Dir
WORKDIR /usr/src/app

# Copy package.json
COPY package.json .

# Set Production variable
ENV NODE_ENV production

# Start Server
# Run NPM install
RUN ["npm", "install"]

# Copy over source files
COPY . .

CMD ["npm", "start"]
