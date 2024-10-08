#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Function to display error messages
error() {
    echo "Error: $1" >&2
    exit 1
}

# Function to display progress messages
progress() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1"
}

# Check if Azure CLI is installed
command -v az >/dev/null 2>&1 || error "Azure CLI is not installed. Please install it first."

# Check if logged in to Azure
az account show >/dev/null 2>&1 || {
    progress "Not logged in to Azure. Initiating login process..."
    az login || error "Failed to log in to Azure"
}

# Configuration
APP_NAME="cmagic-waitlist"
RESOURCE_GROUP="DevOps"
LOCATION="South Africa North"

progress "Starting deployment process. This may take 5-10 minutes. Please be patient."

# Ensure the resource group exists
progress "Ensuring resource group exists..."
az group create --name "$RESOURCE_GROUP" --location "$LOCATION" || error "Failed to create resource group"

# Create container app environment if it doesn't exist
progress "Ensuring container app environment exists..."
az containerapp env create --name "$APP_NAME-env" --resource-group "$RESOURCE_GROUP" --location "$LOCATION" || error "Failed to create container app environment"

# Build and deploy the application using az containerapp up
progress "Building and deploying the application... This step may take several minutes."
az containerapp up \
    --name "$APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --environment "$APP_NAME-env" \
    --source . \
    --ingress external \
    --target-port 4000 \
    --env-vars NODE_ENV=production || error "Failed to deploy the application"

progress "Deployment command completed. Retrieving application URL..."

# Get and display the app URL
APP_URL=$(az containerapp show --name "$APP_NAME" --resource-group "$RESOURCE_GROUP" --query "properties.configuration.ingress.fqdn" -o tsv)
if [ -n "$APP_URL" ]; then
    progress "Deployment completed successfully!"
    echo "Your app is now available at: https://$APP_URL"
    echo "Note: It may take a few more minutes for your app to be fully accessible."
else
    error "Failed to retrieve the app URL"
fi

progress "Deployment process finished. If you encounter any issues, please check the Azure portal for more details."    