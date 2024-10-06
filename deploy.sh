#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to display error messages
error() {
    echo "Error: $1" >&2
    exit 1
}

# Check if required tools are installed
command_exists az || error "Azure CLI is not installed. Please install it first."
command_exists docker || error "Docker is not installed. Please install it first."

# Check if logged in to Azure
az account show >/dev/null 2>&1 || error "Not logged in to Azure. Please run 'az login' first."

# Configuration
APP_NAME="cmagic-waitlist-app"
RESOURCE_GROUP="DevOps"
LOCATION="eastus"

# Ensure the resource group exists
echo "Ensuring resource group exists..."
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" || error "Failed to create resource group"

# Build and deploy the application using az containerapp up
echo "Building and deploying the application..."
az containerapp up \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --source . \
    --ingress external \
    --target-port 4000 \
    --env-vars NODE_ENV=production || error "Failed to deploy the application"

# Get and display the app URL
APP_URL=$(az containerapp show --name "$APP_NAME" --resource-group "$RESOURCE_GROUP" --query "properties.configuration.ingress.fqdn" -o tsv)
if [ -n "$APP_URL" ]; then
    echo "Deployment completed successfully!"
    echo "Your app is now available at: https://$APP_URL"
else
    error "Failed to retrieve the app URL"
fi