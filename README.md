# 🚀 Sans-Ai

**Sans-Ai** is a comprehensive AI-powered career development platform built with Next.js. It empowers users to accelerate their career growth through intelligent resume building, personalized cover letter generation, interview preparation, and industry insights.

---

## ✨ Features

### 🔐 **Authentication & User Management**
- Secure authentication powered by **Clerk**
- User profiles with industry preferences and experience tracking
- Personalized dashboard for career progress

### 📄 **AI Resume Builder**
- Intelligent resume generation using **Google Gemini API**
- Multiple resume templates and formats
- Real-time preview and editing capabilities
- PDF export functionality with `html2pdf.js`

### ✉️ **Smart Cover Letter Generator**
- AI-powered custom cover letters for specific job applications
- Template library with industry-specific formats
- Personalization based on user profile and job requirements

### 🎯 **Interview Preparation Suite**
- Mock interview sessions with AI-generated questions
- Performance analytics and improvement suggestions
- Industry-specific interview scenarios
- Progress tracking with interactive charts

### 📊 **Industry Insights & Analytics**
- Weekly automated industry insights via **Inngest**
- Career trends and market analysis
- Personalized recommendations based on user's industry
- Performance metrics and goal tracking

### 🎨 **Modern User Experience**
- Responsive design with **Tailwind CSS**
- Dark/light theme support with **next-themes**
- Accessible UI components from **ShadCN UI**
- Smooth animations and transitions

---

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Modern accessible components
- **Lucide React** - Beautiful icons
- **Recharts** - Data visualization

### **Backend & Database**
- **Prisma** - Type-safe database ORM
- **PostgreSQL** - Primary database
- **Inngest** - Background job processing
- **Clerk** - Authentication and user management

### **AI & Integrations**
- **Google Gemini API** - AI content generation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **React Markdown** - Markdown rendering

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast development bundler

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/asadali-07/sans-ai.git
cd sans-ai
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="your_postgresql_connection_string"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Google Gemini AI
GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```
sans-ai/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (main)/            # Protected main application
│   │   ├── dashboard/     # User dashboard
│   │   ├── resume/        # Resume builder
│   │   ├── ai-cover-letter/ # Cover letter generator
│   │   ├── interview/     # Interview preparation
│   │   └── onboarding/    # User onboarding
│   └── api/               # API routes
├── components/            # Reusable UI components
│   └── ui/               # ShadCN UI components
├── actions/              # Server actions
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── data/                 # Static data and constants
├── prisma/               # Database schema and migrations
└── public/               # Static assets
```

---

## 🎯 Key Features Breakdown

### **Dashboard**
- Overview of career progress
- Quick access to all tools
- Recent activity and insights
- Goal tracking and achievements

### **Resume Builder**
- AI-powered content generation
- Multiple professional templates
- Real-time editing and preview
- Export to PDF format
- Skills and experience management

### **Cover Letter Generator**
- Job-specific customization
- AI-powered content suggestions
- Template library
- Company and role targeting

### **Interview Preparation**
- Mock interview sessions
- Question bank by industry
- Performance analytics
- Improvement recommendations
- Progress tracking

### **Industry Insights**
- Weekly market trends
- Career advice and tips
- Industry-specific updates
- Personalized recommendations

---

## 🔧 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run postinstall  # Generate Prisma client
```

---

## 🌐 Deployment

The application is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/asadali-07/sans-ai)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Asad Ali**
- GitHub: [@asadali-07](https://github.com/asadali-07)
- Project: [Sans-Ai](https://github.com/asadali-07/sans-ai)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for seamless authentication
- [ShadCN UI](https://ui.shadcn.com/) for beautiful components
- [Google Gemini](https://gemini.google.com/) for AI capabilities
- [Vercel](https://vercel.com/) for hosting and deployment