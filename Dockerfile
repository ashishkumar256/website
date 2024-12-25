#FROM node:22.12.0
FROM node:14

# Set a working directory
WORKDIR /app

# Copy package.json to install dependencies
COPY package.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . /app/

# Start application
CMD ["npm", "start"]
