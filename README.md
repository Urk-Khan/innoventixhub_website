# 🚀 Innoventix Hub — Next-Gen AI, Voice & Web Platform

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_Canvas-000000?logo=three.js&logoColor=white)](https://threejs.org/)

Innoventix Hub is a high-performance, modern digital agency web platform engineered for delivering cutting-edge **AI Automation**, **Conversational AI Voice Agents**, **Custom Full-Stack Web Development**, and **High-Impact Content Creation**.

---

## 🌟 Key Capabilities & Service Pillars

### 1. 🤖 AI Automation & Workflow Systems
- **Workflow Orchestration**: Scalable n8n workflows, webhook integrations, and API pipelines.
- **CRM Solutions**: GoHighLevel (GHL) migrations, custom CRM development, and automated lead capture.
- **Business Operations**: Automated invoice generation, finance tracking, attendance tracking, and project management portals.

### 2. 🎙️ AI Voice Agents & Conversational AI
- **Multi-Platform Voice Engines**: Integration with Retell AI, Vapi, and Pipecat.
- **24/7 AI Receptionists & Booking**: Automated customer support, taxi booking dispatchers, and live CRM syncing.
- **Seamless Human Handoff**: Low-latency call transfer logic and real-time transcription.

### 3. 💻 Modern Web Development & UX Engineering
- **Custom Web Applications**: Built with React 19, TypeScript, and Vite for ultra-fast load times.
- **SaaS & Enterprise Dashboards**: Data visualization, responsive layouts, and interactive components.
- **CMS & High-Performance WordPress**: Modern headless architectures and high-speed web optimization.

### 4. 🎬 Content Creation & AI UGC
- **AI UGC & Video Production**: High-converting short-form and long-form video editing pipelines.
- **YouTube Automation**: Complete scripting, editing, metadata optimization, and publishing workflows.
- **Visual Assets**: 3D interactive graphics and fluid canvas visualizers powered by Three.js.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [React DOM 19](https://react.dev/) |
| **Build Tooling** | [Vite 8](https://vitejs.dev/) |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **3D & Visuals** | [Three.js](https://threejs.org/) & `@designcodeio/threeui` |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Code Formatter** | [oxfmt](https://github.com/oxc-project/oxc) |

---

## 📁 Project Architecture

```plaintext
innoventixhub_website/
├── public/                     # Static assets & standalone HTML landing pages
│   └── landing-pages/          # Dedicated promotional and book showcase pages
├── src/
│   ├── components/             # Reusable UI & animation components
│   │   ├── FluidCanvas.tsx     # Three.js fluid background animation
│   │   ├── FloatingOrbs.tsx    # Ambient orb visualizer
│   │   ├── Layout.tsx          # Global header, navbar & footer layout
│   │   ├── ParallaxHero.tsx    # Dynamic hero section
│   │   ├── ScrollReveal.tsx    # Scroll-triggered reveal animations
│   │   ├── VideoCard.tsx       # Interactive video showcase card
│   │   └── VideoModal.tsx      # Video playback modal overlay
│   ├── pages/                  # Modular application views & routes
│   │   ├── ai-automation/      # AI CRM, n8n, SMB automation & project modules
│   │   ├── ai-voice-agents/    # Voice agent use cases, demos & taxi dispatchers
│   │   ├── content-creation/   # Video editing, YouTube automation & AI UGC
│   │   ├── web-development/    # Custom web apps, UX design & portfolios
│   │   ├── resources/          # Knowledge base, guides & technical articles
│   │   ├── Home.tsx            # Main landing page
│   │   ├── About.tsx           # Company vision, mission & team
│   │   ├── Book.tsx            # Discovery call scheduler
│   │   └── Contact.tsx         # Inquiries & lead intake form
│   ├── imports/                # Content registries, schemas, and QA dataset
│   ├── App.tsx                 # Route configuration with code-splitting (Suspense)
│   ├── main.tsx                # Application mounting entrypoint
│   └── index.css               # Global theme tokens & Tailwind v4 stylesheet
├── AGENTS.md                   # Agent system prompts and maintenance specs
├── CONTENT_QA_REGISTER.md      # Comprehensive QA & content validation log
├── package.json                # Project dependencies and operational scripts
├── tsconfig.json               # TypeScript strict configuration
└── vite.config.ts              # Vite plugins & path aliasing setup
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: `v20.19.0+` or `v22.12.0+`
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Urk-Khan/innoventixhub_website.git
   cd innoventixhub_website
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Production Build & Deployment

To compile and optimize the application for production:

```bash
pnpm build
# or
npm run build
```

Preview the production build locally:

```bash
pnpm preview
# or
npm run preview
```

### Deployment Targets
The output in `dist/` is static and ready to be deployed on:
- **Vercel** / **Netlify** / **Cloudflare Pages** / **AWS Amplify** / **GitHub Pages**

---

## 📄 Code Quality & Formatting

Format the codebase using `oxfmt`:
```bash
pnpm format
# or
npm run format
```

---

## 🤝 Contributing & Team

Maintained by **Innoventix Hub Core Team**.

- **Organization**: [Innoventix Hub](https://github.com/Urk-Khan)
- **Repository**: [Urk-Khan/innoventixhub_website](https://github.com/Urk-Khan/innoventixhub_website)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
