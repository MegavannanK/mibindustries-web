# Build stage image
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./

RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

RUN ls -la /app/.


# # Production stage image
FROM node:20-alpine AS production

WORKDIR /app


COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# # Expose the port the app runs on
EXPOSE 3000

ENV HOST=0.0.0.0

# Start the application
CMD ["npm", "start"]