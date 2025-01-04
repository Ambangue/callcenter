#!/bin/bash

# Exit on error
set -e

echo "🔨 Building Docker image..."
docker build -t omnidash-connect .

# Check if previous container exists and remove it
if [ "$(docker ps -aq -f name=omnidash-connect)" ]; then
    echo "🧹 Removing existing container..."
    docker rm -f omnidash-connect
fi

echo "🚀 Starting container..."
docker run -d \
  -p 80:80 \
  -e VITE_SUPABASE_URL=${VITE_SUPABASE_URL} \
  -e VITE_SUPABASE_ANON_KEY=${VITE_SUPABASE_ANON_KEY} \
  --name omnidash-connect \
  --health-cmd='wget --quiet --tries=1 --spider http://localhost:80/ || exit 1' \
  --health-interval=30s \
  --health-timeout=3s \
  --health-retries=3 \
  omnidash-connect

echo "⏳ Waiting for container to be healthy..."
for i in {1..30}; do
    if [ "$(docker inspect --format='{{.State.Health.Status}}' omnidash-connect)" == "healthy" ]; then
        echo "✅ Container is healthy and running!"
        echo "🌐 Application is available at http://localhost:80"
        exit 0
    fi
    sleep 1
done

echo "❌ Container failed to become healthy within timeout"
exit 1