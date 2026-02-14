# 🦜 OpenClaw Experiments Lab

A playful yet professional lab journal for documenting OpenClaw experiments. Built with a clean, modern design inspired by [Develtio](https://develtio.com).

## 🎨 Design

- **Color Palette**: Bright green (#17ff81), Purple (#9b51e0), Cyan (#0693e3)
- **Style**: Modern, minimalist, tech-forward with personality
- **Theme**: Green parrots 🦜 and crab claws 🦞

## 📁 Project Structure

```
openclaw-website/
├── index.html              # Home page
├── experiments.html        # All experiments listing
├── about.html              # About page
├── css/
│   └── style.css          # All styles (Develtio-inspired)
├── js/
│   └── main.js            # Interactive features
├── experiments/
│   ├── TEMPLATE.html      # Template for new experiments
│   └── experiment-001.html # Example experiment
├── images/                # Store your images here
└── README.md              # This file
```

## ✨ Features

- **Responsive Design**: Works on all devices
- **Search & Filter**: Find experiments quickly
- **Animated Stats**: Interactive statistics
- **Code Highlighting**: Beautiful code blocks with copy button
- **Easy to Update**: Simple HTML files, no complex build process

## 🚀 How to Add a New Experiment

### Method 1: Copy the Template (Recommended)

1. **Copy the template file**:
   ```bash
   cp experiments/TEMPLATE.html experiments/experiment-002.html
   ```

2. **Edit the new file**:
   - Replace `[XXX]` with your experiment number (e.g., `002`)
   - Replace `[Your Experiment Title]` with your actual title
   - Replace `[Date]` with the experiment date
   - Fill in all sections with your content
   - Add tags that describe your experiment

3. **Add images** (if you have any):
   - Save images to the `images/` folder
   - Name them like: `experiment-002-screenshot-1.png`
   - Reference them in your HTML: `<img src="../images/experiment-002-screenshot-1.png" alt="Description">`

4. **Update the experiments listing**:
   - Open `experiments.html`
   - Copy an existing experiment card
   - Update it with your new experiment details
   - Make sure to set `data-tags` attribute for filtering

5. **Update the home page** (optional):
   - Open `index.html`
   - Update the "Latest Experiments" section if you want to feature it
   - Update the stats numbers

### Method 2: Ask Claude Code

Just tell Claude Code:
> "Add a new experiment about [topic]. The experiment involved [what you did]. I found that [your findings]."

Claude will create the experiment file and update all necessary pages for you!

## 🎯 What to Include in Each Experiment

Every experiment should include:

1. **Overview**: What is this experiment about?
2. **Objectives**: What are you trying to achieve?
3. **Process**: Step-by-step what you did
4. **Findings**: What did you discover?
5. **Screenshots/Data**: Visual evidence (optional)
6. **Code Snippets**: Configuration or code used (optional)
7. **Conclusions**: What did you learn?
8. **Next Steps**: What's next?

## 🏷️ Suggested Tags

Use these tags to categorize your experiments:
- `setup` - Initial setup and configuration
- `basics` - Fundamental concepts
- `advanced` - Complex topics
- `debugging` - Troubleshooting
- `optimization` - Performance improvements
- `integration` - Connecting with other tools
- `testing` - Testing and validation
- `documentation` - Documentation-related

## 🌐 Publishing to GitHub Pages

### Step 1: Create a GitHub Account
If you don't have one, go to [github.com](https://github.com) and sign up (it's free!)

### Step 2: Create a New Repository
1. Click the "+" in the top right → "New repository"
2. Name it: `openclaw-experiments`
3. Make it Public
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### Step 3: Push Your Website
In your terminal, navigate to the website folder and run:

```bash
cd /Users/parrotsclaw/Documents/openclaw-website

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: OpenClaw Experiments Lab 🦜"

# Connect to GitHub (replace YOUR-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/openclaw-experiments.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" (top right)
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait ~1 minute, then your site will be live at:
   `https://YOUR-USERNAME.github.io/openclaw-experiments/`

## 🔗 Connecting a Custom Domain (GoDaddy)

### Step 1: Buy Your Domain
1. Go to [GoDaddy.com](https://godaddy.com)
2. Search for and purchase your domain (e.g., `openclawlab.com`)

### Step 2: Configure DNS on GoDaddy
1. Log in to GoDaddy
2. Go to "My Products" → "DNS" for your domain
3. Add these DNS records:

   **For apex domain (e.g., openclawlab.com):**
   - Type: `A`, Name: `@`, Value: `185.199.108.153`
   - Type: `A`, Name: `@`, Value: `185.199.109.153`
   - Type: `A`, Name: `@`, Value: `185.199.110.153`
   - Type: `A`, Name: `@`, Value: `185.199.111.153`

   **For www subdomain:**
   - Type: `CNAME`, Name: `www`, Value: `YOUR-USERNAME.github.io`

4. Save changes (can take up to 48 hours to propagate, usually much faster)

### Step 3: Configure GitHub Pages
1. In your GitHub repository, go to Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `openclawlab.com`)
3. Click "Save"
4. Wait for DNS check to pass
5. Check "Enforce HTTPS" once available

### Step 4: Add CNAME File
Create a file named `CNAME` in your website root (no extension):

```bash
echo "openclawlab.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

Done! Your site will be live at your custom domain! 🎉

## 📝 Updating Your Website

Every time you add or modify an experiment:

```bash
cd /Users/parrotsclaw/Documents/openclaw-website

# Check what changed
git status

# Add your changes
git add .

# Commit with a message
git commit -m "Add experiment #002: [Your experiment title]"

# Push to GitHub (and automatically update your live site!)
git push
```

Your website updates automatically when you push to GitHub!

## 🎨 Customizing Colors and Design

All design is in `css/style.css`. To change colors:

1. Open `css/style.css`
2. Find the `:root` section at the top
3. Change the color values:
   ```css
   --color-primary: #17ff81;     /* Bright Green */
   --color-secondary: #9b51e0;   /* Purple */
   --color-accent: #0693e3;      /* Cyan */
   ```
4. Save and push to update!

## 🦜 About the Mascots

- **Parrot (🦜)**: Represents curiosity, communication, and colorful thinking
- **Claw (🦞)**: Represents precision, grip, and getting to the heart of problems

Together they embody the spirit of scientific exploration with personality!

## 🛠️ Tech Stack

- **HTML5**: Structure
- **CSS3**: Styling (with CSS Variables)
- **Vanilla JavaScript**: Interactivity (no frameworks!)
- **GitHub Pages**: Free hosting
- **No build process**: Simple and straightforward

## 📞 Need Help?

- Ask Claude Code! It knows this entire codebase and can help you:
  - Add new experiments
  - Modify designs
  - Fix issues
  - Deploy updates

## 📄 License

This is your personal lab journal. Do whatever you want with it! 🦜

---

**Happy Experimenting!** 🧪🦞🦜
