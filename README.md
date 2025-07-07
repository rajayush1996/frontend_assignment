## Overview

This is the React frontend for the Employee App, built with Vite, Tailwind CSS, Apollo Client, and Headless UI. It consumes the GraphQL API to provide a POC for:

* Responsive navigation (desktop + mobile)
* Light/Dark mode toggle with persistence
* Grid and tile views of employee data
* Detail and edit modals
* Pagination, sorting, and filtering UI controls
* Role-based UI adjustments (admin vs employee)

## Tech Stack

* **React** (v18+)
* **Vite** (fast build & dev server)
* **Tailwind CSS** for utility-first styling
* **Apollo Client** for GraphQL data management
* **Headless UI** (Dialog, Transition) for accessible modals
* **Framer Motion** for subtle animations
* **Lucide React** for icons
* **React Router DOM** for client routing

## Prerequisites

* Node.js (v16 or later)
* npm or yarn
* A running GraphQL backend (see backend README)

## Setup & Installation

1. **Clone the repo**

   ```bash
   git clone <frontend-repo-url> frontend
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment variables**
   Create a `.env` file in the project root with:

   ```env
   VITE_GRAPHQL_URL=https://your-backend-url/graphql
   ```

   * Prefix environment variables with `VITE_` for Vite to expose them in `import.meta.env`.

4. **Run in development**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173` by default.

## Available Scripts

* `npm run dev`
  Start the Vite development server with hot module replacement.

* `npm run build`
  Create a production build in the `dist` folder.

* `npm run preview`
  Preview the production build locally.

## GraphQL Integration

* The Apollo Client is configured in `src/apollo/client.js`, reading the API URL from `import.meta.env.VITE_GRAPHQL_URL`.
* GraphQL operations live in `src/graphql/operations.js` (queries, mutations, inputs).
* `useQuery` and `useMutation` hooks drive data fetching and form submissions.

## Dark Mode

* `src/hooks/useDarkMode.js` manages a `dark` class on `<html>` and persists the user’s preference in `localStorage`.
* Components use Tailwind’s `dark:` variants (e.g. `bg-white dark:bg-gray-900`) to invert styles.
* Toggle via the button in the Navbar.

## Folder Structure

```
frontend/
├── public/               # static assets
├── src/
│   ├── apollo/           # Apollo Client setup
│   ├── assets/           # images, icons
│   ├── components/       # UI components & primitives
│   │   ├── ui/           # shared Button, IconButton, Table, Modal
│   │   ├── Navbar.jsx
│   │   ├── EmployeeGrid.jsx
│   │   ├── EmployeeTile.jsx
│   │   ├── EditEmployeeModal.jsx
│   │   └── EmployeeDetailModal.jsx
│   ├── graphql/          # GraphQL queries & mutations
│   ├── hooks/            # custom React hooks
│   ├── pages/            # route-based pages (Dashboard, Login)
│   ├── App.jsx           # top-level routes & layout
│   ├── main.jsx          # entry point, Tailwind CSS import
│   └── index.css         # global styles, Tailwind directives
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── package.json
```

## Deployment

### Vercel / Netlify

1. Push to GitHub.
2. Create a new project in Vercel/Netlify and link the repo.
3. Set **Environment Variables**:

   * `VITE_GRAPHQL_URL` → your backend URL
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy—your app will be live on a custom URL.

## Contributing

* Fork the repo, create a feature branch, and open a pull request.
* Ensure any code follows the existing style and passes linting.

## License

MIT © Ayush Raj
