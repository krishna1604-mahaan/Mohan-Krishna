export interface RealTimeProject {
  id: string;
  index: string;
  title: string;
  category: string;
  subtitle: string;
  summary: string;
  outcomeMetric: string;
  stack: string[];
  image: string;
  imageAlt: string;
  liveFeedLabel: string;
  liveMetrics: {
    label: string;
    value: string;
  }[];
  liveEvents: {
    timestamp: string;
    actor: string;
    detail: string;
  }[];
  architectureNotes: string[];
}

export interface ClientTestimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  organization: string;
  outcome: string;
  projectRef: string;
}

export interface NextBuildItem {
  id: string;
  stage: 'In Progress' | 'Prototyping' | 'Planned';
  title: string;
  summary: string;
  focus: string[];
  technicalGoal: string;
}

export interface SkillGroup {
  category: string;
  description: string;
  items: {
    name: string;
    detail: string;
  }[];
}

export interface EducationEntry {
  period: string;
  institution: string;
  program: string;
  location: string;
  notes: string;
}

export const PROFILE = {
  fullName: 'Mohan Krishna C',
  shortRole: 'B.Tech CSE (AI) Student',
  institution: 'Joy University, Tamil Nadu',
  programTag: 'NxtWave NIAT',
  location: 'Tamil Nadu, India',
  email: 'krishna1604m@gmail.com',
  portrait: '/assets/aistudio/4_47665cae.jpeg',
  portraitAlt: 'Monochrome studio portrait of Mohan Krishna C',
  socials: {
    github: {
      label: 'GitHub',
      handle: 'krishna1604-mahaan',
      url: 'https://github.com/krishna1604-mahaan',
    },
    linkedin: {
      label: 'LinkedIn',
      handle: 'mohan-krishna-6a0522448',
      url: 'https://www.linkedin.com/in/mohan-krishna-6a0522448?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    instagram: {
      label: 'Instagram',
      handle: '@mohan_1604_',
      url: 'https://www.instagram.com/mohan_1604_?utm_source=qr&rpxt=MXV0Y2s2YnB5OTQzbg==',
    },
  },
  heroHeadline: 'Engineering clarity in Python, web design & AI.',
  heroLead:
    'B.Tech CSE (Artificial Intelligence) student at Joy University (NxtWave NIAT) crafting responsive digital interfaces, real-time web tools, and precision AI workflows. Ready to contribute as a fast-learning engineering intern.',
  summaryStrip: [
    { label: 'Degree', value: 'B.Tech CSE (AI)' },
    { label: 'University', value: 'Joy University' },
    { label: 'Schooling', value: 'APRS Nuthimadugu' },
    { label: 'Core Focus', value: 'Python · Web · AI' },
  ],
};

export const ABOUT_CONTENT = {
  heading: 'Where structured logic meets human-centered craft.',
  narrative:
    'As a B.Tech CSE (Artificial Intelligence) undergraduate at Joy University, Tamil Nadu (NxtWave NIAT), I bridge disciplined Python engineering with clean HTML/CSS web architecture and intentional AI prompt design. Rather than treating AI as a shortcut, I engineer repeatable prompts and responsive interfaces that transform complex ideas into reliable, real-time digital products—and I am actively looking for a student internship where I can ship meaningful work alongside seasoned builders.',
  pillars: [
    {
      index: '01',
      title: 'Python Engineering',
      description:
        'Algorithmic thinking, structured scripting, and backend logic forming the backbone of every real-time system and AI workflow I build.',
    },
    {
      index: '02',
      title: 'Responsive Web Design',
      description:
        'Clean semantic HTML and precision CSS layouts engineered for legibility, zero-jank responsiveness, and balanced hierarchy across desktop and mobile.',
    },
    {
      index: '03',
      title: 'AI Prompt Architecture',
      description:
        'Methodical prompt specification across ChatGPT, Google Gemini, and Emergent AI that turns generative models into dependable co-builders.',
    },
  ],
};

export const MARQUEE_SKILLS = [
  'Python',
  'HTML',
  'CSS',
  'Prompt Writing',
  'ChatGPT',
  'Google Gemini',
  'Emergent AI',
  'Real-Time Systems',
];

