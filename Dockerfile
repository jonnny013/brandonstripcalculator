# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.11.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Vite app lives here
WORKDIR /index.js

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --include=dev

# Copy application code
COPY --link . .

# Build application


# Remove development dependencies
RUN npm prune --omit=dev


# Final stage for app image

# Copy built application


# Start the server by default, this can be overwritten at runtime
EXPOSE 3001
CMD [ "node", "index.js" ]
