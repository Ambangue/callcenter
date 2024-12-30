#!/bin/bash

# Build Docker image
docker build -t omnidash-connect .

# Run container
docker run -d -p 80:80 --name omnidash-connect omnidash-connect