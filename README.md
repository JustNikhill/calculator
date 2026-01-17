# Coreva Website

A professional, minimalistic company website for Coreva - an enterprise AI coordination and execution platform.

## Tech Stack

- **React.js** - UI framework
- **TailwindCSS** - Styling
- **React Router** - Navigation
- **Vite** - Build tool

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components (Navbar, Footer, etc.)
├── pages/          # Page components
│   ├── Home.jsx
│   ├── Product.jsx
│   ├── HowItWorks.jsx
│   ├── Solutions.jsx
│   ├── Technology.jsx
│   ├── Company.jsx
│   ├── Careers.jsx
│   └── Contact.jsx
├── App.jsx         # Main app component with routing
├── main.jsx        # Entry point
└── index.css       # Global styles
```

## Pages

1. **Home** - Hero section, how it works, key capabilities, integrations, why Coreva
2. **Product** - Personal AI agents, multi-agent collaboration, workflow automation, security
3. **How It Works** - Step-by-step process, system flow, results
4. **Solutions** - Team-specific use cases (Engineering, Sales, Operations, Leadership)
5. **Technology** - Technical foundation, architecture diagrams, infrastructure
6. **Company** - Vision, mission, why we built it, core philosophy, founder info
7. **Careers** - Open roles, why join, culture
8. **Contact** - Contact information, form, next steps

## Design Principles

- Minimal and professional
- Clean typography (Inter font)
- Strong white space
- Subtle gradients
- Enterprise-focused aesthetic
- Fully responsive

## Customization

- Colors: Edit `tailwind.config.js` to modify the primary color scheme
- Content: Update page components in `src/pages/`
- Navigation: Modify `src/components/Navbar.jsx`