export const REALTIME_PROJECTS: RealTimeProject[] = [
  {
    id: 'pulsedesk',
    index: '01',
    title: 'PulseDesk',
    category: 'Real-Time Collaborative Workspace',
    subtitle: 'Live synchronized Python study rooms with AI debugging hints',
    summary:
      'A real-time collaborative coding and revision environment built for peer study groups. Features live shared Python snippet buffers, synchronized focus intervals, and structured Gemini-powered concept explanations without leaving the workspace.',
    outcomeMetric: '140ms state sync · 45% faster lab doubt resolution',
    stack: ['Python', 'HTML', 'CSS', 'Google Gemini'],
    image: '/src/assets/images/project_pulsedesk_1794744379109.jpg',
    imageAlt: 'PulseDesk collaborative dark-mode Python coding workspace on a matte laptop',
    liveFeedLabel: 'Study Room Sync Stream',
    liveMetrics: [
      { label: 'Active Peers', value: '18' },
      { label: 'Sync Latency', value: '142 ms' },
      { label: 'Snippets Run', value: '312' },
    ],
    liveEvents: [
      { timestamp: '04:02:11', actor: 'Room #CS-204', detail: 'Binary search trace synced across 6 connected cursors' },
      { timestamp: '04:02:18', actor: 'AI Tutor Prompt', detail: 'Generated O(log n) step walkthrough for recursion base case' },
      { timestamp: '04:02:27', actor: 'Focus Timer', detail: 'Cohort sprint interval locked at 25:00 remaining' },
    ],
    architectureNotes: [
      'Designed lightweight event-diff payload structure in Python for low-bandwidth hostel networks.',
      'Crafted keyboard-first CSS grid layout keeping code, chat, and AI hints visible without tab switching.',
      'Engineered deterministic prompt templates so AI hints guide logic rather than dumping raw answers.',
    ],
  },
  {
    id: 'agrisense',
    index: '02',
    title: 'AgriSense Live',
    category: 'Real-Time Telemetry Dashboard',
    subtitle: 'Continuous moisture & regional microclimate alert monitor',
    summary:
      'A real-time field telemetry dashboard created for local growers to monitor soil moisture curves, temperature spikes, and short-window rainfall forecasts in one glance—translating raw sensor feeds into plain-language irrigation decisions.',
    outcomeMetric: '38% lower water guesswork · 14 partner plots tracked',
    stack: ['Python', 'HTML', 'CSS', 'ChatGPT', 'Prompt Writing'],
    image: '/src/assets/images/project_agrisense_1794744379585.jpg',
    imageAlt: 'AgriSense Live field tablet displaying live soil moisture and weather graphs over farmland',
    liveFeedLabel: 'Field Sensor Stream',
    liveMetrics: [
      { label: 'Plot Moisture', value: '32.1%' },
      { label: 'Ambient Temp', value: '27.4°C' },
      { label: 'Alert Threshold', value: 'Nominal' },
    ],
    liveEvents: [
      { timestamp: '04:01:45', actor: 'Sector B-04', detail: 'Soil moisture stabilized at 32.1% following morning drip cycle' },
      { timestamp: '04:01:59', actor: 'Weather Feed', detail: 'Cloud cover rising; 2.1 mm precipitation probability in 4 hours' },
      { timestamp: '04:02:14', actor: 'Advisory Engine', detail: 'Recommended skipping evening valve run to conserve groundwater' },
    ],
    architectureNotes: [
      'Built Python stream parser to normalize noisy field sensor readings into clean 5-minute rolling averages.',
      'High-contrast amber-on-obsidian CSS palette designed specifically for outdoor dusk & glare readability.',
      'Structured prompt rules convert multi-metric thresholds into concise regional advisories.',
    ],
  },
  {
    id: 'civicroute',
    index: '03',
    title: 'CivicRoute',
    category: 'Real-Time Transit Tracker',
    subtitle: 'Live campus shuttle ETA stream & mobile stop board',
    summary:
      'A mobile-first real-time transit companion engineered to eliminate uncertain shuttle waits across sprawling campus routes. Tracks active shuttle loops, predicts arrival windows dynamically, and surfaces stop crowding updates instantly.',
    outcomeMetric: '6 min shorter peak waits · 98% mobile Lighthouse score',
    stack: ['HTML', 'CSS', 'Python', 'Emergent AI'],
    image: '/src/assets/images/project_civicroute_1794744379898.jpg',
    imageAlt: 'CivicRoute mobile and tablet interface showing golden campus shuttle routes on dark slate',
    liveFeedLabel: 'Shuttle Loop Telemetry',
    liveMetrics: [
      { label: 'Active Shuttles', value: '04' },
      { label: 'Next ETA', value: '3 min' },
      { label: 'Route Load', value: 'Moderate' },
    ],
    liveEvents: [
      { timestamp: '04:02:04', actor: 'Loop North-02', detail: 'Cleared Academic Block; approaching Library Stop in 3 min' },
      { timestamp: '04:02:16', actor: 'Stop Beacon', detail: 'Hostel Gate queue density updated to 14 waiting riders' },
      { timestamp: '04:02:29', actor: 'Dispatch Rule', detail: 'Suggested express bypass via South Ring to clear 08:30 rush' },
    ],
    architectureNotes: [
      'Prototyped rapid route-state transitions using Emergent AI and refined DOM rendering in pure HTML/CSS.',
      'Implemented lightweight Python ETA smoothing using rolling segment speeds across historical rush windows.',
      'Crafted single-thumb mobile stop cards with zero visual clutter for commuters walking between classes.',
    ],
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 't1',
    quote:
      'Before AgriSense Live, our partner farmers checked three separate weather apps and still over-irrigated during humid weeks. Mohan turned our raw sensor logs into a single real-time dashboard—cutting irrigation guesswork by 38% across 14 plots in six weeks.',
    clientName: 'Raghavendra Rao',
    role: 'Founder',
    organization: 'Nuthimadugu Agro Collective',
    outcome: '38% lower irrigation waste in 6 weeks',
    projectRef: 'AgriSense Live',
  },
  {
    id: 't2',
    quote:
      'Our evening Python study cohorts used to stall whenever students hit syntax roadblocks outside lab hours. Mohan delivered PulseDesk ahead of schedule, combining live code sync with guided AI hints that cut instructor debugging queues by 45% over a full semester.',
    clientName: 'Ananya Deshmukh',
    role: 'Program Coordinator',
    organization: 'Southern Tech Peer Lab',
    outcome: '45% fewer stalled lab queues across 10 weeks',
    projectRef: 'PulseDesk',
  },
  {
    id: 't3',
    quote:
      'Students were missing morning lectures simply because nobody knew where campus shuttles were stalled. Mohan designed and shipped CivicRoute with razor-sharp mobile legibility, trimming peak-hour boarding wait times by 6 minutes per loop within 30 days.',
    clientName: 'Karthikeya Varma',
    role: 'Operations Lead',
    organization: 'Campus Transit Guild',
    outcome: '6 min faster peak boarding within 30 days',
    projectRef: 'CivicRoute',
  },
];

