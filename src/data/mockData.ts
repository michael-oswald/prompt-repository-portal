import type { Prompt, Category } from '../types';

export const categories: Category[] = [
  { id: 'code', name: 'Code', description: 'Coding, debugging, and code review prompts', icon: '💻' },
  { id: 'writing', name: 'Writing', description: 'Communication, documentation, and writing assistance', icon: '✍️' },
  { id: 'analysis', name: 'Analysis', description: 'Data analysis and summarization', icon: '📊' },
  { id: 'brainstorm', name: 'Brainstorm', description: 'Ideation and creative thinking', icon: '💭' },
  { id: 'productivity', name: 'Productivity', description: 'Task management and workflow optimization', icon: '⚡' },
];

export const prompts: Prompt[] = [
  {
    id: '1',
    title: 'Fast Breakdown',
    description: 'Get facts, open questions, and action items from a passage',
    content: `Please analyze the following text and provide:

**Facts:**
- List all key facts and information presented

**Open Questions:**
- Identify any unanswered questions or unclear points

**Action Items:**
- Extract any tasks, decisions, or next steps mentioned

---
[Paste your text here]`,
    category: 'analysis',
    tags: ['summarization', 'meeting-notes', 'slack'],
    author: {
      name: 'Platform Team',
      avatar: '🚀'
    },
    stars: 142,
    usageCount: 1250,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Code Review Assistant',
    description: 'Review code for bugs, best practices, and improvements',
    content: `Please review the following code and provide feedback on:

1. **Potential Bugs:** Any logical errors or edge cases
2. **Best Practices:** Code style, naming conventions, patterns
3. **Performance:** Optimization opportunities
4. **Security:** Potential vulnerabilities
5. **Suggestions:** Improvements and alternatives

\`\`\`
[Paste your code here]
\`\`\``,
    category: 'code',
    tags: ['code-review', 'debugging', 'best-practices'],
    author: {
      name: 'Engineering Team',
      avatar: '👨‍💻'
    },
    stars: 198,
    usageCount: 2340,
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    title: 'Email Writing Critic - Assertiveness, Directness, Conciseness',
    description: 'Helps you be more assertive, direct, and concise in your communications',
    content: `Please review this email and provide a rating on how well you did in these categories:

- **Assertiveness:** Did I clearly state what I need?
- **Directness:** Did I get to the point quickly?
- **Conciseness:** Did I use unnecessary words or could it be shorter?

Provide specific suggestions for improvement.

---
[Paste your email draft here]`,
    category: 'writing',
    tags: ['email', 'communication', 'feedback'],
    author: {
      name: 'Comms Team',
      avatar: '✉️'
    },
    stars: 167,
    usageCount: 1890,
    createdAt: '2024-01-20T09:15:00Z',
    updatedAt: '2024-01-20T09:15:00Z'
  },
  {
    id: '4',
    title: 'Create VSCode Extension Boilerplate',
    description: 'Generate boilerplate code for a VSCode extension',
    content: `I want to create a VSCode extension with the following functionality:

[Describe your extension idea]

Please provide:
1. The package.json configuration
2. Main extension file structure
3. Activation events and commands
4. Basic implementation code
5. Instructions for testing and debugging`,
    category: 'code',
    tags: ['vscode', 'boilerplate', 'tooling'],
    author: {
      name: 'DevTools Team',
      avatar: '🔧'
    },
    stars: 89,
    usageCount: 456,
    createdAt: '2024-02-01T11:20:00Z',
    updatedAt: '2024-02-01T11:20:00Z'
  },
  {
    id: '5',
    title: 'Meeting Recap',
    description: 'Summarize a meeting with key takeaways and next steps',
    content: `Based on the meeting notes below, please provide:

**Meeting Summary:**
- Brief overview of what was discussed

**Key Decisions:**
- Important decisions that were made

**Action Items:**
- Who is responsible for what, with deadlines if mentioned

**Follow-up Items:**
- Questions that need answers or topics for next meeting

---
[Paste meeting notes here]`,
    category: 'productivity',
    tags: ['meetings', 'summarization', 'action-items'],
    author: {
      name: 'Ops Team',
      avatar: '📋'
    },
    stars: 203,
    usageCount: 3120,
    createdAt: '2024-01-12T16:45:00Z',
    updatedAt: '2024-01-12T16:45:00Z'
  },
  {
    id: '6',
    title: 'Outline-ify',
    description: 'Turn a passage into a digestible outline',
    content: `Please convert the following text into a clear, hierarchical outline:

- Use bullet points and sub-bullets
- Maintain logical grouping
- Keep it concise but comprehensive
- Highlight the main themes and supporting details

---
[Paste your text here]`,
    category: 'analysis',
    tags: ['outline', 'summarization', 'structure'],
    author: {
      name: 'Content Team',
      avatar: '📝'
    },
    stars: 78,
    usageCount: 892,
    createdAt: '2024-01-25T13:30:00Z',
    updatedAt: '2024-01-25T13:30:00Z'
  },
  {
    id: '7',
    title: 'Grammar and Copy Checker',
    description: 'Check for grammar errors and improve copy quality',
    content: `Please review this text for:

1. **Grammar & Spelling:** Identify and correct errors
2. **Clarity:** Suggest improvements for unclear sentences
3. **Tone:** Ensure consistent and appropriate tone
4. **Style:** Flag repetitive phrases or awkward constructions
5. **Readability:** Suggest ways to make it more readable

---
[Paste your text here]`,
    category: 'writing',
    tags: ['grammar', 'editing', 'proofreading'],
    author: {
      name: 'Marketing Team',
      avatar: '✨'
    },
    stars: 134,
    usageCount: 1678,
    createdAt: '2024-02-05T10:00:00Z',
    updatedAt: '2024-02-05T10:00:00Z'
  },
  {
    id: '8',
    title: 'Extreme TLDR',
    description: 'Helps you create headlines and really succinct summarization from a paragraph',
    content: `Please provide:

1. **One-line headline:** Capture the essence in 10 words or less
2. **Tweet-length summary:** 280 characters max
3. **Three key points:** Most important takeaways

---
[Paste your text here]`,
    category: 'analysis',
    tags: ['summarization', 'headlines', 'tldr'],
    author: {
      name: 'Comms Team',
      avatar: '📰'
    },
    stars: 156,
    usageCount: 2100,
    createdAt: '2024-01-18T15:20:00Z',
    updatedAt: '2024-01-18T15:20:00Z'
  },
  {
    id: '9',
    title: 'Debug Helper',
    description: 'Help debug code by analyzing error messages and stack traces',
    content: `I'm encountering the following error:

**Error Message:**
[Paste error message]

**Stack Trace:**
\`\`\`
[Paste stack trace]
\`\`\`

**Relevant Code:**
\`\`\`
[Paste relevant code]
\`\`\`

Please help me:
1. Understand what's causing this error
2. Identify the root cause
3. Suggest potential fixes
4. Recommend best practices to avoid this in the future`,
    category: 'code',
    tags: ['debugging', 'troubleshooting', 'errors'],
    author: {
      name: 'Engineering Team',
      avatar: '🐛'
    },
    stars: 211,
    usageCount: 2890,
    createdAt: '2024-01-08T12:00:00Z',
    updatedAt: '2024-01-08T12:00:00Z'
  },
  {
    id: '10',
    title: 'Brainstorm Features',
    description: 'Generate creative feature ideas based on user needs',
    content: `I'm working on a product/feature for:

**Target Users:**
[Describe your users]

**Current Problem:**
[What problem are they facing?]

**Existing Solutions:**
[What currently exists?]

Please brainstorm:
1. **Feature Ideas:** 5-10 potential features or improvements
2. **Prioritization:** Which would have the most impact?
3. **Trade-offs:** What are the pros and cons of each?
4. **Quick Wins:** What could be built quickly for immediate value?`,
    category: 'brainstorm',
    tags: ['ideation', 'product', 'features'],
    author: {
      name: 'Product Team',
      avatar: '💡'
    },
    stars: 92,
    usageCount: 734,
    createdAt: '2024-02-10T09:30:00Z',
    updatedAt: '2024-02-10T09:30:00Z'
  },
  {
    id: '11',
    title: 'Generate Unit Tests',
    description: 'Create comprehensive unit tests for your code',
    content: `Please generate unit tests for the following code:

\`\`\`
[Paste your code here]
\`\`\`

Include tests for:
1. **Happy path:** Normal expected behavior
2. **Edge cases:** Boundary conditions
3. **Error cases:** Invalid inputs and error handling
4. **Mock data:** Sample test data needed

Use [Jest/Mocha/PyTest/etc.] testing framework.`,
    category: 'code',
    tags: ['testing', 'unit-tests', 'quality'],
    author: {
      name: 'QA Team',
      avatar: '🧪'
    },
    stars: 145,
    usageCount: 1567,
    createdAt: '2024-01-28T14:15:00Z',
    updatedAt: '2024-01-28T14:15:00Z'
  },
  {
    id: '12',
    title: 'SQL Query Helper',
    description: 'Generate and optimize SQL queries based on requirements',
    content: `I need help with a SQL query:

**Database Schema:**
[Describe your tables and relationships]

**What I need:**
[Describe what data you want to retrieve/update]

**Requirements:**
[Any specific conditions, joins, or performance needs]

Please provide:
1. The SQL query
2. Explanation of how it works
3. Performance considerations
4. Alternative approaches if applicable`,
    category: 'code',
    tags: ['sql', 'database', 'queries'],
    author: {
      name: 'Data Team',
      avatar: '🗄️'
    },
    stars: 118,
    usageCount: 1234,
    createdAt: '2024-02-03T11:45:00Z',
    updatedAt: '2024-02-03T11:45:00Z'
  }
];
