# tonynguyenit18.github.io

Personal portfolio website built with React and Vite.

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **pnpm** - Package manager
- **GitHub Pages** - Hosting

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Opens the development server at `http://localhost:5173`

### Build

```bash
pnpm run build
```

Outputs production build to `dist/` directory.

### Preview

```bash
pnpm run preview
```

Preview the production build locally.

## Deployment

Deploy to GitHub Pages:

```bash
pnpm run deploy
```

This builds the project and publishes to the `master` branch.

## Project Structure

```
src/
├── components/
│   ├── App.jsx       # Main app component
│   ├── Nav.jsx       # Navigation
│   ├── Hero.jsx      # Hero section
│   ├── About.jsx     # About section
│   ├── Work.jsx      # Work/projects section
│   ├── Writing.jsx   # Writing/blog section
│   ├── Contact.jsx   # Contact section
│   └── Footer.jsx    # Footer
├── css/              # Stylesheets
└── images/           # Image assets
```

## License

MIT
