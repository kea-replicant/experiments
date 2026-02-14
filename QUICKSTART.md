# 🚀 Quick Start Guide

**New to programming? No problem!** This guide will walk you through everything.

## 📋 What You Have

Your OpenClaw Experiments website is ready to go! It includes:
- ✅ A beautiful home page
- ✅ An experiments listing page
- ✅ An about page
- ✅ One example experiment
- ✅ A template for adding more experiments
- ✅ Professional design inspired by Develtio

## 👀 Preview Your Website Locally

Before putting it online, let's see it on your computer:

### Option 1: Open Directly (Simplest)
1. Open Finder
2. Navigate to: `Documents/openclaw-website`
3. Double-click `index.html`
4. Your website opens in your browser! 🎉

### Option 2: Use a Local Server (Better)
If you have Python installed (most Macs do):

```bash
cd /Users/parrotsclaw/Documents/openclaw-website
python3 -m http.server 8000
```

Then open your browser and go to: `http://localhost:8000`

Press `Ctrl+C` in the terminal to stop the server.

## 🌐 Put It Online (3 Steps)

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the prompts (it's free!)
4. Verify your email

### Step 2: Install GitHub Desktop (Easiest Way)
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and open it
3. Sign in with your GitHub account

### Step 3: Publish Your Website
1. In GitHub Desktop, click "File" → "Add Local Repository"
2. Click "Choose..." and select your `openclaw-website` folder
3. Click "Create Repository" if prompted
4. Fill in:
   - Name: `openclaw-experiments`
   - Description: "My OpenClaw experiments lab journal"
5. Click "Publish repository"
6. Make sure "Keep this code private" is **unchecked** (must be public for free hosting)
7. Click "Publish Repository"

### Step 4: Enable GitHub Pages
1. Go to your repository on github.com
2. Click "Settings" at the top
3. Click "Pages" in the left menu
4. Under "Branch", select "main"
5. Click "Save"
6. Wait ~1 minute
7. Your site is live! The URL will be shown at the top

**Your website is now online!** 🎉

## ✏️ Adding a New Experiment (Easy Way)

### Option 1: Use Claude Code (Easiest!)
Just tell Claude Code:
> "Add a new experiment titled 'Testing OpenClaw Configuration'. I tested various settings and found that X works better than Y."

Claude will create everything for you!

### Option 2: Manual (Still Easy!)
1. Open `experiments/TEMPLATE.html` in a text editor
2. "Save As" → `experiment-002.html`
3. Replace all the bracketed placeholders `[like this]` with your actual content
4. Save the file
5. Update `experiments.html` to list your new experiment
6. Push to GitHub (see below)

## 🔄 Updating Your Live Website

After making changes:

### Using GitHub Desktop:
1. Open GitHub Desktop
2. You'll see your changes listed
3. Write a summary (e.g., "Added experiment #002")
4. Click "Commit to main"
5. Click "Push origin"
6. Done! Your site updates in ~1 minute

### Using Terminal (if you prefer):
```bash
cd /Users/parrotsclaw/Documents/openclaw-website
git add .
git commit -m "Added new experiment"
git push
```

## 🎨 Changing Colors

Want different colors?

1. Open `css/style.css` in a text editor
2. Find the `:root` section (near the top)
3. Change the colors:
   ```css
   --color-primary: #17ff81;    /* Change this hex code */
   --color-secondary: #9b51e0;  /* Change this hex code */
   --color-accent: #0693e3;     /* Change this hex code */
   ```
4. Save and push your changes

**How to find hex codes?**
- Google "color picker"
- Use the picker to choose colors
- Copy the hex code (e.g., `#17ff81`)

## 📸 Adding Images to Experiments

1. Save your image to the `images/` folder
2. Name it clearly (e.g., `experiment-002-screenshot-1.png`)
3. In your experiment HTML, add:
   ```html
   <img src="../images/experiment-002-screenshot-1.png" alt="What the image shows">
   ```
4. Save and push

## 🔗 Custom Domain Setup (Later)

When you're ready to buy a domain:

1. **Buy your domain** on [GoDaddy](https://godaddy.com)
   - Search for your desired name (e.g., `openclawlab.com`)
   - Purchase it (usually $10-15/year)

2. **Tell Claude Code**: "Help me connect my GoDaddy domain to GitHub Pages"
   - Claude will guide you through the DNS setup
   - It's easier than it sounds!

3. Your site will be at your custom domain instead of `username.github.io`

## 🆘 Need Help?

### Ask Claude Code!
Claude knows this entire website and can:
- ✅ Add experiments for you
- ✅ Change designs
- ✅ Fix problems
- ✅ Answer questions
- ✅ Guide you through any step

Just ask in plain English!

### Common Questions

**Q: How do I change the site title?**
A: Open `index.html`, find `<title>` tag, change the text.

**Q: How do I add more pages?**
A: Ask Claude Code! It's easier than doing it manually.

**Q: What if I break something?**
A: Don't worry! Your GitHub repository keeps all versions. You can always go back. Ask Claude Code to help you revert changes.

**Q: Can I use this for something other than OpenClaw?**
A: Absolutely! Just change the text and customize it however you want.

## 📱 Mobile Friendly?

Yes! Your site automatically works on phones and tablets. Try resizing your browser to see it adapt.

## 🎯 Next Steps

1. **Preview** your site locally
2. **Publish** to GitHub Pages
3. **Add** your first real experiment
4. **Share** the URL with friends/colleagues
5. **Customize** the design to make it uniquely yours
6. **Buy a domain** when you're ready (optional)

---

**You've got this!** 🦜 And remember, Claude Code is here to help with every step.
