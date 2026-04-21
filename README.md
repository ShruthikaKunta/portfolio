# Personal Portfolio

A modern, responsive portfolio website built with React and React Router.

## Features

- **Home Page**: About me, research interests, personal details, and skills
- **Projects Page**: Showcase of projects with GitHub links
- **Responsive Design**: Works on all devices
- **Navigation**: Smooth routing between pages using React Router

## Tech Stack

- React 19
- React Router DOM 7
- CSS3 with modern features (flexbox, grid, gradients)

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm start
```

The app will open at http://localhost:3000

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to GitHub.com
2. Click "New Repository"
3. Name: `portfolio`
4. Click "Create Repository"

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "first commit"

# Set main branch
git branch -M main

# Add remote (replace with your GitHub username)
git remote add origin https://github.com/your-username/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Install gh-pages

```bash
npm install gh-pages --save-dev
```

### Step 4: Update package.json

The package.json is already configured with:

- `homepage`: your GitHub Pages URL
- `predeploy` script: runs before deployment
- `deploy` script: pushes to gh-pages branch

### Step 5: Deploy

```bash
npm run deploy
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: **gh-pages**
4. Click **Save**

Your portfolio will be live at: `https://your-username.github.io/portfolio`

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Projects.js
│   │   └── Projects.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Customization

Edit the following files to personalize your portfolio:

- **`src/pages/Home.js`**: Update personal details, skills, profile picture
- **`src/pages/Projects.js`**: Add your actual projects with GitHub links
- **`src/App.css`**: Modify navigation styling
- **`public/index.html`**: Change page title

## Profile Picture

Replace the placeholder image in `src/pages/Home.js`:

```jsx
<img src="https://via.placeholder.com/150" alt="Profile" />
```

With your actual image path or URL:

```jsx
<img src="/your-photo.jpg" alt="Profile" />
```

## License

MIT

## Links

- **GitHub Repository**: [your-username/portfolio](https://github.com/your-username/portfolio)
- **Live Site**: [your-username.github.io/portfolio](https://your-username.github.io/portfolio)
