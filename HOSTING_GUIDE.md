# Website Hosting Guide

Your website is ready to be hosted! Here are the easiest options to get a shareable URL:

## Option 1: GitHub Pages (Recommended - Free)

### Steps:
1. **Create a GitHub account** (if you don't have one): https://github.com
2. **Create a new repository** on GitHub:
   - Go to https://github.com/new
   - Name it (e.g., `dr-jain-lab` or `matrix-lab`)
   - Make it **Public** (required for free GitHub Pages)
   - Click "Create repository"

3. **Initialize git and push your files**:
   ```bash
   cd /Users/jainm/Sites
   git init
   git add .
   git commit -m "Initial commit - Dr. Jain's Laboratory website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Option 2: Netlify (Easiest - Free)

### Steps:
1. **Go to Netlify**: https://www.netlify.com
2. **Sign up** (free account)
3. **Drag and drop** your `/Users/jainm/Sites` folder onto Netlify's deploy area
4. **Get instant URL**: Netlify will give you a URL like `https://random-name-123.netlify.app`
5. **Optional**: You can customize the site name in settings

## Option 3: Vercel (Free)

### Steps:
1. **Go to Vercel**: https://vercel.com
2. **Sign up** (free account)
3. **Import your project**:
   - Click "Add New" → "Project"
   - Drag and drop your folder or connect to GitHub
4. **Deploy**: Vercel will automatically deploy and give you a URL

## Option 4: University Hosting

Since you mentioned hosting at `https://www.nmt.edu/academics/mtls/faculty/Manish_jain.php`, you may want to:
1. Contact your IT department at NMT
2. Upload files to the university web server
3. Place files in the appropriate directory

## Quick Start (GitHub Pages)

If you want to use GitHub Pages right now, run these commands:

```bash
cd /Users/jainm/Sites
git init
git add .
git commit -m "Initial commit"
```

Then create the repository on GitHub and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Notes:
- All your files (HTML, CSS, JS, images) are ready
- Make sure `research.png` and `Picture1.png` are in the same directory
- The website will work on any of these platforms
- All links between pages use relative paths, so they'll work correctly

## Recommended URL Structure:
- GitHub Pages: `https://YOUR_USERNAME.github.io/matrix-lab/`
- Netlify: `https://matrix-lab.netlify.app` (customizable)
- Vercel: `https://matrix-lab.vercel.app` (customizable)

Choose the option that works best for you!

