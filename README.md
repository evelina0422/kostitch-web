# Kostitch Web - Garment Manufacturing Website

A modern, high-converting website for garment manufacturing business built with Vite + React.

## Tech Stack

- **React 18** with Vite
- **React Router** for navigation
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Framer Motion** for animations
- **Lucide React** for icons

## Setup Instructions

### 1. Install Dependencies

Run the following commands in your terminal:

```bash
npm install
```

This will install all required dependencies including:
- React & React DOM
- React Router DOM
- React Hook Form
- Framer Motion
- Lucide React
- Tailwind CSS & PostCSS
- Vite & plugins

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  app/
    App.jsx          # Main app component
    routes.jsx       # React Router configuration
  components/
    layout/          # Navbar, Footer, Container
    ui/              # Reusable UI components (Button, Input, etc.)
    sections/        # Home page sections
  pages/             # All page components
  data/              # Site configuration and content
  seo/               # SEO component
  styles/            # Global styles
```

## Pages

- `/` - Home
- `/capabilities` - Manufacturing capabilities
- `/industries` - Industries we serve
- `/portfolio` - Project portfolio
- `/process` - Our manufacturing process
- `/about` - About us
- `/contact` - Contact form and information

## Features

- ✅ Responsive, mobile-first design
- ✅ SEO-friendly with meta tags
- ✅ Form validation with React Hook Form
- ✅ Smooth animations with Framer Motion
- ✅ Accessible components
- ✅ Clean, maintainable code structure

## Customization

### Update Company Information

Edit `src/data/siteConfig.js` to update:
- Company name
- Contact information
- Social media links
- Address

### Update Content

Edit `src/data/content.js` to modify:
- Home page content
- Hero section text
- Capabilities list
- Process steps
- Industries served

## Next Steps

- Connect contact form to email service (Firebase, SendGrid, etc.)
- Add real images to replace placeholders
- Implement file upload functionality
- Add analytics tracking
- Set up environment variables for API keys
