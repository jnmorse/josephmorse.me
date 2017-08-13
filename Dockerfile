# Pull Node Version 6
FROM node:6

# Expose Port
EXPOSE 3000

# Set Work Dir
WORKDIR /usr/src/app

# Copy package.json
COPY package.json .

# Run NPM install
RUN ["npm", "install"]

# Copy over source files
COPY . .

# Set Production variable
ENV NODE_ENV production

# Run Build
RUN ["npm", "run", "build"]

# Start Server
CMD ["npm", "start"]
