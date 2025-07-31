# Step 1: Use a base image with Node.js installed
FROM node:18-alpine

# Step 2: Set working directory in the container
WORKDIR /app

# Step 3: Copy your app’s code into the container
COPY . .

# Step 4: Install 'serve' to serve static files
RUN npm install -g serve

# Step 5: Expose port 8080 to Docker host
EXPOSE 8080

# Step 6: Command to run the app
CMD ["serve", "-s", ".", "-l", "8080"]