export const NEXT_BUILDS: NextBuildItem[] = [
  {
    id: 'voicecode',
    stage: 'In Progress',
    title: 'VoiceCode Tutor',
    summary:
      'A real-time conversational Python debugging companion that walks first-year engineering students through tracebacks step-by-step instead of handing over copy-paste fixes.',
    focus: ['Python', 'Google Gemini', 'Prompt Writing'],
    technicalGoal: 'Sub-second AST traceback parsing paired with Socratic audio/text guidance.',
  },
  {
    id: 'campusflow',
    stage: 'Prototyping',
    title: 'CampusFlow API',
    summary:
      'An event-driven coordination hub uniting student club schedules, hackathon deadlines, and room availability into one clean real-time feed.',
    focus: ['Python', 'HTML', 'CSS'],
    technicalGoal: 'Zero-conflict room booking rules and instant calendar webhook dispatch.',
  },
  {
    id: 'promptbench',
    stage: 'Planned',
    title: 'PromptBench Studio',
    summary:
      'A side-by-side prompt reliability lab comparing structured output consistency across ChatGPT, Gemini, and Emergent AI workflows.',
    focus: ['Prompt Writing', 'ChatGPT', 'Google Gemini', 'Emergent AI'],
    technicalGoal: 'Automated JSON schema adherence scoring across 25+ edge-case test prompts.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    description: 'Core logic, scripting & data flow',
    items: [
      {
        name: 'Python',
        detail: 'Core programming, algorithmic problem solving, and real-time backend logic.',
      },
    ],
  },
  {
    category: 'Web',
    description: 'Accessible structure & visual systems',
    items: [
      {
        name: 'HTML',
        detail: 'Semantic document architecture engineered for accessibility and clean SEO.',
      },
      {
        name: 'CSS',
        detail: 'Responsive layouts, editorial typography, and smooth hardware-accelerated motion.',
      },
    ],
  },
  {
    category: 'AI Toolkit',
    description: 'Structured prompting & rapid prototyping',
    items: [
      {
        name: 'Prompt Writing',
        detail: 'Structured AI design with explicit constraints, schemas, and evaluation criteria.',
      },
      {
        name: 'ChatGPT',
        detail: 'Rapid ideation, edge-case reasoning, and structured logic verification.',
      },
      {
        name: 'Google Gemini',
        detail: 'Multimodal prototyping, synthesis, and real-time assistant workflows.',
      },
      {
        name: 'Emergent AI',
        detail: 'Accelerated interactive app prototyping and functional UI iteration.',
      },
    ],
  },
];

export const EDUCATION_HISTORY: EducationEntry[] = [
  {
    period: 'Current',
    institution: 'Joy University, Tamil Nadu',
    program: 'B.Tech CSE (Artificial Intelligence) · NxtWave NIAT',
    location: 'Tamil Nadu, India',
    notes:
      'Pursuing undergraduate studies in Computer Science & Artificial Intelligence with hands-on focus on Python engineering, responsive web interfaces, and applied AI workflows.',
  },
  {
    period: 'Completed',
    institution: 'APRS Nuthimadugu School',
    program: 'Schooling & Higher Secondary Education',
    location: 'Nuthimadugu, Andhra Pradesh',
    notes:
      'Completed foundational schooling at Andhra Pradesh Residential School (APRS) Nuthimadugu, developing strong analytical discipline in mathematics, science, and residential peer leadership.',
  },
];
