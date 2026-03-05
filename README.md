# Personal Developer Portfolio

A minimalist, responsive developer portfolio built with modern web technologies. This project was created as both a professional portfolio and a learning exercise in modern frontend development.

## 🚀 Built With

- **React 19** - UI Library
- **Vite 6** - Next Generation Frontend Tooling (Lightning fast HMR & builds)
- **Tailwind CSS 4** - Utility-first CSS framework for rapid styling
- **React Router 7** - Declarative routing for React
- **Framer Motion** - Production-ready animations
- **Lucide React** - Beautiful, consistent icon toolkit

## 📂 Project Structure

The codebase is organized to be beginner-friendly, modular, and easy to maintain:

```
├── public/                 # Static assets (favicon, images, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Footer.jsx      # Bottom footer with social links
│   │   ├── Navbar.jsx      # Top navigation and mobile menu
│   │   └── ProjectCard.jsx # Reusable card for project items
│   ├── context/            # Global React Contexts
│   │   └── ThemeContext.jsx# Manages Light/Dark mode state
│   ├── pages/              # Top-level page components
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experiments.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Writing.jsx
│   ├── App.jsx             # Main layout and routing configuration
│   ├── index.css           # Tailwind imports and global theme variables
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration with Tailwind plugin
```

## 🛠️ Running Locally

Follow these steps to run the website on your local machine:

1. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **View the site:**
   Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

4. **Build for production:**
   To create an optimized production build, run:
   ```bash
   npm run build
   ```
   This will generate a `dist` directory with your minified assets.

## 🚢 Deployment to GitHub Pages

To host this website for free on GitHub Pages:

1. **Update `vite.config.js`:**
   If your repository is named something other than `<username>.github.io` (e.g., `portfolio`), you need to add a `base` to `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name if necessary
     plugins: [react(), tailwindcss()],
   })
   ```

2. **Install `gh-pages` package:**
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Update `package.json` scripts:**
   Add these two scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist",
     // ... other scripts
   }
   ```

4. **Deploy:**
   Run the deployment command:
   ```bash
   npm run deploy
   ```
   Go to your GitHub repository settings -> Pages, and ensure the source is set to the `gh-pages` branch.

## 💡 Suggestions for Extending the Site

Here are some ways you can continue learning and iterating on this portfolio:

1. **MDX Blog Integration (`vite-plugin-mdx`)**:
   Instead of hardcoding the `Writing` page articles, set up MDX to allow you to write blog posts in pure Markdown while still embedding React components inside them.
2. **Dynamic Project Data Retrieval**:
   Move the static arrays of data (like `projectsData` or `educationData`) into a headless CMS like Contentful, Sanity.io, or even just a remote JSON file. Then use `useEffect` or React Query to fetch them.
3. **Advanced Animations**:
   Use Framer Motion's `AnimateSharedLayout` or `useScroll` hooks to create more complex page transition animations or scroll-linked effects.
4. **Dark Mode Polish**:
   Customize the Tailwind `@theme` configuration in `index.css` to add more intricate color palettes for dark mode.
5. **Contact Form Component**:
   Integrate a service like Formspree or EmailJS into the `Contact` page to allow visitors to send you messages directly from the website without opening their email client.
