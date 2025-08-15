# 🚀 Biswajit Nath - Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a unique terminal-inspired design with animated elements.

![Portfolio Preview](https://img.shields.io/badge/React-18.x-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)

## ✨ Features

### 🎨 Design & UI
- **Terminal-Inspired Interface**: Each section designed as interactive terminal windows
- **Animated Typing Effects**: Scroll-triggered typing animations for terminal commands
- **Floating Navigation**: Modern bottom navigation with smooth transitions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Beautiful Gradients**: Smooth animated background with floating bubbles

### 🔧 Technical Features
- **Live Experience Counter**: Real-time counter showing coding experience with animated scroll effects
- **Interactive Animations**: Scroll-based animations and micro-interactions
- **Modern Typography**: Custom font stack with Space Grotesk and Outfit fonts
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Type Safety**: Full TypeScript implementation

### 📱 Sections
- **Hero**: Interactive terminal with live experience counter and skills showcase
- **About**: Personal information with code-style presentation
- **Experience**: Git log-inspired work history timeline
- **Projects**: File directory-style project showcase
- **Skills**: NPM package list-style skills display
- **Contact**: API-style contact form with terminal aesthetics

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS animations
- **Build Tool**: Vite
- **Fonts**: Space Grotesk, Outfit, Fira Code
- **Icons**: Heroicons, Custom SVG icons
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/biswajit89/portfolio-react.git
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── profile.svg        # Profile image
│   └── favicon.ico        # Site favicon
├── src/
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── FloatingNav.tsx
│   │       ├── TypingAnimation.tsx
│   │       └── ExperienceCounter.tsx
│   ├── data/              # Data files
│   │   └── portfolio.json # Portfolio content
│   ├── types/             # TypeScript types
│   │   └── portfolio.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

## 🎯 Key Components

### ExperienceCounter
Real-time counter showing coding experience with interactive animations:
- Live seconds, minutes, hours counter
- Animated scroll effects when values change
- Terminal-style display boxes

### TypingAnimation
Scroll-triggered typing animations:
- Intersection Observer for performance
- Customizable speed and delay
- Terminal command simulation

### FloatingNav
Modern bottom navigation:
- Auto-hide on scroll down
- Smooth section transitions
- Active section highlighting

## 🎨 Customization

### Update Portfolio Content
Edit `src/data/portfolio.json` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Achievements

### Modify Styling
- **Colors**: Update Tailwind config in `tailwind.config.js`
- **Fonts**: Modify font imports in `src/index.css`
- **Animations**: Customize keyframes in `src/index.css`

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
```bash
VITE_SITE_NAME="Your Name Portfolio"
VITE_SITE_URL="https://your-domain.com"
VITE_CONTACT_FORM_ENDPOINT="your-form-endpoint"
VITE_GA_TRACKING_ID="your-analytics-id"
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🌟 Features Showcase

### Terminal Design
Every section is designed as an interactive terminal window with:
- Realistic terminal headers with colored dots
- Command prompts with typing animations
- Monospace fonts for authentic feel
- Terminal color scheme (green, cyan, yellow, purple)

### Animations
- **Scroll-triggered typing**: Commands type as you scroll to each section
- **Live counters**: Real-time experience counter with scroll animations
- **Floating bubbles**: Animated background elements
- **Smooth transitions**: All interactions have smooth animations

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation
- Performance optimized

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Biswajit Nath**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [@biswajit89](https://github.com/biswajit89)
- Email: biswajitnath.iit@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern terminal interfaces
- Icons from Heroicons
- Fonts from Google Fonts
- Built with love using React and TypeScript

---

⭐ **Star this repo if you found it helpful!**