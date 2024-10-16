FROM node:16

# Installing libvips-dev for sharp compatibility
RUN apt-get update && apt-get install libvips-dev -y

# Set the environment to be dynamic via ARG
ENV NODE_ENV=${NODE_ENV}

# Set up work directory
WORKDIR /opt/

# Copy package.json and package-lock.json
COPY ./package.json ./package-lock.json ./

# Set path for node_modules
ENV PATH /opt/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Set working directory to /opt/app
WORKDIR /opt/app

# Copy the app code
COPY ./ .

# Build the application
RUN npm run build

# Expose port (defined by env variable, with default 1337)
EXPOSE ${PORT:-1337}

# Set the environment variables, default values will be set at deployment
ENV HOST=${HOST:-0.0.0.0}
ENV PORT=${PORT:-1337}
ENV APP_KEYS=${APP_KEYS}
ENV API_TOKEN_SALT=${API_TOKEN_SALT:-"1bSDb4gzJf1GerDhJD0NqA=="}
ENV ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET:-"fS3z2ztJcjlP8GbSltsyLw=="}
ENV TRANSFER_TOKEN_SALT=${TRANSFER_TOKEN_SALT}
ENV DATABASE_CLIENT=${DATABASE_CLIENT:-postgres}
ENV DATABASE_HOST=${DATABASE_HOST:-localhost}
ENV DATABASE_PORT=${DATABASE_PORT:-5432}
ENV DATABASE_NAME=${DATABASE_NAME:-strapi}
ENV DATABASE_USERNAME=${DATABASE_USERNAME:-postgres}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD:-password}
ENV APP_KEYS=${APP_KEYS:-"p8xBU7MI2YxuxcJSOC4K4A==,py4uVoDgbi0lNQ7Q9u0jwA==,iBrkYYBNSbXAPMO5VwM4/Q==,vI3Q5JUa1ujwFX7tm9Hi7A=="}
ENV DATABASE_SSL=${DATABASE_SSL:-false}
ENV JWT_SECRET=${JWT_SECRET}

# Command to run the development server
CMD ["npm", "run", "start"]
