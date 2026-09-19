# Our First App

Welcome to **Our First App**! This is the foundational starter project for our React journey. Built using **React 19** and powered by **Vite**, this project demonstrates the structure of a modern Single Page Application (SPA), the concept of components, and how React seamlessly renders dynamic UI inside the browser.

---

## 📁 Directory Structure

Below is the essential directory structure for the `01first` project:

```text
01first/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 📑 File & Folder Breakdown

Here is an overview of the essential files and folders in this project:

| File / Folder | Type | Description |
| :--- | :--- | :--- |
| `node_modules/` | Directory | Stores all third-party npm packages and dependencies required by the project. |
| `public/` | Directory | Holds static assets that are served directly as-is without being processed by Vite. |
| `src/` | Directory | The main source code directory containing React components, logic, and styles. |
| `src/assets/` | Directory | Directory for static assets (images, icons) imported directly into components. |
| `src/App.jsx` | File | The root React component that defines the primary UI layout and component tree. |
| `src/index.css` | File | Global stylesheet containing baseline CSS styles applied across the entire app. |
| `src/main.jsx` | File | The JavaScript entry point that initializes React and mounts `<App />` into `#root`. |
| `.gitignore` | File | Specifies intentionally untracked files and folders (e.g., `node_modules/`, `dist/`) that Git should ignore. |
| `eslint.config.js` | File | Configuration file for ESLint defining code quality and React linting rules. |
| `index.html` | File | The main HTML document containing `<div id="root"></div>` where React renders the app. |
| `package.json` | File | Project manifest tracking dependencies, scripts (`dev`, `build`, `lint`), and metadata. |
| `package-lock.json` | File | Automatically locks the exact versions of installed packages for consistent builds. |
| `vite.config.js` | File | Configuration file for Vite dev server and build settings (includes React plugin). |
| `README.md` | File | Documentation guide covering project overview, structure, and setup instructions. |

---

## 🛠️ Setup Guide (VS Code + Node.js)

Before running the app, ensure you have your development environment configured:

### 1. Install Node.js
- Download and install the latest **LTS (Long Term Support)** version of Node.js from [nodejs.org](https://nodejs.org/).
- Verify your installation by opening a terminal (PowerShell / Command Prompt / Terminal) and running:
  ```bash
  node -v
  npm -v
  ```

### 2. Install Visual Studio Code (VS Code)
- Download and install VS Code from [code.visualstudio.com](https://code.visualstudio.com/).
- **Recommended VS Code Extensions**:
  - **ES7+ React/Redux/React-Native snippets**: Speeds up creating React components with shortcuts.
  - **Prettier - Code Formatter**: Automatically formats your code on save.
  - **ESLint**: Catches syntax errors and enforces code style directly in the editor.
  - **Auto Rename Tag**: Automatically renames paired HTML/JSX tags.

---

## 🚀 Setup & Running This App

Follow these simple steps to run this project locally:

1. **Open the project directory in your terminal:**
   ```bash
   cd 01first
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   - Click the link shown in your terminal or open your browser and navigate to `http://localhost:5173/`.

### Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles production-ready assets into the `dist/` directory. |
| `npm run preview` | Locally serves and previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🎯 Conclusion

Congratulations! 🎉 You have explored the anatomy of a modern React application. You understand how Vite powers the development workflow, how React components are structured, and how the virtual DOM ties into `index.html`.

Take some time to experiment by editing `src/App.jsx` and watch your changes update instantly in the browser!

---

<p style="text-align: center;">Made with 💖 & 🍵 by <a style="text-decoration: none;" href="https://www.youtube.com/channel/UCBi8v2w8B7174Y76QcYysiA?sub_confirmation=1" target="_blank">CodeWithLaksh</a></p>
