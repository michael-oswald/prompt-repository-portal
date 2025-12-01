# Deployment Guide

## Quick Deploy to GitHub Pages

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit: Prompt Repository"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically trigger on your next push

### Step 3: Access Your Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/prompt-repository-portal/
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the project
- Deploy to GitHub Pages
- Update on every push to main

## Deploy to Vercel

### Quick Deploy
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and your site will be live!

### With GitHub Integration
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite and configure correctly
5. Click "Deploy"

## Deploy to Netlify

### Method 1: Drag & Drop
1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Your site is live!

### Method 2: GitHub Integration
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Deploy to Custom Domain

### Using GitHub Pages with Custom Domain
1. Add a `CNAME` file to `/public` directory:
   ```
   yourdomain.com
   ```
2. In GitHub Settings → Pages, add your custom domain
3. Configure DNS at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

### Using Vercel with Custom Domain
1. In Vercel dashboard, go to your project
2. Settings → Domains
3. Add your domain
4. Follow DNS configuration instructions

## Environment Variables

If you add environment variables in the future:

### Vite (.env file)
```
VITE_API_URL=https://api.example.com
VITE_SUPABASE_URL=your-supabase-url
```

### GitHub Pages
Add secrets in: Settings → Secrets and variables → Actions

### Vercel
Add in: Settings → Environment Variables

### Netlify
Add in: Site settings → Build & deploy → Environment

## Troubleshooting

### Build Fails
- Check that all dependencies are installed: `npm install`
- Ensure Node.js version is 20+
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Routing Issues on GitHub Pages
- The app is configured with `base: '/prompt-repository-portal/'` in `vite.config.ts`
- If deploying to root domain, change to `base: '/'`

### CSS Not Loading
- Ensure `@tailwindcss/postcss` is installed
- Check `postcss.config.js` configuration

### 404 Errors on Deployed Site
- For GitHub Pages, ensure workflow has correct permissions
- For custom domains, check DNS propagation (can take 24-48 hours)

## Production Checklist

Before deploying to production:
- [ ] Update README with your repository URL
- [ ] Replace placeholder links in footer
- [ ] Update GitHub links in Layout component
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Test on multiple browsers
- [ ] Test mobile responsiveness
- [ ] Optimize images in `/public`
- [ ] Add favicon and meta tags
- [ ] Configure SEO meta tags

## Monitoring

### GitHub Pages
Check deployment status:
- Go to Actions tab
- View workflow runs
- Check build logs if deployment fails

### Custom Analytics
Consider adding:
- [Plausible Analytics](https://plausible.io) (privacy-friendly)
- [Umami](https://umami.is) (self-hosted)
- Google Analytics

## Updates & Maintenance

### Update Dependencies
```bash
npm update
npm audit fix
```

### Redeploy
Just push to main branch:
```bash
git add .
git commit -m "Update prompts"
git push origin main
```

GitHub Actions will automatically rebuild and deploy!
