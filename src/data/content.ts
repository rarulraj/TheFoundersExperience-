export const siteConfig = {
  name: "The Founders Experience",
  shortName: "TFE",
  tagline: "Built by founders. For founders.",
  positioning:
    "A supportive community where founders and startup leaders connect, share the realities of building, learn from one another, and grow stronger companies together.",
  url: "https://thefoundersexperience.com",
  linkedin: "https://www.linkedin.com/company/the-founders-experience-startup-community/posts/?feedView=all",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/#community" },
  { label: "Events", href: "/events" },
  { label: "Partners", href: "/partners" },
  { label: "About", href: "/about" },
];

export const whyCards = [
  {
    title: "Real Conversations",
    description:
      "Talk openly about hiring, fundraising, GTM, leadership, product, AI, burnout, growth, and everything that happens between the milestones.",
  },
  {
    title: "Learn From Builders",
    description:
      "Learn directly from founders and operators solving similar problems at different stages of growth.",
  },
  {
    title: "Build Real Relationships",
    description:
      "No endless networking feeds. The goal is genuine relationships between people building ambitious companies.",
  },
  {
    title: "Grow Together",
    description:
      "Share wins, failures, introductions, resources, and lessons with people who understand the journey.",
  },
];

export const memberBenefits = [
  "Founder roundtables",
  "Private member community",
  "Curated introductions",
  "Operator conversations",
  "Founder dinners",
  "Panels and fireside chats",
  "Coworking sessions",
  "Startup resources",
  "Invitations to private events",
];

export const socialProofPoints = [
  "Founder-led conversations",
  "Curated introductions",
  "Private community",
  "In-person experiences",
];

export const howItWorks = [
  {
    step: "01",
    title: "Apply",
    description:
      "Tell us what you’re building and where you are in the journey. Every application is read by a founder, not a filter.",
  },
  {
    step: "02",
    title: "Get accepted",
    description:
      "We curate for people actively building companies. If it’s a fit, you’re in. Membership is free.",
  },
  {
    step: "03",
    title: "Plug in",
    description:
      "Join roundtables, dinners, and the private community. Get introduced to people who have solved the problem in front of you.",
  },
];

export const showcaseFeatures = [
  {
    eyebrow: "Community",
    title: "A private community, not another feed.",
    description:
      "A curated directory of founders and operators you can actually reach, filtered by stage, function, and the problem you’re trying to solve right now.",
    points: [
      "Curated member directory",
      "Private discussion space",
      "Stage and function filters",
      "Direct access, no gatekeeping",
    ],
    visual: "directory" as const,
  },
  {
    eyebrow: "Events",
    title: "Gatherings worth showing up for.",
    description:
      "Dinners, panels, roundtables, and coworking sessions. Small rooms, honest agendas, and formats designed for real conversation instead of business-card swaps.",
    points: [
      "Founder dinners and panels",
      "Operator roundtables",
      "Coworking and office hours",
      "San Francisco and virtual",
    ],
    visual: "event" as const,
  },
  {
    eyebrow: "Introductions",
    title: "Introductions that actually land.",
    description:
      "Tell us what you’re working on and we connect you with the member who has solved it before, with context on both sides, so the first call starts at the useful part.",
    points: [
      "Hand-matched by the founders",
      "Context shared up front",
      "Warm, double opt-in",
      "Follow-through, not just an email",
    ],
    visual: "intro" as const,
  },
];

export const manifestoStats = [
  { value: "100+", label: "Founders and startup leaders" },
  { value: "Free", label: "Membership for accepted members" },
  { value: "Oct 2026", label: "First gathering, San Francisco" },
  { value: "SF + Virtual", label: "In-person and online formats" },
];

