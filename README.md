# RESUME

A Next.js resume and portfolio site with SEO defaults, crawlable company pages, and deployment-ready configuration.

## Setup

### Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Define your public base URL (optional for local use):
   ```bash
   export NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000`.

### Build and run in production mode

```bash
npm run build
npm run start
```

### Deploy (Vercel)

1. Push this repository to your Git provider.
2. Import the project into Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain (for example, `https://your-domain.com`).
4. Deploy using Vercel defaults (framework is preconfigured in `vercel.json`).
