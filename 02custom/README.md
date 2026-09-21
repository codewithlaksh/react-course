# Custom React

Welcome to **Custom React**! In this project, we demystify how React works under the hood by building a simplified version of React's core rendering engine from scratch using Vanilla JavaScript and **Vite**.

By implementing our own `createElement` and `render` functions, we explore how React creates DOM elements, attaches props/attributes, handles nested child nodes, and injects everything into the browser's DOM.

---

## 📁 Directory Structure

Below is the essential directory structure for the `02custom` project:

```text
02custom/
├── node_modules/
├── public/
├── src/
│   ├── createElement.js
│   ├── main.js
│   ├── render.js
│   └── style.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 📑 File & Folder Breakdown

Here is an overview of the essential files and folders in this project:

| File / Folder | Type | Description |
| :--- | :--- | :--- |
| `node_modules/` | Directory | Stores third-party npm packages (such as Vite) required for development. |
| `public/` | Directory | Contains static assets served directly as-is without processing by the bundler. |
| `src/` | Directory | Source directory containing our custom React logic and application code. |
| `src/createElement.js` | File | Custom function that creates a DOM element, sets its attributes/props, and appends child elements or text nodes. |
| `src/render.js` | File | Custom function responsible for mounting the generated element tree into the root DOM container. |
| `src/main.js` | File | Entry point script demonstrating how to construct nested elements with `createElement` and mount them with `render`. |
| `src/style.css` | File | Stylesheet for adding custom styles to the rendered elements. |
| `.gitignore` | File | Specifies intentionally untracked files and folders (e.g., `node_modules/`, `dist/`) that Git should ignore. |
| `index.html` | File | The host HTML document containing `<div id="root"></div>` where custom React renders elements. |
| `package.json` | File | Project manifest managing scripts (`dev`, `build`, `preview`) and Vite dev dependencies. |
| `package-lock.json` | File | Automatically locks the exact versions of installed packages for consistent builds. |
| `README.md` | File | Documentation guide covering project overview, core concepts, structure, and setup. |

---

## 💡 How It Works Under the Hood

### 1. `createElement(tagName, attrs, ...children)`
- Creates a new DOM node using `document.createElement(tagName)`.
- Iterates over the `attrs` object and assigns each key-value pair to the element using `setAttribute()`.
- Flattens and appends any passed `children` (strings, nodes, or arrays of nodes) to the element.
- Returns the constructed DOM element.

### 2. `render(root, element)`
- Takes the root DOM element (e.g., `#root`) and the newly created element tree.
- Appends the element tree into the root container using `root.append(element)`.

---

## 🛠️ Setup Guide (VS Code + Node.js)

Before running the app, ensure you have your development environment configured:

### 1. Install Node.js
- Download and install the latest **LTS (Long Term Support)** version of Node.js from [nodejs.org](https://nodejs.org/).
- Verify your installation by opening a terminal and running:
  ```bash
  node -v
  npm -v
  ```

### 2. Install Visual Studio Code (VS Code)
- Download and install VS Code from [code.visualstudio.com](https://code.visualstudio.com/).
- **Recommended VS Code Extensions**:
  - **Prettier - Code Formatter**: Automatically formats your JavaScript/HTML/CSS code on save.
  - **ESLint**: Catches syntax issues and helps maintain clean code.
  - **Live Server** or **Vite**: Provides seamless local development workflows.

---

## 🚀 Setup & Running This App

Follow these simple steps to run this project locally:

1. **Open the project directory in your terminal:**
   ```bash
   cd 02custom
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
| `npm run build` | Compiles production-ready static assets into the `dist/` directory. |
| `npm run preview` | Locally previews the production build. |

---

## 🎯 Conclusion

Congratulations! 🎉 By creating a custom `createElement` and `render` engine from scratch, you have unlocked a deeper understanding of how React translates component trees and JSX into real DOM elements on the screen.

Experiment further by adding event listeners (like `onClick`) or state management to your custom React implementation!

---

<p style="text-align: center;">Made with 💖 & 🍵 by <a style="text-decoration: none;" href="https://www.youtube.com/channel/UCBi8v2w8B7174Y76QcYysiA?sub_confirmation=1" target="_blank">CodeWithLaksh</a></p>
