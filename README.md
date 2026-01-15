# Professional Portfolio

A modern, responsive personal portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS**. This project showcases professional information, skills, and projects with smooth animations and a clean design.

## 🚀 Technologies Used

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Core:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:**
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - `clsx` & `tailwind-merge` for class management
  - `tw-animate-css` for animations
- **Animations:** `motion` (Framer Motion)
- **UI Components:**
  - [Radix UI](https://www.radix-ui.com/) (Primitives for customized accessible components)
  - [Lucide React](https://lucide.dev/) (Icons)
  - [React Fast Marquee](https://www.react-fast-marquee.com/)
- **Forms & Validation:**
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/)
  - [@emailjs/browser](https://www.emailjs.com/) (For handling contact form submissions)
- **Code Quality:** ESLint, Prettier

## ✨ Features

- **Modern UI/UX:** Clean, responsive design optimized for all devices.
- **Dynamic Animations:** Smooth transitions and entering animations.
- **Contact Form:** Fully functional contact form integrated with EmailJS.
- **Modular Architecture:** Built with reusability in mind using Next.js App Router and specialized components.

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS recommended).

### Installation

1.  Clone the repository

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

Start the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm run start
# or
yarn start
```

## 📂 Project Structure

```
src/
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI components
├── constants/    # Static data and configuration
├── lib/          # Utility functions and helpers
└── ...
```

## 📜 Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.

---

Built with ❤️ by Saga
