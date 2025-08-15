# Modern Portfolio Website

A responsive, modern portfolio website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark theme
- 📱 Fully responsive across all devices
- ⚡ Fast loading with Vite
- 🎯 Smooth scrolling navigation
- 📊 Interactive components
- 🚀 Ready for deployment

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages ready

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio-app
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Portfolio Data

Edit `src/data/portfolio.json` to customize:
- Personal information
- Skills and technologies
- Work experience
- Projects
- Education

### Styling

- Colors and theme: `tailwind.config.js`
- Global styles: `src/index.css`
- Component styles: Individual component files

## Deployment

### GitHub Pages

1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

2. Update `vite.config.js` base path to match your repository name

3. Deploy
```bash
npm run deploy
```

### Other Platforms

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload `dist` folder contents

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── sections/     # Page sections
├── data/
│   └── portfolio.json # Portfolio data
├── App.jsx
├── main.jsx
└── index.css
```

## Performance Features

- Code splitting
- Lazy loading
- Optimized images
- Minified CSS/JS
- Tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!