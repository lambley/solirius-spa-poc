# Service Centre - SPA template

Basic home page and related pages for the Solirius Reply Service Centre.

Built with:
- Next.js
- TypeScript
- Tailwind CSS
- TinaCMS

## Getting Started

To run the project locally, follow these steps:
```bash
# Clone the repository
git clone git@github.com:lambley/solirius-spa-poc.git
cd solirius-spa-poc
# Install dependencies
npm install
# Start the development server
npm run dev
```

The dev server uses turbopack for fast refresh and hot module replacement.

Required environment variables for TinaCMS:
- NEXT_PUBLIC_TINA_CLIENT_ID - Your TinaCMS client ID
- TINA_TOKEN - Your TinaCMS token (for local development) e.g. Read-Only token
- GITHUB_BRANCH - The branch you want to use for TinaCMS (default is `main`)

Note: TinaCMS requires Github authentication and a valid token to work properly. You can create a Read-Only token for local development.

## Production Build

Currently deployed to Vercel and no need to build locally. However, if you want to build the project for production, run:
```bash
npm run build
```

Currently, permissions for deloyment are set to my personal Vercel account. If you want to deploy to your own Vercel account, you will need to set up the project in your Vercel dashboard and link it to this repository.

Access the Vercel dashboard here: [Vercel Dashboard](https://vercel.com/dashboard/lambley/solirius-spa-poc)
Access the TinaCMS dashboard here: [TinaCMS Dashboard](https://solirius-spa-poc.vercel.app/admin)

---
Trigger Vercel redeploy: 1
