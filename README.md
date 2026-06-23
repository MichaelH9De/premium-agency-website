# Premium Agency Website

A modern, scalable, and professional website for a high-value information-based agency.

## Features

- ✨ Modern Next.js 14 with React 18
- 🎨 Tailwind CSS for responsive design
- 📱 Fully responsive on all devices
- ⚡ Optimized performance
- 🔍 SEO-friendly
- ♿ Accessible components
- 📊 Service showcase
- 💬 Testimonials section
- 📧 Contact/CTA section

## Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Node Version**: 18+

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/MichaelH9De/premium-agency-website.git
cd premium-agency-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
.
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── About.tsx          # About section
│   ├── Expertise.tsx      # Expertise areas
│   ├── Testimonials.tsx   # Client testimonials
│   ├── CTA.tsx            # Call-to-action
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind config
└── next.config.js         # Next.js config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: "#1a365d",
  secondary: "#2d5a8c",
  accent: "#f6ad55",
}
```

### Content

All content can be edited in the respective component files in `/components`.

## Performance

- Next.js automatic code splitting
- Image optimization
- CSS optimization with Tailwind
- Fast refresh in development

## SEO

- Semantic HTML
- Meta tags in layout
- Responsive design
- Fast page load times

## Deployment

This project is optimized for deployment on:

- Vercel (recommended)
- Netlify
- AWS
- Any Node.js hosting

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Future Enhancements

- [ ] Blog section
- [ ] Case studies
- [ ] Contact form backend
- [ ] Newsletter integration
- [ ] Analytics
- [ ] Dark mode
- [ ] Multi-language support

## License

MIT License - feel free to use this for your projects

## Support

For questions or support, reach out to the development team.
