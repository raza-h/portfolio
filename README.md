# Portfolio

Raza Haider's software engineering portfolio.

## Table of Contents

1. [Overview](#overview)
2. [Demo](#demo)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [Features](#features)
7. [Development](#development)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)

---

## Overview

A clean and modern portfolio built with Next.js to showcase Raza Haider’s frontend development skills and projects—a reflection of creativity, performance, and design.

---

## Demo

Live preview: [razahaider-three.vercel.app](https://razahaider-three.vercel.app)

---

## Tech Stack

* **Framework**: Next.js (bootstrapped via create-next-app)
* **Language**: TypeScript (\~92%)
* **Styling**: CSS
* **Font Optimization**: `next/font`
* **Containerization**: Docker (Dockerfile present)

---

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/raza-h/portfolio.git
   cd portfolio
   ```

2. **Install dependencies using your preferred package manager:**

   ```bash
   yarn
   ```

3. **Run the development server:**

   ```bash
   yarn dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser to view the app.

5. **Start editing** `app/page.tsx` to see your changes live. Hot-reloading is enabled.

---

## Project Structure *(simplified)*

```
.
├── app/               # Core layout/routes
├── components/        # UI and common components
├── views/             # Page components
├── constants/         # Application constants
├── types/             # Common types
├── hooks/             # Custom React hooks
├── public/            # Static assets (images, fonts)
├── utils/             # Utility functions/helpers
├── Dockerfile         # Docker configuration
├── .dockerignore      # Files to exclude in Docker context
├── .gitignore         # Git ignore patterns
├── next.config.ts     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
├── eslint.config.mjs  # ESLint setup
├── postcss.config.mjs # PostCSS setup
├── package.json       # Project metadata & scripts
└── README.md          # This documentation
```

*(Adjust this if you have deeper nested folders or extra directories.)*

---

## Features

* Lightweight, minimalistic portfolio design
* Pre-configured with TypeScript and ESLint for robust type safety and linting
* Optimized font loading with next/font
* Docker-ready to support containerized deployment
* Structured with reusable components and clean folder architecture

---

## Development

* **Linting**
  ESLint is set up—run `yarn lint` (or equivalent) to check for issues.


* **Build**
  To test production builds locally:

  ```bash
  yarn build
  yarn start
  ```

---

## Deployment

* The project is deployable on Vercel, which powers the live demo.
* To deploy manually on Vercel:

  1. Connect your GitHub repository in Vercel dashboard.
  2. Allow automatic builds on commits to `master`.
  3. Vercel will manage builds and optimize output.

---

## Contributing

Thank you for your interest! I currently have no open issues or pull requests, but contributions are welcome. Before contributing, please check for open discussions or contact me directly.

---

## License

This project is licensed under the **MIT License**.

---

Feel free to ask if you'd like additional sections—like contribution guidelines, code examples, or screenshots—added to the README!

[1]: https://github.com/raza-h/portfolio "GitHub - raza-h/portfolio: Raza Haider's software engineering portfolio."
