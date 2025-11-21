# Agent Studio Landing Page

A modern, responsive landing page for Agent Studio built with Next.js, JavaScript (JSX), and TailwindCSS.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Plans Section**: Interactive pricing plans (Monthly, Yearly, Enterprise) with feature comparison
- **Contact Section**: Contact form with validation and contact information
- **Responsive Design**: Fully responsive across all device sizes
- **Accessibility**: Built with accessibility best practices (ARIA labels, keyboard navigation)
- **Modern UI**: Clean, professional design with white and orange theme

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
agent-studio-landing/
├── app/
│   ├── layout.jsx      # Root layout with metadata
│   ├── page.jsx        # Main landing page
│   └── globals.css     # Global styles with TailwindCSS
├── components/
│   ├── PlansSection.jsx    # Pricing plans component
│   └── ContactSection.jsx  # Contact form component
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Colors

The theme colors (white and orange) are configured in `tailwind.config.js`. You can modify the primary color values:

```javascript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // Main orange color
    light: '#FF8C5A',    // Lighter orange
    dark: '#E55A2B',     // Darker orange
  },
}
```

### Plans

Edit the plans data in `components/PlansSection.jsx` to customize pricing, features, and descriptions.

### Contact Form

The contact form in `components/ContactSection.jsx` currently logs to console. Connect it to your backend API by modifying the `handleSubmit` function.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **JavaScript (JSX)**: React components written in JSX
- **TailwindCSS**: Utility-first CSS framework
- **React**: UI library

## License

MIT

