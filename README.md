# Intear Tech - Landing Page

A modern, responsive landing page template for Intear Technology Solutions built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with gradient hero section
- **Responsive**: Fully responsive design that works on all devices
- **Typography**: Uses Roboto font for consistent branding
- **Sections**:
  - Header with navigation
  - Hero section with call-to-action buttons
  - About section with feature highlights
  - Services section with placeholder cards
  - Contact section with form and information
  - Footer with company branding
- **Ready for Content**: Placeholder sections marked for easy content addition

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Roboto font
│   ├── page.tsx        # Main landing page
│   └── globals.css     # Global styles with Tailwind
```

## Customization

### Adding Content

The template includes placeholder sections marked with `[Content to be added]`. Simply replace these with your actual content:

- Company description in the About section
- Service details in the Services section
- Contact information in the Contact section

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors: Update the gradient and color scheme in `page.tsx`
- Typography: Modify font weights and sizes
- Layout: Adjust spacing and grid layouts

### Logo

The logo is currently text-based using "INTEAR" with Roboto font. To add a custom logo:

1. Add your logo file to the `public/` directory
2. Replace the text logo in the header section of `page.tsx`

## Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Roboto Font** - Google Fonts integration

## License

This project is private and proprietary to Intear Technology Solutions.
