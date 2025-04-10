# Volunteer-NGO Connect 🌍🤝

This project is a **Volunteer-NGO Connect** platform built using **React + TypeScript + Vite**. It enables volunteers to discover and engage with NGOs through a unified, user-friendly interface. NGOs can post projects, manage applications, and track participation, while volunteers can showcase their skills, apply to meaningful causes, and track their contributions.

## Features

-   🔐 Secure Authentication (JWT-based)
-   🧑‍💼 Volunteer & NGO Profiles
-   🛠️ Skills and Certificates Management
-   📢 Project Listings and Applications
-   💬 Messaging System
-   🔔 Notifications & Activity Logs

---

## Tech Stack

-   **Frontend**: React + TypeScript + Vite
-   **Styling**: Tailwind CSS
-   **Backend**: NestJS (in separate repo)
-   **Database**: PostgreSQL
-   **API Communication**: Axios
-   **Authentication**: JWT
-   **Deployment**: (coming soon)

---

## ESLint & Development Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
    extends: [
        // Remove ...tseslint.configs.recommended and replace with this
        ...tseslint.configs.recommendedTypeChecked,
        // Alternatively, use this for stricter rules
        ...tseslint.configs.strictTypeChecked,
        // Optionally, add this for stylistic rules
        ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
        // other options...
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
        },
    },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
    plugins: {
        // Add the react-x and react-dom plugins
        "react-x": reactX,
        "react-dom": reactDom,
    },
    rules: {
        // other rules...
        // Enable its recommended typescript rules
        ...reactX.configs["recommended-typescript"].rules,
        ...reactDom.configs.recommended.rules,
    },
});
```

---

## Get Started

```bash
npm install
npm run dev
```

This will start the development server on `localhost:5173` by default.

---
