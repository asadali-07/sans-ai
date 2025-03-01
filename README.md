# 🚀 Sans-Ai  

Sans-Ai is a **Next.js-based AI-powered platform** designed to help users with career growth. It provides industry insights, a resume builder, cover letter writing assistance, and interview preparation tools. The platform is deployed on **Vercel** and leverages modern technologies to enhance user experience.

---

## 🌟 Features

- 🔐 **User Authentication**: Secure login and signup using **Clerk**.
- 📈 **Industry Insights**: Weekly updated insights powered by **Inngest**.
- 📄 **Resume Builder**: AI-powered resume generation.
- ✉️ **Cover Letter Writing**: Custom AI-generated cover letters.
- 🎤 **Interview Preparation**: Practice questions and AI-driven feedback.
- 🎨 **Modern UI**: Designed with **ShadCN UI** for a sleek interface.

---

## 🛠️ Tech Stack

- ⚛️ **Next.js** - React framework for full-stack development.
- 🔷 **JavaScript** - Type-safe development.
- 🤖 **AI-Powered Assistance**: Leverages **Google Gemini API** for intelligent content generation.
- 🔄 **Inngest** - Automates weekly industry insights updates.
- 🔑 **Clerk** - Authentication and user management.
- 🎨 **ShadCN UI** - Modern and accessible UI components.
- 🎭 **Tailwind CSS** - Utility-first CSS framework for styling.
- 🚀 **Vercel** - Deployment and hosting.
- 📦 **Various NPM Packages** - For additional functionality.

---

## 📦 Installation

Clone the repository:
```bash
git clone https://github.com/asadali-07/sans-ai.git
cd sans-ai
```

Install dependencies:
```bash
yarn install  # or npm install
```

---

## 🚀 Running the Project

To start the development server:
```bash
yarn dev  # or npm run dev
```

---

## 🏗️ Deployment

The project is deployed on **Vercel**. To deploy manually:
1. ⬆️ Push changes to GitHub.
2. 🔗 Connect the repo to Vercel.
3. ⚙️ Configure environment variables.
4. 🚀 Deploy with a single click from the Vercel dashboard.

---

## 🔑 Environment Variables
Create a `.env.local` file and add the following:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/onboarding
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/onboarding
NEXT_PUBLIC_CLERK_SIGN_OUT_FORCE_REDIRECT_URL=/
DATABASE_URL=
GEMINI_API_KEY=
```

---

## 🤝 Contributing
💡 Feel free to open **issues** and **pull requests** if you'd like to contribute!

---

## 📄 License
📝 MIT License © 2025 **Asad Ali**
