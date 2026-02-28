#!/bin/bash

echo "🚀 Vercel Auto-Deploy Setup"
echo "=========================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "Step 1: Login to Vercel"
echo "----------------------"
echo "This will open your browser to authenticate..."
vercel login

echo ""
echo "Step 2: Link Project"
echo "-------------------"
cd /root/.openclaw/workspace/techbridge-final
vercel link

echo ""
echo "Step 3: Get Project Info"
echo "-----------------------"
if [ -f .vercel/project.json ]; then
    echo "✅ Project linked successfully!"
    echo ""
    echo "Your Project IDs:"
    cat .vercel/project.json
    echo ""
    
    PROJECT_ID=$(cat .vercel/project.json | grep -o '"projectId":"[^"]*' | cut -d'"' -f4)
    ORG_ID=$(cat .vercel/project.json | grep -o '"orgId":"[^"]*' | cut -d'"' -f4)
    
    echo "PROJECT_ID: $PROJECT_ID"
    echo "ORG_ID: $ORG_ID"
else
    echo "❌ Project not linked. Please run 'vercel link' manually."
    exit 1
fi

echo ""
echo "Step 4: Create Vercel Token"
echo "--------------------------"
echo "Go to: https://vercel.com/account/tokens"
echo "Create a token and paste it here:"
read -s VERCEL_TOKEN

echo ""
echo "Step 5: Test Deployment"
echo "----------------------"
echo "Deploying to Vercel..."
vercel --token $VERCEL_TOKEN --prod --yes

echo ""
echo "✅ Setup Complete!"
echo ""
echo "To enable GitHub auto-deploy, add these secrets:"
echo "https://github.com/krishmunjapara/techbridge-solutions/settings/secrets/actions"
echo ""
echo "VERCEL_TOKEN: [your token]"
echo "VERCEL_ORG_ID: $ORG_ID"
echo "VERCEL_PROJECT_ID: $PROJECT_ID"
echo ""
