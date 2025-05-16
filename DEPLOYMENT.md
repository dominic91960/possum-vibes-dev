# Possum Vibes Deployment Guide

This repository is configured with GitHub Actions for continuous integration and deployment to a VPS.

## CI/CD Setup

The project uses GitHub Actions to automatically build a Docker image and deploy it to a VPS when changes are pushed to the main branch.

### Required GitHub Secrets

To make the deployment work, you need to add the following secrets to your GitHub repository:

1. `DOCKERHUB_USERNAME`: Your Docker Hub username
2. `DOCKERHUB_TOKEN`: A Docker Hub access token
3. `VPS_HOST`: The IP address or hostname of your VPS
4. `SSH_PRIVATE_KEY`: The full SSH private key for authentication to your VPS

### How to Add GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" → "Secrets and variables" → "Actions"
3. Click on "New repository secret"
4. Add each of the required secrets

### Deployment Process

1. When you push to the main branch, GitHub Actions will:
   - Build a Docker image of your application
   - Push the image to Docker Hub
   - SSH into your VPS as the root user
   - Pull the latest image
   - Stop the existing container (if any)
   - Start a new container with the latest image

## Manual Deployment

If you want to deploy manually:

1. Build the Docker image:
   ```bash
   docker build -t username/possum-vibes .
   ```

2. Run the container:
   ```bash
   docker run -d --name possum-vibes-container -p 3000:3000 username/possum-vibes
   ```

## Using Docker Compose

You can also use Docker Compose for deployment:

1. Update the `DOCKERHUB_USERNAME` environment variable:
   ```bash
   export DOCKERHUB_USERNAME=your-username
   ```

2. Deploy with Docker Compose:
   ```bash
   docker-compose up -d
   ```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
