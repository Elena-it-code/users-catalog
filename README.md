# User Catalog Project

A modern, scalable web application for managing a user catalog, built using the **JSONPlaceholder API**.

## 🚀 Tech Stack
* **React 19** + **Vite** — High-performance development and rendering environment.
* **Redux Toolkit** — Global state management, asynchronous data fetching, and local state updates.
* **React Router 7** — Declarative navigation and robust history handling.
* **TypeScript** — Static typing across all application layers for improved reliability.

## 🏗 Architecture (Feature-Sliced Design)
The project strictly follows the **FSD methodology**, ensuring clear separation of concerns and high maintainability:
* **app** — Store configuration and routing setup.
* **pages** — Page-level composition and routing logic.
* **entities** — Domain logic and business entities (UserCard, user state logic).
* **shared** — Universal UI elements (Input, Select, Grid) and pure utility functions.

Each module features a **Public API (index.ts)** to encapsulate internal structures and maintain clean, predictable imports.

## ✨ Key Features
1. **Filtering & Sorting**: Real-time name search and alphabetical sorting (A-Z / Z-A) with memoized computations.
2. **Pagination**: Smooth "Show more" functionality (displaying 6 cards per step).
3. **Data Management**: Local user deletion from the Redux state.
4. **Detailed Profile**: Comprehensive user information display with a toggle for additional data.
5. **State Handling**: Integrated loaders and error messaging for network failures or server issues.
6. **UX Consistency**: Predictable navigation and deep-link handling for direct page access.

## 🛠 Additional Tools
* **Storybook**: UI showcase configured for the `UserCard` component.
* **Unit Testing**: Business logic in `userSlice` (deletion) tested using **Vitest**.
* **Deployment**: Automated hosting and deployment via **Vercel**.

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install

2. **Run the app**:
   ```bash
   npm run dev

3. **Run Unit tests**:
   ```bash
   npm test

4. **Launch Storybook**:
   ```bash
   npm run storybook