export const faqs = [
  {
    question: "Who is The Founders Experience for?",
    answer:
      "Founders, cofounders, startup executives, technical and GTM leaders, and operators who are actively building companies, from idea stage through Series C and beyond.",
  },
  {
    question: "How much does membership cost?",
    answer:
      "Membership is free for accepted founders and operators. The community is supported by partners, never by member fees.",
  },
  {
    question: "What happens after I apply?",
    answer:
      "We review every application by hand. If it looks like a fit, we’ll reach out for a short intro conversation, then welcome you into the community.",
  },
  {
    question: "Where do events happen?",
    answer:
      "In-person gatherings in San Francisco, plus virtual roundtables you can join from anywhere. Our first gathering, The Founders Panel, lands in October 2026.",
  },
  {
    question: "Is this another networking group?",
    answer:
      "No. There are no endless feeds and no pitch floors. Programming is built around honest conversation: roundtables, dinners, and fireside chats with people in the work.",
  },
  {
    question: "Can my company partner with the community?",
    answer:
      "Yes. Brands partner with us to fund programming and build real relationships with founders. Head to the Partners page to start the conversation.",
  },
];

export const featuredEvent = {
  title: "The Founders Panel",
  location: "San Francisco",
  date: "Mid-October, SF. Exact date announced to members.",
  audience: "Founders and operators",
  format: "Panel",
  status: "Coming soon",
  image: "/images/community-gathering.jpg",
  imageAlt:
    "Founders and operators gathered for a Founders Experience evening of conversations and shared lessons.",
  description:
    "Our first gathering. A founder panel to open The Founders Experience: real conversation, practical lessons, and the start of the community.",
};

export const upcomingEvents = [
  {
    title: "Operator Roundtable: Hiring Your First Leaders",
    location: "Virtual",
    date: "October 2026",
    type: "Roundtable",
  },
  {
    title: "Coworking Morning + Office Hours",
    location: "San Francisco",
    date: "October 2026",
    type: "Coworking",
  },
];

export const speakers = [
  {
    name: "Jeremy Macleod",
    role: "Channel Manager",
    topic: "GTM Growth & Founding Specialist",
    linkedin: "https://www.linkedin.com/in/jeremymacleod/",
    initials: "JM",
    image: "/speakers/jeremy-macleod.jpg",
    imagePosition: "center 18%",
  },
  {
    name: "Jess Graham",
    role: "Community Manager",
    topic: "Start-up Marketing Specialist",
    linkedin: "https://www.linkedin.com/in/jessicagraham/",
    initials: "JG",
    image: "/speakers/jess-graham.jpg",
    imagePosition: "center 20%",
  },
  {
    name: "Dan Chalklin",
    role: "Channel Manager",
    topic: "Design Specialist",
    linkedin: "https://www.linkedin.com/in/dchalklin/",
    initials: "DC",
    image: "/speakers/dan-chalklin.jpg",
    imagePosition: "center 18%",
  },
  {
    name: "Lisa Baden",
    role: "Channel Manager",
    topic: "Fractional CFO",
    linkedin: "https://www.linkedin.com/in/lisa-baden/",
    initials: "LB",
    image: "/speakers/lisa-baden.jpg",
    imagePosition: "center 20%",
  },
  {
    name: "Matt Baden",
    role: "Channel Manager",
    topic: "Engineering Growth Specialist",
    linkedin: "https://www.linkedin.com/in/mattbadentse/",
    initials: "MB",
    image: "/speakers/matt-baden.jpg",
    imagePosition: "center 18%",
  },
  {
    name: "And more",
    role: "Coming soon",
    topic: "Operators from enterprises and small startups.",
    initials: "+",
  },
];

export const partnerBenefits = [
  {
    title: "Founder Access",
    description:
      "Build meaningful relationships with founders and operators through curated community experiences.",
  },
  {
    title: "Brand Visibility",
    description:
      "Place your brand alongside trusted founder conversations, events, and content.",
  },
  {
    title: "Events",
    description:
      "Support dinners, panels, coworking sessions, and founder gatherings.",
  },
  {
    title: "Content",
    description:
      "Collaborate on founder-focused conversations, educational content, and community programming.",
  },
  {
    title: "Product Exposure",
    description:
      "Introduce useful products and services to relevant startup leaders in an authentic environment.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Become part of the community rather than simply sponsoring a single event.",
  },
];

