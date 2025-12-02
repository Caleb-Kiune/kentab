# Kentab Insurance Agency

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<br />
<div align="center">
  <a href="https://www.kentabinsurance.com">
    <img src="public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Kentab Insurance Agency</h3>

  <p align="center">
    Your Peace, Our Concern.
    <br />
    <a href="https://www.kentabinsurance.com"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.kentabinsurance.com">View Demo</a>
    ·
    <a href="https://github.com/Caleb-Kiune/kentab/issues">Report Bug</a>
    ·
    <a href="https://github.com/Caleb-Kiune/kentab/issues">Request Feature</a>
  </p>
</div>

## About The Project

![Product Screenshot](https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop)

**Kentab Insurance Agency** is a modern, full-stack web application designed to provide comprehensive insurance solutions for individuals and businesses in Kenya. Built with the latest web technologies, it offers a seamless digital experience for clients to explore insurance products, request quotes, and get in touch with agents.

The platform is engineered for trust, speed, and accessibility, ensuring that every interaction reflects the agency's commitment to "Your Peace, Our Concern."

### Live Demo
🚀 [https://www.kentabinsurance.com](https://www.kentabinsurance.com)

## Table of Contents
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Main Pages & Components](#main-pages--components)
- [Forms & Integrations](#forms--integrations)
- [Deployment](#deployment)
- [Contact](#contact)

## Key Features

- 🛡️ **Comprehensive Product Catalog**: Detailed pages for Motor, Business, Health, Life, Travel, and Pet insurance.
- 📝 **Smart Quote System**: Interactive multi-step forms for generating accurate insurance quotes.
- 📱 **Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
- ⚡ **High Performance**: Built on Next.js 14 for lightning-fast page loads and SEO optimization.
- 🎨 **Modern UI/UX**: clean, professional design using Tailwind CSS and Radix UI primitives.
- 💬 **Live Chat Widget**: Integrated support widget for real-time client assistance.
- 📧 **Automated Notifications**: Instant email alerts for new quotes and contact requests via Nodemailer.
- 🔒 **Secure Forms**: Robust form validation using Zod and React Hook Form.

## Tech Stack

This project is built using the following technologies:

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [Radix UI](https://www.radix-ui.com/), [Shadcn UI](https://ui.shadcn.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Forms**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Email**: [Nodemailer](https://nodemailer.com/)

## Project Structure

Here is a high-level overview of the project's file structure:

```bash
kentab/
├── app/                    # Next.js App Router main directory
│   ├── about/              # About Us page
│   ├── contact/            # Contact page
│   ├── quote/              # Get a Quote page
│   ├── services/           # Insurance product pages (Motor, Health, etc.)
│   ├── layout.tsx          # Root layout (Header, Footer, Providers)
│   └── page.tsx            # Homepage
├── components/             # Reusable UI components
│   ├── ui/                 # Shadcn UI primitives (Button, Input, etc.)
│   ├── header.tsx          # Main navigation header
│   ├── footer.tsx          # Site footer
│   └── ...
├── lib/                    # Utility functions
│   └── utils.ts            # Tailwind class merger
├── pages/api/              # API Routes
│   ├── contact.ts          # Contact form handler
│   └── contact-message.ts  # General message handler
├── public/                 # Static assets (images, icons)
├── styles/                 # Global styles
│   └── globals.css         # Tailwind directives
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Project dependencies
```

## Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18.17.0 or higher)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Caleb-Kiune/kentab.git
    cd kentab
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables**
    Create a `.env.local` file in the root directory and add the required variables (see below).

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open the app**
    Visit `http://localhost:3000` in your browser.

## Environment Variables

The application requires the following environment variables to function correctly, specifically for the email notification system.

Create a `.env.local` file in the root of your project:

```env
# Gmail Configuration for Nodemailer
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-specific-password

# Recipient Email for Contact Forms
CONTACT_TO_EMAIL=kentabinsurance@gmail.com
```

| Variable | Description | Example |
| :--- | :--- | :--- |
| `GMAIL_USER` | The Gmail address used to send automated emails. | `notifications@kentab.com` |
| `GMAIL_APP_PASSWORD` | App-specific password for the Gmail account (not your login password). | `abcd efgh ijkl mnop` |
| `CONTACT_TO_EMAIL` | The email address where form submissions should be sent. | `info@kentabinsurance.com` |

## Running the App

### Development
To start the development server with hot-reload:
```bash
npm run dev
```

### Production
To build the application for production:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

### Linting
To run the linter and fix code style issues:
```bash
npm run lint
```

## Main Pages & Components

### 🏠 Home (`/`)
The landing page featuring a hero section, key value propositions, featured insurance products, and testimonials.

### 🏢 About (`/about`)
Information about Kentab Insurance Agency, the team, and the company's mission and vision.

### ☂️ Services (`/services/*`)
Dedicated pages for each insurance category:
- **Motor Insurance**: Comprehensive, Third Party, etc.
- **Health Insurance**: Individual and Family covers.
- **Business Insurance**: SME and Corporate solutions.
- **Life Insurance**: Term life and endowment policies.

### 💬 Contact (`/contact`)
A dedicated contact page with a form, Google Maps integration, and physical address details.

## Forms & Integrations

### Quote Request Form
Located at `/quote`, this multi-step form allows users to specify their insurance needs. Data is validated using **Zod** and sent via **Nodemailer** to the agency's admin email.

### Contact Form
A general inquiry form that captures user details and messages. It connects to the `/api/contact-message` endpoint to trigger email notifications.

### Email Integration
The project uses **Nodemailer** with Gmail SMTP transport to reliably deliver form submissions to the `CONTACT_TO_EMAIL` address.

## Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the **Environment Variables** in the Vercel dashboard settings.
4.  Deploy!

**Build Command:** `next build`
**Output Directory:** `.next`

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

**Kentab Insurance Agency**

📍 **Address:** Blessed House Thika Road, Suite 22, Nairobi, Kenya
📞 **Phone:** [+254 721 315 506](tel:+254721315506)
📧 **Email:** [kentabinsurance@gmail.com](mailto:kentabinsurance@gmail.com)
🕒 **Hours:** Mon-Fri: 8:00AM - 5:00PM

---
<p align="center">Made with ❤️ by the Kentab Tech Team</p>
