# Deploying kostitch.com

This guide covers how to deploy your website to kostitch.com using various hosting platforms.

## Prerequisites

1. **Domain Ownership**: You must own kostitch.com and have access to its DNS settings
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Deploy with Vercel (Recommended - Easiest)

Vercel is the easiest option for React/Vite projects with automatic deployments.

### Steps:

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

3. **Import your project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

4. **Connect your domain**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Add `kostitch.com` and `www.kostitch.com`
   - Vercel will provide DNS records to add

5. **Update DNS at your domain registrar**
   - Log into your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records Vercel provides:
     - Type: `A` record
     - Name: `@` (or root domain)
     - Value: Vercel's IP address
     - Type: `CNAME` record
     - Name: `www`
     - Value: `cname.vercel-dns.com`
   - Wait 24-48 hours for DNS propagation

**Benefits**: Free SSL, automatic deployments, CDN, easy rollbacks

---

## Option 2: Deploy with Netlify

Similar to Vercel, great for React projects.

### Steps:

1. **Push code to GitHub** (same as above)

2. **Sign up/Login to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

3. **Deploy site**
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

4. **Connect domain**
   - Go to "Domain settings" → "Add custom domain"
   - Enter `kostitch.com`
   - Netlify will provide DNS instructions

5. **Update DNS**
   - Add the DNS records Netlify provides at your registrar

**Benefits**: Free SSL, form handling, split testing

---

## Option 3: Deploy with GitHub Pages

Free hosting directly from GitHub.

### Steps:

1. **Update vite.config.js base path** (if using custom domain):
   ```js
   base: '/'
   ```

2. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Custom domain: `kostitch.com`

6. **Update DNS**:
   - Add A records provided by GitHub Pages

**Note**: GitHub Pages requires a bit more setup for React Router

---

## Option 4: Traditional Web Hosting (cPanel, etc.)

If you have traditional hosting with cPanel or similar.

### Steps:

1. **Build your site**:
   ```bash
   npm run build
   ```
   This creates a `dist` folder with all static files.

2. **Upload files**:
   - Connect via FTP/SFTP (FileZilla, Cyberduck, etc.)
   - Upload ALL contents of the `dist` folder to your `public_html` directory
   - Make sure `index.html` is in the root

3. **Configure .htaccess** (for Apache servers):
   Create `public_html/.htaccess`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Point domain**:
   - In your hosting control panel, set kostitch.com as your primary domain
   - Or configure DNS to point to your hosting provider's nameservers

---

## DNS Configuration (All Options)

Regardless of hosting, you'll need to configure DNS at your domain registrar:

### For kostitch.com (root domain):
- **A Record**: Points to your hosting IP
  - Name: `@` or leave blank
  - Type: `A`
  - Value: Your hosting provider's IP address
  - TTL: 3600 (or default)

### For www.kostitch.com:
- **CNAME Record**: Points to your hosting
  - Name: `www`
  - Type: `CNAME`
  - Value: Your hosting provider's CNAME (e.g., `cname.vercel-dns.com`)
  - TTL: 3600

### Important DNS Records:
- **A Record** for root domain (@)
- **CNAME** for www subdomain
- **TXT Record** (if required by hosting for domain verification)

---

## SSL Certificate

Most modern hosting providers (Vercel, Netlify) automatically provide free SSL certificates via Let's Encrypt. For traditional hosting, you may need to:
- Install Let's Encrypt certificate via cPanel
- Or purchase an SSL certificate

---

## Testing Your Deployment

1. **Build locally first**:
   ```bash
   npm run build
   npm run preview
   ```
   Visit `http://localhost:4173` to test the production build

2. **Check all routes work**:
   - Visit each page: `/`, `/capabilities`, `/industries`, etc.
   - Ensure React Router navigation works (no 404s)

3. **Test on mobile**: Use browser dev tools or actual device

---

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works (no 404 errors)
- [ ] Contact form functions (if connected to backend)
- [ ] Images load properly
- [ ] SSL certificate is active (https://)
- [ ] Mobile responsive design works
- [ ] SEO meta tags are correct
- [ ] Analytics tracking (if applicable)

---

## Recommended: Vercel

For this project, **Vercel is recommended** because:
- ✅ Zero configuration needed
- ✅ Automatic deployments from GitHub
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Easy custom domain setup
- ✅ Free tier is generous

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **DNS Issues**: Check DNS propagation at https://dnschecker.org
