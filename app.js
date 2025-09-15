// AILearnX Platform JavaScript - Ultimate Student Resources Edition - FIXED NAVIGATION
class AILearnX {
    constructor() {
        this.currentAIModel = 'gpt5';
        this.currentAuthMode = 'login';
        
        // Student Resources Data - NEW MAJOR SECTION
        this.studentResources = {
            premiumTools: [
                {
                    tool: "ChatGPT Plus",
                    company: "OpenAI",
                    offer: "2 months FREE",
                    value: "$40",
                    deadline: "May 31, 2025",
                    eligibility: "US/Canada college students",
                    accessLink: "https://chatgpt.com/students",
                    verification: "SheerID with .edu email",
                    features: ["GPT-4 Turbo", "Priority access", "File uploads", "Custom GPTs", "Voice mode"],
                    whyEssential: "Most advanced AI for research, coding, writing, and problem-solving"
                },
                {
                    tool: "Google AI Pro",
                    company: "Google",
                    offer: "12 months FREE", 
                    value: "$240",
                    deadline: "October 6, 2025",
                    eligibility: "Global college students 18+",
                    accessLink: "https://gemini.google/students",
                    verification: "SheerID verification",
                    features: ["Gemini 2.5 Pro", "Deep Research", "NotebookLM", "Veo 3 video", "2TB storage"],
                    whyEssential: "Advanced multimodal AI with research capabilities and massive storage"
                },
                {
                    tool: "GitHub Student Pack",
                    company: "GitHub/Microsoft",
                    offer: "100+ tools FREE",
                    value: "$200,000+",
                    deadline: "While enrolled",
                    eligibility: "Global students with .edu email",
                    accessLink: "https://education.github.com",
                    verification: "GitHub Education verification",
                    features: ["GitHub Copilot", "Codespaces", "Azure credits", "100+ premium tools"],
                    whyEssential: "Complete developer toolkit with AI coding assistance"
                },
                {
                    tool: "GitKraken Student",
                    company: "GitKraken",
                    offer: "6 months FREE",
                    value: "$30",
                    deadline: "Via GitHub Pack",
                    eligibility: "Students with GitHub Pack",
                    accessLink: "Via GitHub Student Pack",
                    verification: "Through GitHub verification",
                    features: ["Git GUI", "GitLens Pro", "25K AI tokens/week", "Visual workflows"],
                    whyEssential: "Professional Git management with AI assistance"
                }
            ],
            freeCourses: [
                {
                    platform: "Coursera",
                    course: "AI for Everyone",
                    instructor: "Andrew Ng",
                    link: "https://coursera.org/learn/ai-for-everyone",
                    duration: "4 weeks",
                    description: "Perfect introduction to AI concepts for any field",
                    access: "Audit free or apply for financial aid"
                },
                {
                    platform: "Coursera", 
                    course: "Introduction to AI",
                    instructor: "IBM",
                    link: "https://coursera.org/learn/introduction-to-ai",
                    duration: "4 weeks",
                    description: "Comprehensive AI fundamentals with hands-on labs",
                    access: "Free audit available"
                },
                {
                    platform: "Coursera",
                    course: "Google AI Essentials", 
                    instructor: "Google",
                    link: "https://coursera.org/learn/google-introduction-to-ai",
                    duration: "Self-paced",
                    description: "Practical AI applications for any field",
                    access: "Free with course audit"
                },
                {
                    platform: "Coursera",
                    course: "Machine Learning",
                    instructor: "Stanford/Andrew Ng",
                    link: "https://coursera.org/learn/machine-learning",
                    duration: "11 weeks", 
                    description: "Legendary foundational ML course",
                    access: "Free audit, certificates available with financial aid"
                }
            ],
            youtubeChannels: [
                {
                    channel: "3Blue1Brown",
                    focus: "Mathematical foundations of AI/ML",
                    subscriberCount: "5M+",
                    startPlaylist: "Neural Networks",
                    whyEssential: "Visual explanations of complex AI mathematics",
                    bestVideo: "But what is a neural network?",
                    link: "https://youtube.com/c/3blue1brown"
                },
                {
                    channel: "Sentdex", 
                    focus: "Python, Machine Learning, AI coding",
                    subscriberCount: "1M+",
                    startPlaylist: "Machine Learning with Python",
                    whyEssential: "Practical coding tutorials for AI implementation",
                    bestVideo: "Practical Machine Learning Tutorial",
                    link: "https://youtube.com/c/sentdex"
                },
                {
                    channel: "DeepLearning.AI",
                    focus: "Andrew Ng courses and AI research",
                    subscriberCount: "500K+",
                    startPlaylist: "Machine Learning Specialization",
                    whyEssential: "Professional-grade AI education from industry leader", 
                    bestVideo: "Machine Learning Course Introduction",
                    link: "https://youtube.com/c/deeplearningai"
                },
                {
                    channel: "Two Minute Papers",
                    focus: "Latest AI research summaries",
                    subscriberCount: "1.5M+",
                    startPlaylist: "ChatGPT, GPT4, OpenAI",
                    whyEssential: "Stay current with cutting-edge AI developments",
                    bestVideo: "ChatGPT: 30 Year History",
                    link: "https://youtube.com/c/twominutepapers"
                },
                {
                    channel: "StatQuest with Josh Starmer",
                    focus: "Statistics and ML explained simply",
                    subscriberCount: "800K+",
                    startPlaylist: "Machine Learning",
                    whyEssential: "Clear explanations of statistical foundations",
                    bestVideo: "Machine Learning Fundamentals",
                    link: "https://youtube.com/c/joshstarmer"
                }
            ],
            imageTools: [
                {
                    tool: "Raphael AI",
                    website: "raphaelai.org",
                    access: "100% free, unlimited, no signup",
                    features: ["Unlimited generations", "Multiple styles", "High resolution", "No watermarks"],
                    bestFor: "Quick prototyping and creative projects",
                    link: "https://raphaelai.org"
                },
                {
                    tool: "Vheer",
                    website: "vheer.com", 
                    access: "100% free, unlimited, no signup",
                    features: ["Text to image", "Style transfer", "Background removal", "OCR", "Batch processing"],
                    bestFor: "Comprehensive image editing and generation",
                    link: "https://vheer.com"
                },
                {
                    tool: "Freepik AI",
                    website: "freepik.com",
                    access: "40 free images per day",
                    features: ["High quality", "Style controls", "Commercial rights", "No watermarks"],
                    bestFor: "Professional-quality images",
                    link: "https://freepik.com"
                },
                {
                    tool: "Canva AI", 
                    website: "canva.com",
                    access: "50 lifetime credits free",
                    features: ["Design integration", "Multiple ratios", "No watermarks", "Easy branding"],
                    bestFor: "Design projects and presentations",
                    link: "https://canva.com"
                }
            ],
            actionChecklist: [
                {
                    priority: 1,
                    action: "Get ChatGPT Plus FREE (2 months)",
                    link: "https://chatgpt.com/students",
                    deadline: "May 31, 2025",
                    value: "$40"
                },
                {
                    priority: 2, 
                    action: "Get Google AI Pro FREE (12 months)",
                    link: "https://gemini.google/students", 
                    deadline: "October 6, 2025",
                    value: "$240"
                },
                {
                    priority: 3,
                    action: "Apply for GitHub Student Developer Pack",
                    link: "https://education.github.com",
                    deadline: "While enrolled",
                    value: "$200K+"
                },
                {
                    priority: 4,
                    action: "Bookmark free image generation tools",
                    link: "raphaelai.org, vheer.com",
                    deadline: "Immediate",
                    value: "Unlimited"
                },
                {
                    priority: 5,
                    action: "Enroll in IBM AI course on Coursera",
                    link: "https://coursera.org/learn/introduction-to-ai",
                    deadline: "This week",
                    value: "Free education"
                }
            ]
        };

        // Enhanced courses with student resources integration
        this.courses = [
            {
                id: 1,
                title: "AI Fundamentals + Free Tools Mastery",
                category: "Machine Learning", 
                difficulty: "Beginner",
                duration: "8 weeks",
                rating: 4.9,
                price: "Free",
                description: "Learn AI basics while mastering $200K+ worth of free student tools and resources",
                lessons: 32,
                students: 25420,
                tools_used: ["ChatGPT Plus", "Google AI Pro", "GitHub Copilot"],
                coursera_supplement: "AI for Everyone by Andrew Ng",
                youtube_playlist: "3Blue1Brown Neural Networks"
            },
            {
                id: 2,
                title: "Advanced AI Development with Student Resources",
                category: "Deep Learning",
                difficulty: "Advanced", 
                duration: "12 weeks",
                rating: 4.8,
                price: "$49",
                description: "Master advanced AI while leveraging premium student developer tools worth $200K+",
                lessons: 48,
                students: 18950,
                tools_used: ["GitHub Copilot", "GitKraken Pro", "Azure Credits"],
                coursera_supplement: "Machine Learning by Stanford",
                youtube_playlist: "Sentdex Machine Learning"
            },
            {
                id: 3,
                title: "AI-Powered Business Automation for Students",
                category: "Business AI",
                difficulty: "Intermediate",
                duration: "10 weeks", 
                rating: 4.7,
                price: "$39",
                description: "Build business workflows using free student AI tools and automation platforms",
                lessons: 32,
                students: 15300,
                tools_used: ["Perplexity Pro", "Notion AI", "Zapier"]
            },
            {
                id: 4,
                title: "Creative AI with Free Image Generation", 
                category: "Creative AI",
                difficulty: "Intermediate",
                duration: "8 weeks",
                rating: 4.8,
                price: "$35",
                description: "Master creative AI using free unlimited image generation tools",
                lessons: 24,
                students: 11800,
                tools_used: ["Raphael AI", "Vheer", "Canva AI"]
            },
            {
                id: 5,
                title: "Student Success: AI Career Acceleration",
                category: "Career Development", 
                difficulty: "Beginner",
                duration: "6 weeks",
                rating: 4.9,
                price: "Free",
                description: "Leverage $200K+ in free student resources to accelerate your AI career",
                lessons: 18,
                students: 28500,
                tools_used: ["All Free Student Tools", "Career Resources"]
            },
            {
                id: 6,
                title: "Advanced Prompt Engineering with Free AI",
                category: "Prompt Engineering",
                difficulty: "Advanced", 
                duration: "7 weeks",
                rating: 4.9,
                price: "$29",
                description: "Master prompting across free AI models and premium student accounts",
                lessons: 21,
                students: 22100,
                tools_used: ["ChatGPT Plus", "Google AI Pro", "Claude"]
            },
            {
                id: 7,
                title: "Student Startup: AI Product Development",
                category: "Product AI",
                difficulty: "Advanced",
                duration: "10 weeks",
                rating: 4.8,
                price: "$45", 
                description: "Build AI products using free student developer tools and resources",
                lessons: 35,
                students: 12600,
                tools_used: ["GitHub Student Pack", "Free Cloud Credits", "AI APIs"]
            },
            {
                id: 8,
                title: "Academic Research with AI Tools",
                category: "Research AI",
                difficulty: "Intermediate",
                duration: "8 weeks",
                rating: 4.7,
                price: "$35",
                description: "Accelerate academic research using free AI tools and premium student accounts",
                lessons: 28,
                students: 9200,
                tools_used: ["Google AI Pro", "Research Tools", "Academic APIs"]
            }
        ];

        // Top 20 AI Tools data (same as before)
        this.aiTools = [
            {
                rank: 1,
                name: "ChatGPT (OpenAI)",
                category: "AI Assistant",
                key_strength: "Web-aware, cited answers in chat",
                use_case: "Draft strategy and pull live market stats with sources in one session",
                score: 9.6,
                official_link: "https://openai.com"
            },
            {
                rank: 2,
                name: "Claude Opus 4.1",
                category: "AI Assistant", 
                key_strength: "Deep reasoning and code clarity",
                use_case: "Explain and rewrite a complex algorithm with tests instantly",
                score: 9.4,
                official_link: "https://anthropic.com"
            },
            {
                rank: 3,
                name: "Perplexity Pro",
                category: "Research/Search",
                key_strength: "Real-time answers with citations and model choice", 
                use_case: "Produce a literature brief with linked references in minutes",
                score: 9.2,
                official_link: "https://perplexity.ai"
            },
            {
                rank: 4,
                name: "Cursor IDE",
                category: "Coding",
                key_strength: "Agentic code edits across repos",
                use_case: "Implement features via natural-language prompts inside the editor",
                score: 9.1,
                official_link: "https://cursor.com"
            },
            {
                rank: 5,
                name: "n8n (AI Workflows)",
                category: "Automation",
                key_strength: "Visual AI + app orchestration",
                use_case: "Chain model outputs to Slack, Sheets, and CRM automatically", 
                score: 8.9,
                official_link: "https://n8n.io"
            },
            {
                rank: 6,
                name: "Zapier",
                category: "Automation",
                key_strength: "Mature integration ecosystem + AI agents",
                use_case: "Auto-summarize inbound emails and open tasks in project tools",
                score: 8.7,
                official_link: "https://zapier.com"
            },
            {
                rank: 7,
                name: "Notion AI",
                category: "Knowledge/Docs",
                key_strength: "Workspace-native writing and structuring",
                use_case: "Turn meeting notes into a project plan with action items",
                score: 8.5,
                official_link: "https://notion.so"
            },
            {
                rank: 8,
                name: "Synthesia",
                category: "Video/Avatar",
                key_strength: "Studio-quality AI presenters in 140+ languages",
                use_case: "Convert SOPs into training videos for global teams",
                score: 8.4,
                official_link: "https://synthesia.io"
            },
            {
                rank: 9,
                name: "Midjourney",
                category: "Image Gen",
                key_strength: "High-fidelity creative visuals",
                use_case: "Generate ad concepts and iterate styles rapidly",
                score: 8.3,
                official_link: "https://midjourney.com"
            },
            {
                rank: 10,
                name: "Canva Magic Studio",
                category: "Design",
                key_strength: "End-to-end AI design flows",
                use_case: "Spin up a brand kit and batch social assets in minutes",
                score: 8.2,
                official_link: "https://canva.com"
            },
            {
                rank: 11,
                name: "ElevenLabs",
                category: "Voice",
                key_strength: "Realistic multilingual TTS/cloning",
                use_case: "Create multilingual voiceovers for product demos",
                score: 8.1,
                official_link: "https://elevenlabs.io"
            },
            {
                rank: 12,
                name: "Google Veo",
                category: "Video Gen",
                key_strength: "High-quality text-to-video",
                use_case: "Storyboard a 30-sec promo from a product brief",
                score: 8.0,
                official_link: "https://deepmind.google"
            },
            {
                rank: 13,
                name: "Reclaim.ai",
                category: "Calendar/Focus",
                key_strength: "Auto-prioritized scheduling",
                use_case: "Block focus time and reshuffle tasks dynamically",
                score: 7.9,
                official_link: "https://reclaim.ai"
            },
            {
                rank: 14,
                name: "Shortwave",
                category: "Email",
                key_strength: "AI triage and drafting",
                use_case: "Summarize threads and propose replies with context",
                score: 7.8,
                official_link: "https://shortwave.com"
            },
            {
                rank: 15,
                name: "Gamma",
                category: "Presentations",
                key_strength: "Instant decks from prompts",
                use_case: "Turn a proposal outline into a polished deck fast",
                score: 7.7,
                official_link: "https://gamma.app"
            },
            {
                rank: 16,
                name: "Otter.ai",
                category: "Meetings",
                key_strength: "Live transcription + summaries",
                use_case: "Auto-capture action items from calls and share notes",
                score: 7.6,
                official_link: "https://otter.ai"
            },
            {
                rank: 17,
                name: "Gumloop",
                category: "AI Automation",
                key_strength: "AI-first workflows with built-in models",
                use_case: "Launch a data-enrichment agent without owning API keys",
                score: 7.5,
                official_link: "https://gumloop.com"
            },
            {
                rank: 18,
                name: "Lindy",
                category: "AI Agents",
                key_strength: "Agentic workflow builder momentum",
                use_case: "Build a sales follow-up agent that emails and logs CRM updates",
                score: 7.4,
                official_link: "https://lindy.ai"
            },
            {
                rank: 19,
                name: "Lovable",
                category: "App Builder",
                key_strength: "AI-assisted app creation",
                use_case: "Prototype and ship an MVP with AI-generated scaffolding",
                score: 7.3,
                official_link: "https://lovable.ai"
            },
            {
                rank: 20,
                name: "Gemini (Google)",
                category: "Multimodal AI",
                key_strength: "Text-image understanding at scale",
                use_case: "Analyze screenshots and propose UI copy in context",
                score: 7.2,
                official_link: "https://gemini.google.com"
            }
        ];

        // Workflow templates
        this.workflowTemplates = [
            {
                id: 1,
                name: "Student Onboarding Automation",
                description: "Complete automated onboarding flow for new students with free tools setup",
                trigger: "New user registration",
                time_saved: "45 minutes per student",
                nodes: 7,
                ai_models: ["ChatGPT Plus", "Google AI Pro"],
                steps: [
                    "Trigger: New student registers",
                    "AI Assessment: Analyze background and goals",
                    "Resource Router: Determines best free tools",
                    "Setup Guide: Creates personalized tool setup guide", 
                    "Notification: Sends welcome email with resources",
                    "Calendar: Schedules learning milestones",
                    "Dashboard: Sets up progress tracking with savings counter"
                ]
            },
            {
                id: 2,
                name: "Free Tool Integration Pipeline",
                description: "Connects all free student tools into unified workflow",
                trigger: "Student completes tool setup",
                time_saved: "3 hours of manual integration",
                nodes: 8,
                ai_models: ["GitHub Copilot", "ChatGPT Plus"],
                steps: [
                    "Trigger: Tools activated",
                    "Analysis: Map student workflow needs",
                    "Integration: Connect APIs and accounts",
                    "Automation: Set up cross-platform workflows",
                    "Testing: Validate tool connections",
                    "Documentation: Generate usage guides",
                    "Monitoring: Track tool usage and savings",
                    "Optimization: Suggest workflow improvements"
                ]
            },
            {
                id: 3, 
                name: "Student Success Tracking",
                description: "Automated tracking of student progress and resource utilization",
                trigger: "Daily progress check",
                time_saved: "30 minutes per day",
                nodes: 6,
                ai_models: ["Google AI Pro", "Analytics"],
                steps: [
                    "Trigger: Daily automated check",
                    "Data Collection: Gather usage metrics", 
                    "Analysis: Calculate savings and progress",
                    "Insights: Generate personalized recommendations",
                    "Reporting: Update progress dashboard",
                    "Alerts: Notify of new opportunities"
                ]
            }
        ];

        // Updated pricing plans with student focus
        this.pricingPlans = [
            {
                name: "Student Starter",
                price: "Free",
                period: "forever",
                description: "Perfect for students maximizing free resources and getting started",
                features: [
                    "Complete Student Resources Hub",
                    "Free AI tools setup guides ($200K+ value)",
                    "Basic AI tutoring access",
                    "Essential workflow templates",
                    "Student community access",
                    "Free course recommendations",
                    "Savings tracker",
                    "Mobile app access"
                ],
                recommended: false,
                tools_included: "All free student tools",
                workflows: "Basic student templates"
            },
            {
                name: "Student Pro", 
                price: "$19",
                period: "month",
                description: "For serious students building AI careers with premium learning features",
                features: [
                    "Everything in Student Starter",
                    "Advanced AI tutoring (GPT-5 + Claude Opus 4.1)",
                    "Premium workflow automation studio", 
                    "Personalized learning paths",
                    "Priority support",
                    "Industry-recognized certificates", 
                    "1-on-1 mentor sessions",
                    "Advanced analytics",
                    "Exclusive student job board",
                    "Career acceleration program"
                ],
                recommended: true,
                tools_included: "Full platform + free student tools",
                workflows: "All premium + student templates"
            },
            {
                name: "Student Team",
                price: "$99", 
                period: "month",
                description: "For student organizations, clubs, and group projects",
                features: [
                    "Everything in Student Pro",
                    "Team collaboration tools",
                    "Bulk student tool setup",
                    "Group project management",
                    "Shared workflow library",
                    "Team analytics dashboard",
                    "Dedicated team support",
                    "Custom branding options",
                    "Educational institution integration",
                    "Volume discount coordination"
                ],
                recommended: false,
                tools_included: "Enterprise student suite",
                workflows: "Team collaboration workflows"
            }
        ];

        // Enhanced testimonials with student success stories
        this.testimonials = [
            {
                name: "Sarah Chen",
                role: "CS Student → ML Engineer at Google",
                avatar: "👩‍💻",
                rating: 5,
                text: "AILearnX's Student Resources Hub was life-changing! I saved over $200K on premium tools, learned from the best free courses, and the platform's guidance helped me land at Google. The ChatGPT Plus and GitHub Student Pack alone transformed my coding abilities."
            },
            {
                name: "Marcus Rodriguez", 
                role: "Business Student → AI Consultant",
                avatar: "👨‍🔬", 
                rating: 5,
                text: "Started with zero AI knowledge and $0 budget. The free resources guide showed me how to get Google AI Pro, GitHub tools, and unlimited image generation. Now I run my own AI consultancy using skills learned entirely from free student resources!"
            },
            {
                name: "Emily Watson",
                role: "Art Student → Creative AI Specialist",
                avatar: "👩‍🎨",
                rating: 5, 
                text: "The free image generation tools (Raphael AI, Vheer) plus the creative AI courses completely changed my career path. I went from traditional art to leading AI creative projects at a major agency. Saved thousands while learning cutting-edge skills."
            },
            {
                name: "David Park",
                role: "Engineering Student → Startup Founder",
                avatar: "👨‍💼",
                rating: 5,
                text: "Built my entire startup using free student tools from the resources hub. GitHub Student Pack, free cloud credits, and premium AI models allowed me to prototype and launch without any upfront costs. Now we're venture-backed!"
            },
            {
                name: "Jessica Liu",
                role: "MBA Student → AI Strategy Lead",
                avatar: "👩‍💼",
                rating: 5,
                text: "The combination of free Coursera courses, YouTube playlists, and premium student AI tools gave me expertise that landed a $150K AI strategy role straight out of MBA. The ROI was infinite since everything was free!"
            },
            {
                name: "Alex Thompson",
                role: "Physics Student → Research AI Developer",
                avatar: "🔬",
                rating: 5,
                text: "Used the academic research workflows and free Google AI Pro to accelerate my physics research. Published 3 papers using AI tools I accessed for free through student programs. The platform made AI accessible for scientific research."
            }
        ];

        // AI model responses enhanced with student resource information
        this.aiModels = {
            gpt5: {
                name: "GPT-5",
                responses: [
                    "As a student, you're in the best position ever to access AI tools! Start with ChatGPT Plus (2 months FREE through student verification), then get Google AI Pro (12 months FREE). These alone save you $280 and give you access to the most powerful AI models. The GitHub Student Pack adds $200K+ worth of development tools. Don't pay for tools when you can get them free!",
                    "Student workflow magic: 1) Get ChatGPT Plus for research and writing, 2) Use Google AI Pro for multimodal projects, 3) GitHub Student Pack for all coding needs, 4) Free image tools like Raphael AI for unlimited visuals. Connect these through n8n workflows to create automated research and project pipelines. Your student status is your superpower!",
                    "The secret is stacking free student resources: Coursera courses (audit free), YouTube tutorials (completely free), premium AI tools (free with student verification), and unlimited image generation. Most students miss these opportunities and pay thousands unnecessarily. Smart students leverage every free resource to build expertise without debt."
                ]
            },
            claude: {
                name: "Claude Opus 4.1",
                responses: [
                    "From an architecture standpoint, student resource optimization follows this pattern: Identity verification → Resource discovery → Tool integration → Skill development → Career acceleration. The key is systematic utilization of free tier offerings that would normally cost $200K+. Students who master this approach graduate with enterprise-level tool experience.",
                    "Consider the compound effect: Free AI tools → Better projects → Stronger portfolio → Higher starting salaries → Faster ROI. Students using ChatGPT Plus, GitHub Copilot, and Google AI Pro report 40% better project outcomes. The verification friction (SheerID, .edu emails) creates a massive arbitrage opportunity for savvy students.",
                    "Technical implementation: Use GitHub Student Pack as your development foundation, ChatGPT Plus for code generation and debugging, Google AI Pro for research and multimodal tasks, and free image tools for all visual needs. This stack rivals $10K+/month enterprise setups but costs $0 as a student."
                ]
            },
            gemini: {
                name: "Gemini Pro",
                responses: [
                    "🎓 Student success formula: FREE premium AI tools + world-class education + unlimited practice = career transformation! With Google AI Pro (12 months FREE), ChatGPT Plus (2 months FREE), and GitHub Student Pack ($200K+ value), you have better tools than most companies! 🚀✨",
                    "Here's your student advantage: 📚 Learn from Andrew Ng on Coursera (FREE) → 🎥 Watch 3Blue1Brown for math foundations (FREE) → 🛠️ Practice with premium AI tools (FREE as student) → 💼 Build portfolio projects (FREE with student tools) → 🎯 Land amazing job! The path is clear and costs $0! 💰",
                    "Student life hack: Use image AI (Raphael, Vheer - unlimited FREE) for all projects, presentations, and creative work. Most students pay for design tools when free alternatives are better! Combine with free AI writing tools and you're unstoppable! 🎨✍️🎯"
                ]
            }
        };

        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeApp();
            });
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        console.log('🚀 Initializing AILearnX application...');
        
        // Setup all functionality
        this.setupEventListeners();
        this.populateStudentResources();
        this.populateCourses();
        this.populateAITools();
        this.populateWorkflowTemplates();
        this.populatePricing();
        this.populateTestimonials();
        this.setupIntersectionObserver();
        
        console.log('✅ AILearnX application initialized successfully!');
    }

    setupEventListeners() {
        console.log('📝 Setting up event listeners...');
        
        // Navigation toggle
        const navToggle = document.getElementById('navToggle');
        if (navToggle) {
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleMobileMenu();
            });
        }
        
        // FIXED: Brand navigation - Multiple elements for reliability
        this.setupBrandNavigation();
        
        // FIXED: Navigation menu links - Proper event delegation
        this.setupNavigationLinks();
        
        // Auth buttons
        this.setupAuthButtons();
        
        // Hero buttons
        this.setupHeroButtons();
        
        // Chat functionality
        this.setupChatFunctionality();
        
        // Workflow controls
        this.setupWorkflowControls();
        
        // Tools search
        const toolsSearch = document.getElementById('toolsSearch');
        if (toolsSearch) {
            toolsSearch.addEventListener('input', this.handleToolsSearch.bind(this));
        }
        
        // Global search
        const searchInput = document.querySelector('.nav__search-input');
        if (searchInput) {
            searchInput.addEventListener('input', this.handleGlobalSearch.bind(this));
        }
        
        // Modal functionality
        this.setupModalEvents();

        // Setup filter buttons - Delayed to ensure DOM is ready
        setTimeout(() => {
            this.setupCourseFilterButtons();
            this.setupToolsFilterButtons();
            this.setupAIModelButtons();
        }, 100);
        
        console.log('✅ Event listeners setup complete');
    }

    // FIXED: Brand navigation setup
    setupBrandNavigation() {
        // Multiple selectors for the brand area
        const brandElements = [
            document.querySelector('.nav__brand'),
            document.querySelector('.nav__title'), 
            document.querySelector('.nav__logo')
        ];
        
        brandElements.forEach(element => {
            if (element) {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('🏠 Navigating to home via brand click');
                    this.navigateToHome();
                });
                element.style.cursor = 'pointer'; // Visual feedback
            }
        });
    }

    // FIXED: Navigation links setup with proper event handling
    setupNavigationLinks() {
        const navLinks = document.querySelectorAll('.nav__link');
        console.log(`🔗 Setting up ${navLinks.length} navigation links`);
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                
                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1);
                    console.log(`📍 Navigation click: ${targetId}`);
                    
                    // Special handling for home
                    if (targetId === 'home') {
                        this.navigateToHome();
                    } else {
                        this.scrollToSection(targetId);
                        this.updateActiveNavLink(href);
                    }
                }
            });
        });
    }

    // FIXED: Dedicated home navigation method
    navigateToHome() {
        console.log('🏠 Navigating to home section');
        
        // Scroll to top of page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Update active nav link
        this.updateActiveNavLink('#home');
        
        // Show success message
        this.showSuccess('Welcome back to AILearnX - Your Ultimate AI Learning & Student Resource Hub!');
    }

    setupAuthButtons() {
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openAuthModal('login');
            });
        }
        
        if (signupBtn) {
            signupBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openAuthModal('signup');
            });
        }
    }

    setupHeroButtons() {
        const startLearningBtn = document.getElementById('startLearningBtn');
        const exploreStudentResourcesBtn = document.getElementById('exploreStudentResourcesBtn');
        
        if (startLearningBtn) {
            startLearningBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openAuthModal('signup');
            });
        }
        
        if (exploreStudentResourcesBtn) {
            exploreStudentResourcesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('🎓 Exploring Student Resources');
                this.scrollToSection('student-resources');
                this.updateActiveNavLink('#student-resources');
            });
        }
    }

    setupChatFunctionality() {
        const sendMessageBtn = document.getElementById('sendMessage');
        const chatInput = document.getElementById('chatInput');
        
        if (sendMessageBtn) {
            sendMessageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.sendMessage();
            });
        }
        
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    }

    setupWorkflowControls() {
        const runWorkflowBtn = document.getElementById('runWorkflowBtn');
        const editWorkflowBtn = document.getElementById('editWorkflowBtn');
        const saveTemplateBtn = document.getElementById('saveTemplateBtn');
        
        if (runWorkflowBtn) {
            runWorkflowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.runWorkflowDemo();
            });
        }
        
        if (editWorkflowBtn) {
            editWorkflowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSuccess('Opening visual workflow editor...');
            });
        }
        
        if (saveTemplateBtn) {
            saveTemplateBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSuccess('Workflow template saved successfully!');
            });
        }
    }

    // NEW METHOD: Populate Student Resources Hub
    populateStudentResources() {
        console.log('🎓 Populating Student Resources Hub...');
        this.populateActionChecklist();
        this.populatePremiumTools();
        this.populateFreeCourses();
        this.populateYouTubeChannels();
        this.populateImageTools();
        console.log('✅ Student Resources Hub populated');
    }

    populateActionChecklist() {
        const actionChecklist = document.getElementById('actionChecklist');
        if (!actionChecklist) return;

        actionChecklist.innerHTML = this.studentResources.actionChecklist.map(action => `
            <div class="action__card" data-priority="${action.priority}">
                <div class="action__priority">Priority ${action.priority}</div>
                <div class="action__header">
                    <h4 class="action__title">${action.action}</h4>
                    <div class="action__value">${action.value}</div>
                </div>
                <div class="action__deadline">⏰ Deadline: ${action.deadline}</div>
                <a href="${action.link}" target="_blank" class="action__link">
                    ${action.priority <= 2 ? '🚨 URGENT - Claim Now' : 'Get Started'}
                </a>
            </div>
        `).join('');
    }

    populatePremiumTools() {
        const premiumToolsGrid = document.getElementById('premiumToolsGrid');
        if (!premiumToolsGrid) return;

        premiumToolsGrid.innerHTML = this.studentResources.premiumTools.map(tool => `
            <div class="premium-tool__card">
                <div class="tool__badge">${tool.offer}</div>
                <div class="tool__header">
                    <h4 class="tool__name">${tool.tool}</h4>
                    <div class="tool__company">${tool.company}</div>
                </div>
                <div class="tool__offer">${tool.offer}</div>
                <div class="tool__value">${tool.value}</div>
                <div class="tool__deadline">⏰ ${tool.deadline}</div>
                <ul class="tool__features">
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="tool__why">
                    <strong>Why Essential:</strong> ${tool.whyEssential}
                </div>
                <div class="tool__actions">
                    <a href="${tool.accessLink}" target="_blank" class="btn btn--primary">Claim Now</a>
                    <button class="btn btn--outline" onclick="app.showSuccess('${tool.tool} added to your action checklist!')">Add to List</button>
                </div>
            </div>
        `).join('');
    }

    populateFreeCourses() {
        const freeCoursesGrid = document.getElementById('freeCoursesGrid');
        if (!freeCoursesGrid) return;

        freeCoursesGrid.innerHTML = this.studentResources.freeCourses.map(course => `
            <div class="course__card">
                <div class="course__header">
                    <h4 class="course__name">${course.course}</h4>
                    <div class="course__duration">${course.duration}</div>
                </div>
                <div class="course__instructor">👨‍🏫 ${course.instructor}</div>
                <div class="course__description">${course.description}</div>
                <div class="course__access">✅ ${course.access}</div>
                <a href="${course.link}" target="_blank" class="btn btn--primary btn--sm">Enroll Free</a>
            </div>
        `).join('');
    }

    populateYouTubeChannels() {
        const youtubeChannelsGrid = document.getElementById('youtubeChannelsGrid');
        if (!youtubeChannelsGrid) return;

        youtubeChannelsGrid.innerHTML = this.studentResources.youtubeChannels.map(channel => `
            <div class="youtube__card">
                <div class="youtube__header">
                    <h4 class="youtube__name">${channel.channel}</h4>
                    <div class="youtube__subscribers">${channel.subscriberCount}</div>
                </div>
                <div class="youtube__focus">${channel.focus}</div>
                <div class="youtube__description">${channel.whyEssential}</div>
                <div class="youtube__best-video">🎯 Start with: ${channel.bestVideo}</div>
                <a href="${channel.link}" target="_blank" class="btn btn--primary btn--sm">Watch Now</a>
            </div>
        `).join('');
    }

    populateImageTools() {
        const imageToolsGrid = document.getElementById('imageToolsGrid');
        if (!imageToolsGrid) return;

        imageToolsGrid.innerHTML = this.studentResources.imageTools.map(tool => `
            <div class="image-tool__card">
                <h4 class="image-tool__name">${tool.tool}</h4>
                <div class="image-tool__access">✅ ${tool.access}</div>
                <ul class="image-tool__features">
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="image-tool__best-for">💡 ${tool.bestFor}</div>
                <a href="${tool.link}" target="_blank" class="btn btn--primary btn--sm">Use Free</a>
            </div>
        `).join('');
    }

    // FIXED: Navigation helper methods
    scrollToSection(sectionId) {
        console.log(`📍 Scrolling to section: ${sectionId}`);
        
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            this.showSuccess(`Navigated to ${this.getSectionName(sectionId)}`);
        } else {
            console.warn(`⚠️ Section not found: ${sectionId}`);
            this.showSuccess(`Section "${sectionId}" not found. Please try again.`);
        }
    }

    updateActiveNavLink(href) {
        console.log(`🎯 Updating active nav link: ${href}`);
        
        // Remove active from all nav links
        document.querySelectorAll('.nav__link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active to target link
        const targetLink = document.querySelector(`a.nav__link[href="${href}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
            console.log(`✅ Active nav link updated: ${href}`);
        }
    }

    getSectionName(sectionId) {
        const sectionNames = {
            'home': 'Homepage',
            'courses': 'Courses',
            'ai-tools': 'AI Tools Hub', 
            'workflow-studio': 'Workflow Automation Studio',
            'student-resources': 'Student Resources Hub - Save $200K+',
            'ai-tutors': 'AI Tutors',
            'progress': 'Progress Dashboard',
            'community': 'Community & Success Stories'
        };
        return sectionNames[sectionId] || sectionId;
    }

    setupCourseFilterButtons() {
        const filterBtns = document.querySelectorAll('.course__filters .filter__btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.category;
                this.filterCourses(category, e.target);
            });
        });
    }

    setupToolsFilterButtons() {
        const filterBtns = document.querySelectorAll('.tools-filters .filter__btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = e.target.dataset.category;
                this.filterTools(category, e.target);
            });
        });
    }

    setupAIModelButtons() {
        const aiModelBtns = document.querySelectorAll('.ai-model__btn');
        aiModelBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const modelBtn = e.target.closest('.ai-model__btn');
                if (modelBtn && modelBtn.dataset.model) {
                    this.switchAIModel(modelBtn.dataset.model);
                }
            });
        });
    }

    setupModalEvents() {
        // Course modal
        const courseModal = document.getElementById('courseModal');
        const courseModalBackdrop = document.getElementById('modalBackdrop');
        const courseModalClose = document.getElementById('modalClose');
        
        if (courseModalBackdrop) {
            courseModalBackdrop.addEventListener('click', () => this.closeModal('courseModal'));
        }
        if (courseModalClose) {
            courseModalClose.addEventListener('click', () => this.closeModal('courseModal'));
        }
        
        // Tool modal
        const toolModal = document.getElementById('toolModal');
        const toolModalBackdrop = document.getElementById('toolModalBackdrop');
        const toolModalClose = document.getElementById('toolModalClose');
        
        if (toolModalBackdrop) {
            toolModalBackdrop.addEventListener('click', () => this.closeModal('toolModal'));
        }
        if (toolModalClose) {
            toolModalClose.addEventListener('click', () => this.closeModal('toolModal'));
        }
        
        // Workflow modal
        const workflowModal = document.getElementById('workflowModal');
        const workflowModalBackdrop = document.getElementById('workflowModalBackdrop');
        const workflowModalClose = document.getElementById('workflowModalClose');
        
        if (workflowModalBackdrop) {
            workflowModalBackdrop.addEventListener('click', () => this.closeModal('workflowModal'));
        }
        if (workflowModalClose) {
            workflowModalClose.addEventListener('click', () => this.closeModal('workflowModal'));
        }
        
        // Auth modal
        const authModal = document.getElementById('authModal');
        const authModalBackdrop = document.getElementById('authModalBackdrop');
        const authModalClose = document.getElementById('authModalClose');
        const authForm = document.getElementById('authForm');
        
        if (authModalBackdrop) {
            authModalBackdrop.addEventListener('click', () => this.closeModal('authModal'));
        }
        if (authModalClose) {
            authModalClose.addEventListener('click', () => this.closeModal('authModal'));
        }
        if (authForm) {
            authForm.addEventListener('submit', this.handleAuthSubmit.bind(this));
        }
        
        // Close modals on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal('courseModal');
                this.closeModal('toolModal');
                this.closeModal('workflowModal');
                this.closeModal('authModal');
            }
        });
    }

    populateCourses() {
        const coursesGrid = document.getElementById('coursesGrid');
        if (!coursesGrid) return;
        
        coursesGrid.innerHTML = this.courses.map(course => `
            <div class="course__card" data-category="${course.category}" data-course-id="${course.id}">
                <div class="course__header">
                    <div>
                        <h3 class="course__title">${course.title}</h3>
                        <div class="course__meta">
                            <span class="course__difficulty">${course.difficulty}</span>
                            <span class="course__duration">${course.duration}</span>
                            <div class="course__rating">
                                <span class="course__stars">${'★'.repeat(Math.floor(course.rating))}${'☆'.repeat(5-Math.floor(course.rating))}</span>
                                <span>${course.rating}</span>
                            </div>
                        </div>
                    </div>
                    <div class="course__price ${course.price === 'Free' ? 'course__price--free' : ''}">${course.price}</div>
                </div>
                <p class="course__description">${course.description}</p>
                <div class="course__stats">
                    <span>${course.lessons} lessons</span>
                    <span>${course.students.toLocaleString()} students</span>
                </div>
                <div class="tools-used">
                    <h5>🔧 Tools Used:</h5>
                    <div class="tool-tags">
                        ${course.tools_used.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                    </div>
                </div>
                ${course.coursera_supplement ? `
                    <div class="course-supplement">
                        <p><strong>📚 Free Supplement:</strong> ${course.coursera_supplement}</p>
                    </div>
                ` : ''}
            </div>
        `).join('');

        // Add click listeners to course cards
        document.querySelectorAll('.course__card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const courseId = parseInt(card.dataset.courseId);
                this.openCourseModal(courseId);
            });
        });

        // Add button for viewing all courses
        const viewAllCoursesBtn = document.getElementById('viewAllCoursesBtn');
        if (viewAllCoursesBtn) {
            viewAllCoursesBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAllCourses();
            });
        }
    }

    populateAITools() {
        // Populate top 5 tools
        const topToolsGrid = document.getElementById('topToolsGrid');
        if (topToolsGrid) {
            const top5Tools = this.aiTools.slice(0, 5);
            topToolsGrid.innerHTML = top5Tools.map(tool => `
                <div class="top-tool__card" data-tool-rank="${tool.rank}">
                    <div class="top-tool__rank">${tool.rank}</div>
                    <div class="top-tool__header">
                        <h3 class="top-tool__name">${tool.name}</h3>
                        <div class="top-tool__score">${tool.score}</div>
                    </div>
                    <div class="top-tool__category">${tool.category}</div>
                    <div class="top-tool__strength">${tool.key_strength}</div>
                    <div class="top-tool__use-case">${tool.use_case}</div>
                </div>
            `).join('');

            // Add click listeners to top tool cards
            document.querySelectorAll('.top-tool__card').forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    const rank = parseInt(card.dataset.toolRank);
                    this.openToolModal(rank);
                });
            });
        }

        // Populate all tools grid
        const toolsGrid = document.getElementById('toolsGrid');
        if (toolsGrid) {
            toolsGrid.innerHTML = this.aiTools.map(tool => `
                <div class="tool__card" data-category="${tool.category}" data-tool-rank="${tool.rank}">
                    <div class="tool__header">
                        <h4 class="tool__name">${tool.name}</h4>
                        <div class="tool__score">${tool.score}</div>
                    </div>
                    <div class="tool__category">${tool.category}</div>
                    <div class="tool__strength">${tool.key_strength}</div>
                    <div class="tool__use-case">${tool.use_case}</div>
                </div>
            `).join('');

            // Add click listeners to tool cards
            document.querySelectorAll('.tool__card').forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    const rank = parseInt(card.dataset.toolRank);
                    this.openToolModal(rank);
                });
            });
        }

        // Populate comparison table
        this.populateComparisonTable();
    }

    populateComparisonTable() {
        const comparisonTable = document.getElementById('comparisonTable');
        if (!comparisonTable) return;

        const tableHeaders = ['Rank', 'Tool', 'Category', 'Key Strength', 'Score'];
        const tableHTML = `
            <thead>
                <tr>
                    ${tableHeaders.map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${this.aiTools.map(tool => `
                    <tr class="comparison-row" data-tool-rank="${tool.rank}">
                        <td><strong>#${tool.rank}</strong></td>
                        <td class="table-tool-name">${tool.name}</td>
                        <td class="table-category">${tool.category}</td>
                        <td>${tool.key_strength}</td>
                        <td class="table-score">${tool.score}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        
        comparisonTable.innerHTML = tableHTML;

        // Add click listeners to table rows
        document.querySelectorAll('.comparison-row').forEach(row => {
            row.addEventListener('click', (e) => {
                e.preventDefault();
                const rank = parseInt(row.dataset.toolRank);
                this.openToolModal(rank);
            });
        });
    }

    populateWorkflowTemplates() {
        const templatesGrid = document.getElementById('templatesGrid');
        if (!templatesGrid) return;

        templatesGrid.innerHTML = this.workflowTemplates.map(template => `
            <div class="template__card" data-template-id="${template.id}">
                <div class="template__header">
                    <h3 class="template__name">${template.name}</h3>
                    <p class="template__description">${template.description}</p>
                </div>
                <div class="template__stats">
                    <div class="template__time-saved">⏱️ Saves: ${template.time_saved}</div>
                    <div class="template__nodes">🔗 ${template.nodes} nodes</div>
                </div>
                <div class="template__ai-models">
                    <h5>🤖 AI Models:</h5>
                    <div class="ai-model-tags">
                        ${template.ai_models.map(model => `<span class="ai-model-tag">${model}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Add click listeners to template cards
        document.querySelectorAll('.template__card').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const templateId = parseInt(card.dataset.templateId);
                this.openWorkflowModal(templateId);
            });
        });
    }

    populatePricing() {
        const pricingGrid = document.getElementById('pricingGrid');
        if (!pricingGrid) return;
        
        pricingGrid.innerHTML = this.pricingPlans.map(plan => `
            <div class="pricing__card ${plan.recommended ? 'pricing__card--recommended' : ''}">
                <div class="pricing__header">
                    <h3 class="pricing__name">${plan.name}</h3>
                    <div class="pricing__price">${plan.price}</div>
                    <div class="pricing__period">per ${plan.period}</div>
                </div>
                <p class="pricing__description">${plan.description}</p>
                <ul class="pricing__features">
                    ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="pricing__extras">
                    <div class="pricing__extra">
                        <span>Tools Access:</span>
                        <span>${plan.tools_included}</span>
                    </div>
                    <div class="pricing__extra">
                        <span>Workflows:</span>
                        <span>${plan.workflows}</span>
                    </div>
                </div>
                <button class="btn btn--primary btn--full-width" data-plan="${plan.name}">
                    ${plan.name === 'Student Starter' ? 'Get Started Free' : plan.recommended ? 'Start Free Trial' : 'Get Started'}
                </button>
            </div>
        `).join('');

        // Add click listeners to pricing buttons
        document.querySelectorAll('.pricing__card button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const planName = btn.dataset.plan;
                this.selectPlan(planName);
            });
        });
    }

    populateTestimonials() {
        const testimonialsGrid = document.getElementById('testimonialsGrid');
        if (!testimonialsGrid) return;
        
        testimonialsGrid.innerHTML = this.testimonials.map(testimonial => `
            <div class="testimonial__card">
                <div class="testimonial__header">
                    <div class="testimonial__avatar">${testimonial.avatar}</div>
                    <div class="testimonial__info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
                <div class="testimonial__rating">${'★'.repeat(testimonial.rating)}</div>
                <p class="testimonial__text">"${testimonial.text}"</p>
            </div>
        `).join('');
    }

    // Filter and search functionality
    filterCourses(category, clickedBtn) {
        const courseCards = document.querySelectorAll('.course__card');
        const filterBtns = document.querySelectorAll('.course__filters .filter__btn');
        
        // Update active filter
        filterBtns.forEach(btn => btn.classList.remove('active'));
        if (clickedBtn) {
            clickedBtn.classList.add('active');
        }
        
        // Filter courses with animation
        courseCards.forEach((card, index) => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || cardCategory === category) {
                setTimeout(() => {
                    card.style.display = 'block';
                    card.classList.add('animate-fade-in');
                }, index * 50);
            } else {
                card.style.display = 'none';
                card.classList.remove('animate-fade-in');
            }
        });

        const categoryName = category === 'all' ? 'All Courses' : category;
        this.showSuccess(`Showing ${categoryName} courses with free student tools integration`);
    }

    filterTools(category, clickedBtn) {
        const toolCards = document.querySelectorAll('.tool__card');
        const filterBtns = document.querySelectorAll('.tools-filters .filter__btn');
        
        // Update active filter
        filterBtns.forEach(btn => btn.classList.remove('active'));
        if (clickedBtn) {
            clickedBtn.classList.add('active');
        }
        
        // Filter tools with animation
        toolCards.forEach((card, index) => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || cardCategory === category) {
                setTimeout(() => {
                    card.style.display = 'block';
                    card.classList.add('animate-fade-in');
                }, index * 30);
            } else {
                card.style.display = 'none';
                card.classList.remove('animate-fade-in');
            }
        });

        const categoryName = category === 'all' ? 'All Tools' : category;
        this.showSuccess(`Showing ${categoryName} AI tools`);
    }

    handleToolsSearch(e) {
        const query = e.target.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool__card');
        let visibleCount = 0;
        
        toolCards.forEach(card => {
            const name = card.querySelector('.tool__name').textContent.toLowerCase();
            const category = card.querySelector('.tool__category').textContent.toLowerCase();
            const strength = card.querySelector('.tool__strength').textContent.toLowerCase();
            const useCase = card.querySelector('.tool__use-case').textContent.toLowerCase();
            
            if (name.includes(query) || category.includes(query) || 
                strength.includes(query) || useCase.includes(query)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = query ? 'none' : 'block';
                if (!query) visibleCount++;
            }
        });

        if (query) {
            this.showSuccess(`Found ${visibleCount} AI tools matching "${query}"`);
        }
    }

    handleGlobalSearch(e) {
        const query = e.target.value.toLowerCase();
        if (!query) return;

        let results = [];
        
        // Search courses
        this.courses.forEach(course => {
            if (course.title.toLowerCase().includes(query) || 
                course.description.toLowerCase().includes(query) ||
                course.tools_used.some(tool => tool.toLowerCase().includes(query))) {
                results.push(`Course: ${course.title}`);
            }
        });

        // Search tools
        this.aiTools.forEach(tool => {
            if (tool.name.toLowerCase().includes(query) || 
                tool.category.toLowerCase().includes(query) ||
                tool.key_strength.toLowerCase().includes(query)) {
                results.push(`Tool: ${tool.name}`);
            }
        });

        // Search student resources
        this.studentResources.premiumTools.forEach(tool => {
            if (tool.tool.toLowerCase().includes(query) || 
                tool.whyEssential.toLowerCase().includes(query)) {
                results.push(`Free Tool: ${tool.tool}`);
            }
        });

        if (results.length > 0) {
            this.showSuccess(`Found ${results.length} results across platform and student resources for "${query}"`);
        } else {
            this.showSuccess(`No results found for "${query}" - try different keywords`);
        }
    }

    // AI Model switching
    switchAIModel(model) {
        if (!model) return;
        
        this.currentAIModel = model;
        
        // Update active model button
        document.querySelectorAll('.ai-model__btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-model="${model}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
        
        // Update response based on selected model
        this.updateAIResponse();
        
        const modelName = this.aiModels[model]?.name || model;
        this.showSuccess(`Switched to ${modelName} - Get student-focused AI guidance!`);
    }

    updateAIResponse() {
        const responseElement = document.getElementById('aiResponse');
        if (!responseElement) return;
        
        const model = this.aiModels[this.currentAIModel];
        if (!model) return;
        
        const responses = model.responses;
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        // Simulate typing effect
        responseElement.innerHTML = '';
        this.typeWriter(responseElement, randomResponse, 0);
    }

    typeWriter(element, text, i) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => this.typeWriter(element, text, i + 1), 20);
        }
    }

    sendMessage() {
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        
        if (!chatInput || !chatMessages) return;
        
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'chat__message chat__message--user';
        userMessage.innerHTML = `
            <div class="chat__avatar">👤</div>
            <div class="chat__content">${message}</div>
        `;
        chatMessages.appendChild(userMessage);
        
        // Clear input
        chatInput.value = '';
        
        // Add AI response after delay
        setTimeout(() => {
            const aiMessage = document.createElement('div');
            aiMessage.className = 'chat__message chat__message--ai';
            
            const model = this.aiModels[this.currentAIModel];
            const icon = model.name === 'GPT-5' ? '🧠' : model.name === 'Claude Opus 4.1' ? '⚡' : '💎';
            
            // Get relevant response based on message content
            let response = "Great question! ";
            if (message.toLowerCase().includes('student') || message.toLowerCase().includes('free') || message.toLowerCase().includes('money')) {
                response = model.responses[0];
            } else if (message.toLowerCase().includes('tool') || message.toLowerCase().includes('workflow')) {
                response = model.responses[1];
            } else {
                response += model.responses[Math.floor(Math.random() * model.responses.length)];
            }
            
            aiMessage.innerHTML = `
                <div class="chat__avatar">${icon}</div>
                <div class="chat__content">${response}</div>
            `;
            chatMessages.appendChild(aiMessage);
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Workflow functionality
    runWorkflowDemo() {
        const workflowNodes = document.querySelectorAll('.workflow-node');
        let currentIndex = 0;

        const animateNode = () => {
            if (currentIndex < workflowNodes.length) {
                const node = workflowNodes[currentIndex];
                node.style.transform = 'scale(1.1)';
                node.style.borderColor = '#00D4FF';
                node.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
                
                setTimeout(() => {
                    node.style.transform = 'scale(1)';
                    node.style.borderColor = '';
                    node.style.boxShadow = '';
                    currentIndex++;
                    animateNode();
                }, 800);
            } else {
                this.showSuccess('🚀 Student workflow executed! Personalized learning path created with $200K+ free tools integration.');
            }
        };

        this.showSuccess('▶️ Running student-optimized workflow automation demo...');
        setTimeout(animateNode, 500);
    }

    // Modal functionality
    openCourseModal(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return;
        
        const modal = document.getElementById('courseModal');
        const title = document.getElementById('modalCourseTitle');
        const content = document.getElementById('modalCourseContent');
        
        if (!modal || !title || !content) return;
        
        title.textContent = course.title;
        content.innerHTML = `
            <div class="course-modal__details">
                <div class="course-modal__meta">
                    <span class="status status--info">${course.difficulty}</span>
                    <span class="course-modal__duration">${course.duration}</span>
                    <div class="course__rating">
                        <span class="course__stars">${'★'.repeat(Math.floor(course.rating))}${'☆'.repeat(5-Math.floor(course.rating))}</span>
                        <span>${course.rating}</span>
                    </div>
                </div>
                <p class="course-modal__description">${course.description}</p>
                <div class="course-modal__stats">
                    <div class="stat">
                        <strong>${course.lessons}</strong> lessons
                    </div>
                    <div class="stat">
                        <strong>${course.students.toLocaleString()}</strong> students
                    </div>
                    <div class="stat">
                        <strong>${course.price}</strong> price
                    </div>
                </div>
                <div class="tools-used">
                    <h4>🔧 Free Student Tools You'll Master:</h4>
                    <div class="tool-tags">
                        ${course.tools_used.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                    </div>
                </div>
                ${course.coursera_supplement ? `
                    <div class="course-supplement">
                        <h4>📚 Free Coursera Supplement:</h4>
                        <p>${course.coursera_supplement}</p>
                    </div>
                ` : ''}
                <div class="course-modal__preview">
                    <h4>What you'll learn:</h4>
                    <ul>
                        <li>Master AI concepts using $200K+ worth of free student tools</li>
                        <li>Build real projects with premium AI models (free as student)</li>
                        <li>Create automated workflows using GitHub Student Pack</li>
                        <li>Leverage free Coursera courses and YouTube tutorials</li>
                        <li>Join student community and career acceleration program</li>
                        <li>Track your massive savings and skill development</li>
                    </ul>
                </div>
                <div class="course-modal__actions">
                    <button class="btn btn--primary btn--lg" data-course-id="${course.id}">
                        ${course.price === 'Free' ? 'Enroll Free + Get Tool Access' : `Enroll for ${course.price} + Free Tools`}
                    </button>
                    <button class="btn btn--outline btn--lg">Add to Student Wishlist</button>
                </div>
            </div>
        `;
        
        // Add event listener for enroll button
        const enrollBtn = content.querySelector('.btn--primary');
        if (enrollBtn) {
            enrollBtn.addEventListener('click', () => {
                this.enrollCourse(courseId);
            });
        }
        
        this.openModal('courseModal');
    }

    openToolModal(rank) {
        const tool = this.aiTools.find(t => t.rank === rank);
        if (!tool) return;
        
        const modal = document.getElementById('toolModal');
        const title = document.getElementById('modalToolTitle');
        const content = document.getElementById('modalToolContent');
        
        if (!modal || !title || !content) return;
        
        title.textContent = `${tool.name} - Rank #${tool.rank}`;
        
        // Check if this tool is available free for students
        const studentTool = this.studentResources.premiumTools.find(st => 
            st.tool.includes(tool.name.split(' ')[0]) || tool.name.includes(st.tool.split(' ')[0])
        );
        
        content.innerHTML = `
            <div class="tool-modal__details">
                <div class="tool-modal__header">
                    <div class="tool-modal__score">Score: ${tool.score}/10</div>
                    <div class="tool-modal__category">${tool.category}</div>
                </div>
                ${studentTool ? `
                    <div class="student-offer-banner">
                        <h3>🎓 Student Special: ${studentTool.offer} (${studentTool.value} value)</h3>
                        <p>Available FREE for students until ${studentTool.deadline}</p>
                    </div>
                ` : ''}
                <div class="tool-modal__strength">
                    <h4>🎯 Key Strength:</h4>
                    <p>${tool.key_strength}</p>
                </div>
                <div class="tool-modal__use-case">
                    <h4>💡 Best Use Case:</h4>
                    <p>${tool.use_case}</p>
                </div>
                <div class="tool-modal__integration">
                    <h4>🔗 Student Integration:</h4>
                    <p>This tool is integrated into our courses and workflow templates. ${studentTool ? 'Get it FREE with student verification!' : 'Learn to use it effectively through our comprehensive curriculum.'}</p>
                </div>
                <div class="tool-modal__actions">
                    ${studentTool ? 
                        `<a href="${studentTool.accessLink}" target="_blank" class="btn btn--primary">Get Free as Student</a>` :
                        `<a href="${tool.official_link}" target="_blank" class="btn btn--primary">Visit Official Site</a>`
                    }
                    <button class="btn btn--outline" onclick="app.showSuccess('${tool.name} added to your learning path!')">Add to Learning Path</button>
                </div>
            </div>
        `;
        
        this.openModal('toolModal');
    }

    openWorkflowModal(templateId) {
        const template = this.workflowTemplates.find(t => t.id === templateId);
        if (!template) return;
        
        const modal = document.getElementById('workflowModal');
        const title = document.getElementById('modalWorkflowTitle');
        const content = document.getElementById('modalWorkflowContent');
        
        if (!modal || !title || !content) return;
        
        title.textContent = template.name;
        content.innerHTML = `
            <div class="workflow-modal__details">
                <div class="workflow-modal__header">
                    <p class="workflow-modal__description">${template.description}</p>
                    <div class="workflow-modal__stats">
                        <div class="workflow-stat">
                            <strong>⏱️ Time Saved:</strong> ${template.time_saved}
                        </div>
                        <div class="workflow-stat">
                            <strong>🔗 Nodes:</strong> ${template.nodes}
                        </div>
                        <div class="workflow-stat">
                            <strong>🚀 Trigger:</strong> ${template.trigger}
                        </div>
                    </div>
                </div>
                <div class="workflow-modal__ai-models">
                    <h4>🤖 Free Student AI Models Used:</h4>
                    <div class="ai-model-tags">
                        ${template.ai_models.map(model => `<span class="ai-model-tag">${model}</span>`).join('')}
                    </div>
                </div>
                <div class="workflow-modal__steps">
                    <h4>📋 Workflow Steps:</h4>
                    <ol class="workflow-steps">
                        ${template.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                <div class="workflow-modal__student-note">
                    <p><strong>💡 Student Tip:</strong> This workflow uses free student tools exclusively. Set up your free accounts first for maximum benefit!</p>
                </div>
                <div class="workflow-modal__actions">
                    <button class="btn btn--primary" onclick="app.deployTemplate(${template.id})">Deploy Template</button>
                    <button class="btn btn--outline" onclick="app.showSuccess('Template copied to your student workspace!')">Copy to Workspace</button>
                    <button class="btn btn--outline" onclick="app.showSuccess('Student customization guide sent!')">Get Student Guide</button>
                </div>
            </div>
        `;
        
        this.openModal('workflowModal');
    }

    openAuthModal(mode) {
        this.currentAuthMode = mode;
        const modal = document.getElementById('authModal');
        const title = document.getElementById('authModalTitle');
        
        if (!modal || !title) return;
        
        if (mode === 'login') {
            title.textContent = 'Login to AILearnX';
            this.updateAuthSwitchLink('Sign up', 'New to AILearnX?');
        } else {
            title.textContent = 'Join AILearnX - Access $200K+ Free Tools';
            this.updateAuthSwitchLink('Log in', 'Already have an account?');
        }
        
        this.openModal('authModal');
    }

    updateAuthSwitchLink(linkText, promptText) {
        const switchElement = document.querySelector('#authModal .auth__switch p');
        if (switchElement) {
            switchElement.innerHTML = `${promptText} <a href="#" id="authSwitchLink">${linkText}</a>`;
            
            const newSwitchLink = document.getElementById('authSwitchLink');
            if (newSwitchLink) {
                newSwitchLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.switchAuthMode();
                });
            }
        }
    }

    switchAuthMode() {
        const newMode = this.currentAuthMode === 'login' ? 'signup' : 'login';
        this.openAuthModal(newMode);
    }

    handleAuthSubmit(e) {
        e.preventDefault();
        
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            this.closeModal('authModal');
            if (this.currentAuthMode === 'signup') {
                this.showSuccess(`🎉 Welcome to AILearnX! Check your email for student verification instructions to unlock $200K+ worth of free AI tools!`);
            } else {
                this.showSuccess(`✅ Successfully logged in! Access your student resources and continue your AI journey.`);
            }
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    // Action handlers
    enrollCourse(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return;
        
        this.closeModal('courseModal');
        
        if (course.price === 'Free') {
            this.showSuccess(`🎓 Enrolled in "${course.title}"! Set up your free student tools to maximize learning: ChatGPT Plus, Google AI Pro, GitHub Student Pack.`);
        } else {
            this.showSuccess(`🚀 Enrolling in "${course.title}"... You'll also get access to our complete Student Resources Hub worth $200K+!`);
            setTimeout(() => {
                this.openAuthModal('signup');
            }, 1500);
        }
    }

    selectPlan(planName) {
        if (planName === 'Student Starter') {
            this.showSuccess(`🎉 Perfect choice! Student Starter gives you access to $200K+ worth of free tools. Sign up to get started!`);
        } else {
            this.showSuccess(`✨ Excellent choice! ${planName} includes everything in Student Starter PLUS premium features. Starting your free trial...`);
        }
        setTimeout(() => {
            this.openAuthModal('signup');
        }, 1500);
    }

    deployTemplate(templateId) {
        const template = this.workflowTemplates.find(t => t.id === templateId);
        if (!template) return;
        
        this.closeModal('workflowModal');
        this.showSuccess(`🚀 Deploying "${template.name}" with free student tools... This saves you ${template.time_saved}!`);
        
        setTimeout(() => {
            this.showSuccess('✅ Student workflow deployed! All free tools integrated and ready to use.');
        }, 2000);
    }

    showAllCourses() {
        const allBtn = document.querySelector('.course__filters [data-category="all"]');
        if (allBtn) {
            this.filterCourses('all', allBtn);
        }
        
        this.scrollToSection('courses');
        this.updateActiveNavLink('#courses');
    }

    toggleMobileMenu() {
        const navMenu = document.querySelector('.nav__menu');
        const navToggle = document.getElementById('navToggle');
        
        if (navMenu && navToggle) {
            navMenu.classList.toggle('nav__menu--open');
            navToggle.classList.toggle('nav__toggle--open');
        }
    }

    showSuccess(message) {
        // Remove any existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create and show a success notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__icon">✓</span>
                <span class="notification__message">${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe elements to animate
        document.querySelectorAll('.feature__card, .course__card, .tool__card, .template__card, .testimonial__card, .pricing__card, .top-tool__card, .premium-tool__card, .action__card').forEach(el => {
            observer.observe(el);
        });
    }
}

// Initialize the application
const app = new AILearnX();
// Expose the app instance globally for inline handlers (e.g., onclick="app.*")
window.app = app;

// Performance optimization for scroll events
let ticking = false;

function updateScrollPosition() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (scrolled > 100) {
        header?.classList.add('header--scrolled');
    } else {
        header?.classList.remove('header--scrolled');
    }
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.querySelectorAll('.pulse').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        document.querySelectorAll('.pulse').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// Enhanced keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        app.closeModal('courseModal');
        app.closeModal('toolModal');
        app.closeModal('workflowModal');
        app.closeModal('authModal');
    }
    
    // Quick navigation shortcuts
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                app.navigateToHome();
                break;
            case '2':
                e.preventDefault();
                app.scrollToSection('courses');
                app.updateActiveNavLink('#courses');
                break;
            case '3':
                e.preventDefault();
                app.scrollToSection('ai-tools');
                app.updateActiveNavLink('#ai-tools');
                break;
            case '4':
                e.preventDefault();
                app.scrollToSection('workflow-studio');
                app.updateActiveNavLink('#workflow-studio');
                break;
            case '5':
                e.preventDefault();
                app.scrollToSection('student-resources');
                app.updateActiveNavLink('#student-resources');
                break;
        }
    }
});

// Console welcome message
console.log(`
🎓 Welcome to AILearnX - The Ultimate Student AI Resource Hub!
═══════════════════════════════════════════════════════════════

💰 Student Savings: $200,280+ in free AI tools and resources
🔧 Premium Tools: ChatGPT Plus, Google AI Pro, GitHub Student Pack
📚 Free Courses: Top Coursera AI courses with Andrew Ng
🎥 YouTube Learning: Curated playlists from top AI channels  
🎨 Image Tools: Unlimited free generation with Raphael AI, Vheer
⚡ Workflows: Automated student success and tool integration
🤖 AI Models: GPT-5, Claude Opus 4.1, Gemini Pro tutoring

Quick Navigation Shortcuts:
• Ctrl+1: Home (FIXED!)
• Ctrl+2: Courses  
• Ctrl+3: AI Tools Hub
• Ctrl+4: Workflow Studio
• Ctrl+5: Student Resources Hub (FIXED!)
• ESC: Close modals

🔧 Navigation Issues FIXED:
✅ Home navigation working
✅ Student Resources navigation working  
✅ Logo navigation working
✅ All section scrolling working

🚀 Don't pay for AI tools - get them FREE as a student!
Ready to save $200K+ and accelerate your AI career! 🎉
`);

console.log('🎓 AILearnX Student Resources Platform - NAVIGATION FIXED! ✨');