# Pull Node Version 8
FROM node:10.15.3

# Labels
LABEL version="1.0.4" \
      maintainer="joseph@josephmorse.me"

# Expose Port
EXPOSE 3000

# Set Work Dir
WORKDIR /app

# Copy package.json
COPY . .

# Run NPM install
RUN npm install


# Run Build
RUN ["npm", "run", "build"]

# Start Server
CMD ['sh']
