# Contributing to Prompt Repository

Thank you for your interest in contributing to Prompt Repository! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/prompt-repository-portal.git
   cd prompt-repository-portal
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the dev server**:
   ```bash
   npm run dev
   ```

## 📝 Making Changes

1. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the code style of the project

3. **Test your changes**:
   ```bash
   npm run build
   npm run preview
   ```

4. **Commit your changes** with a descriptive commit message:
   ```bash
   git commit -m "Add feature: description of your changes"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## 💡 Areas for Contribution

Here are some ways you can contribute:

### Adding New Prompts
- Add new example prompts to `src/data/mockData.ts`
- Ensure prompts are well-structured and useful
- Include appropriate categories and tags

### Feature Enhancements
- Database integration
- User authentication
- Search improvements
- UI/UX enhancements
- Mobile responsiveness

### Bug Fixes
- Report bugs via GitHub Issues
- Fix existing issues
- Improve error handling

### Documentation
- Improve README
- Add JSDoc comments
- Create tutorials or guides

## 🎨 Code Style

- Use TypeScript for type safety
- Follow existing code formatting
- Use functional components with hooks
- Keep components focused and reusable
- Use Tailwind CSS for styling

## 🧪 Testing

Before submitting a PR:
- Ensure the build passes: `npm run build`
- Test all pages and features work correctly
- Check responsive design on mobile and desktop

## 📋 Pull Request Guidelines

- **Title**: Clear and descriptive (e.g., "Add database integration with Supabase")
- **Description**: Explain what changes you made and why
- **Screenshots**: Include screenshots for UI changes
- **Testing**: Describe how you tested the changes
- **Breaking Changes**: Clearly note any breaking changes

## 🤝 Code of Conduct

- Be respectful and constructive
- Welcome newcomers and help them get started
- Focus on what is best for the community
- Show empathy towards other community members

## 📞 Questions?

If you have questions, feel free to:
- Open an issue on GitHub
- Reach out to the maintainers

Thank you for contributing! 🎉
