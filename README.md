# 📚 Prompt Repository

An open-source prompt repository inspired by [Instacart's Ava](https://tech.instacart.com/scaling-productivity-with-ava-instacarts-internal-ai-assistant-ed7f02558d84). A centralized platform for teams to discover, share, and collaborate on AI prompts.

![Prompt Repository](https://img.shields.io/badge/React-19.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC)

## 🎯 About This Template

**This is a template/demo site showcasing the concept of a prompt repository.** It's a fully functional static site that you can deploy immediately to demonstrate the idea to your team or organization.

**Current Status:**
- ✅ Fully functional UI with all features working
- ✅ Ready to deploy to GitHub Pages, Vercel, or Netlify
- ✅ Uses mock data stored in the codebase (no database yet)
- ⚠️ No backend or database integration (yet!)

**Next Steps for Production:**
This template provides the foundation, and you can enhance it by:
- Adding database integration (Supabase, PostgreSQL, Firebase, etc.)
- Implementing user authentication
- Creating an API layer for CRUD operations
- Adding real-time features and analytics
- See the "Future Enhancements" section below for more ideas

**Use this as:**
- A starting point for your own prompt repository
- A demo to showcase the concept to stakeholders
- A template to fork and customize for your team's needs

## ✨ Features

- 🔍 **Browse & Search** - Find prompts by category, tags, or keywords
- ⭐ **Star Prompts** - Mark your favorite prompts for quick access
- 📊 **Usage Analytics** - See which prompts are most popular and frequently used
- 🏷️ **Categorized** - Organized by Code, Writing, Analysis, Brainstorm, and Productivity
- 📝 **Easy Sharing** - One-click copy to clipboard
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 🚀 **Fast & Lightweight** - Built with Vite and React

## 🎯 Inspiration

This project is inspired by Instacart's internal AI assistant "Ava" and its Prompt Repository feature, which allows employees to share and reuse AI prompts across the organization. The goal is to provide an open-source alternative that any team can deploy and customize for their needs.

### Key Features from Ava:
- Prompt templates that users can browse and reuse
- Star/favorite system for popular prompts
- Categories for different use cases
- Search and discovery features

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/prompt-repository-portal.git
cd prompt-repository-portal

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Access your site** at: `https://yourusername.github.io/prompt-repository-portal/`

### Deploy to Other Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Then drag and drop the dist/ folder to Netlify
```

## 🗂️ Project Structure

```
prompt-repository-portal/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Layout.tsx
│   │   └── PromptCard.tsx
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── BrowsePage.tsx
│   │   ├── PromptDetailPage.tsx
│   │   └── CreatePromptPage.tsx
│   ├── data/            # Mock data and types
│   │   └── mockData.ts
│   ├── types/           # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── .github/workflows/   # GitHub Actions for deployment
└── package.json
```

## 🔧 Configuration

### For Production Use with Database

This demo uses mock data stored in `src/data/mockData.ts`. For production use:

1. **Set up a database** (PostgreSQL, Supabase, MongoDB, etc.)
2. **Create an API layer** to handle CRUD operations
3. **Update components** to fetch from your API instead of mock data
4. **Add authentication** to track authors and permissions
5. **Implement real-time features** like live star counts

### Customization

- **Colors**: Edit `tailwind.config.js` to change the theme
- **Categories**: Modify `src/data/mockData.ts` to add/edit categories
- **Base URL**: Update `vite.config.ts` if deploying to a different path

## 📚 Example Prompts Included

The demo includes 12 example prompts inspired by Instacart's Ava:

- **Fast Breakdown** - Summarize text into facts, questions, and action items
- **Code Review Assistant** - Review code for bugs and improvements
- **Email Writing Critic** - Improve assertiveness and clarity
- **Meeting Recap** - Summarize meetings with action items
- **Debug Helper** - Troubleshoot errors and stack traces
- And more...

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (or Vercel/Netlify)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Database integration (Supabase/PostgreSQL)
- [ ] User authentication
- [ ] Prompt versioning
- [ ] Comments and discussions
- [ ] API for programmatic access
- [ ] Slack integration
- [ ] Analytics dashboard
- [ ] Export/import prompts

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Inspired by [Instacart's Ava](https://tech.instacart.com/scaling-productivity-with-ava-instacarts-internal-ai-assistant-ed7f02558d84)
- Built with modern web technologies
- Created to help teams scale productivity with AI

## 📞 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

**⭐ Star this repo if you find it useful!**
