# Axiom Rise - Clothing Export Website

A modern, responsive website for Axiom Rise, a premium clothing export company built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with responsive layout
- **Product Showcase**: Comprehensive product categories and information
- **Company Information**: Detailed about page with company history and team
- **Services Overview**: Complete breakdown of export services and capabilities
- **Contact Integration**: Contact form with company information and FAQ
- **Mobile Responsive**: Optimized for all device sizes
- **SEO Friendly**: Built with Next.js for optimal search engine optimization

## Pages

- **Home**: Hero section with company overview and featured services
- **Products**: Detailed product categories including formal wear, casual wear, sportswear, and kids clothing
- **About**: Company story, mission, vision, values, timeline, and team information
- **Services**: Manufacturing, design, export, and quality assurance services
- **Contact**: Contact form, company information, and frequently asked questions

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom React components
- **Build Tool**: Next.js built-in bundler

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd axiom-rise
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
axiom-rise/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Footer.tsx
│       └── Navbar.tsx
├── public/
├── .eslintrc.json
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Styling
- Modify `tailwind.config.js` to customize the design system
- Update `src/app/globals.css` for global styles
- Component-specific styles are applied using Tailwind classes

### Content
- Update page content in respective `page.tsx` files
- Modify navigation in `src/components/Navbar.tsx`
- Update footer information in `src/components/Footer.tsx`

### Colors
The project uses a custom primary color scheme defined in `tailwind.config.js`:
- Primary colors range from 50 to 900
- Easy to customize by modifying the color values

## Deployment

This project can be deployed on various platforms:

- **Vercel** (recommended): Connect your repository for automatic deployments
- **Netlify**: Build command `npm run build`, publish directory `.next`
- **AWS/Google Cloud**: Use with containerization or static hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to Axiom Rise. All rights reserved.

## Support

For technical support or questions about the website, please contact the development team.# axiom-rise