export const founders = [
  {
    name: "Arun Arulraj",
    role: "Co-founder, The Founders Experience",
    company: "TDengine",
    companyRole: "AI Solutions Engineer",
    linkedin: "https://www.linkedin.com/in/arun-arulraj-236a78259/",
    bio: "Builds AI systems for industrial operations at TDengine, working with time-series databases, ML, and cloud-scale data platforms. Right out of college he joined early-stage startup Soundromeda as Head of AI, raised a pre-seed with no VC experience, and serves as a scout for Necessary Ventures. Previously engineering at C3 AI and Meta.",
    focus: "Technical depth",
    initials: "AA",
    image: "/founders/arun-arulraj.png",
    imagePosition: "center 20%",
  },
  {
    name: "Ryan House",
    role: "Co-founder, The Founders Experience",
    company: "The Search Experience",
    companyRole: "Senior Consultant, Technical",
    linkedin: "https://www.linkedin.com/in/ryan-house1/",
    bio: "Over a decade in technical, product, and design recruitment for high-growth SaaS, fintech, and venture-backed startups from Seed through Series C. He's spent that time on the hiring side of the table, learning what separates the teams that scale from the ones that stall. Now he brings that pattern recognition to founders building their first teams.",
    focus: "Recruiting experience",
    initials: "RH",
    image: "/founders/ryan-house.png",
    imagePosition: "center top",
  },
];

export const foundingSponsor = {
  name: "TSE",
  url: "https://www.tsetalent.com",
  description:
    "A recruiting firm that partners with venture-backed founders to hire GTM, technical, and design teams from Seed through Series C.",
};

export const companiesWorkedWith = [
  "TDengine",
  "C3.ai",
  "OpenAI",
  "Meta",
  "Google",
  "Workday",
  "Wave",
  "Anthropic",
];

export const companiesWorkedWithNote =
  "and other Fortune 500 enterprises";

export const partnershipTiers = [
  {
    name: "Community Partner",
    description:
      "Support the community year-round and show up where founders already gather.",
    benefits: [
      "Website logo placement",
      "Community recognition",
      "Member offers / perks",
      "Social mentions",
    ],
  },
  {
    name: "Event Partner",
    description:
      "Activate around dinners, panels, and flagship gatherings with meaningful presence.",
    benefits: [
      "Event branding",
      "Event tickets",
      "Founder introductions",
      "Speaking opportunities where appropriate",
      "On-site presence",
    ],
  },
  {
    name: "Founding Partner",
    description:
      "Become a long-term partner shaping experiences across the community calendar.",
    benefits: [
      "Long-term community partnership",
      "Premium placement",
      "Multiple event activations",
      "Content collaborations",
      "Custom founder experiences",
      "Category exclusivity where appropriate",
    ],
    featured: true,
  },
];

export const personas = [
  {
    title: "Founders",
    description: "Leading a company through the hard parts of growth.",
  },
  {
    title: "Cofounders",
    description: "Building alongside a partner and looking for peer counsel.",
  },
  {
    title: "Startup Executives",
    description: "Scaling teams, systems, and culture inside high-growth companies.",
  },
  {
    title: "Technical Leaders",
    description: "Guiding product and engineering through rapid change.",
  },
  {
    title: "GTM Leaders",
    description: "Owning growth, revenue, and market motion.",
  },
  {
    title: "Operators",
    description: "Making the company work day to day, and compounding the lessons.",
  },
];

export const companyStages = [
  "Idea",
  "Pre-Seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C+",
  "Bootstrapped",
  "Other",
];

export const partnershipInterests = [
  "Community Sponsorship",
  "Event Sponsorship",
  "Content Partnership",
  "Founder Perks",
  "Venue Partnership",
  "Food / Beverage Partnership",
  "Recruiting Partnership",
  "Technology Partnership",
  "Other",
];

export const budgetRanges = [
  "Under $5K",
  "$5K–$10K",
  "$10K–$25K",
  "$25K–$50K",
  "$50K+",
  "Let’s Discuss",
];

export const memberLogos = [
  "TDengine",
  "C3.ai",
  "OpenAI",
  "Meta",
  "Google",
  "Workday",
  "Wave",
  "Anthropic",
];
