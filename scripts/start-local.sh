#!/bin/bash

# Build Docker image
docker build -t omnidash-connect .

# Run container with environment variables
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