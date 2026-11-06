export interface Project {
  title: string;
  codename?: string;
  description: string;
  image: string;
  tags: string[];
  code: string;
  demo?: string;
  color: string;
  category: "all" | "agentic" | "vision" | "internship" | "personal";
  org?: string;
  details?: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  count: string;
  skills: { name: string; logo: string }[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  grade: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  file: string;
  group: "internship" | "certification" | "course";
}

export const PROJECTS: Project[] = [
  {
    title: "Python AI Engineer – Autonomous Agents",
    codename: "DocAgent",
    description: "Enterprise autonomous document generation agent that transforms natural language business briefs into publication-ready Microsoft Word deliverables via a 4-phase reasoning lifecycle (Plan -> Execute -> Reflect -> Compile) with interactive FastAPI Web Studio.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Autonomous Agents", "FastAPI", "Gemini API", "Groq", "Pydantic v2", "python-docx"],
    code: "https://github.com/harshrameshnerkar/Python-AI-Engineer-Autonomous-Agents",
    demo: "https://github.com/harshrameshnerkar/Python-AI-Engineer-Autonomous-Agents",
    color: "#e5c158",
    category: "agentic",
    org: "Production Enterprise Agent",
    details: [
      "Dynamic 6-stage TODO execution planner for ambiguous business briefs and conflicting departmental policies.",
      "Self-check reflection audit engine detecting missing SLAs, milestones, and calculating objective quality scores.",
      "Low-level python-docx compiler with corporate navy typography, XML cell shading, borders, and structured tables."
    ]
  },
  {
    title: "CaptionAI Multimodal Studio",
    codename: "CaptoImage v2",
    description: "Bidirectional AI vision platform featuring Text-to-Image diffusion across 8 art styles, Vision-to-Text captioning with TTS audio narration, multimodal concept remixing, and an interactive Model Training Hub.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tags: ["PyTorch", "Vision Transformers", "GPT-2", "Diffusion", "Flask", "gTTS"],
    code: "https://github.com/harshrameshnerkar/Caption-to-Image",
    demo: "https://github.com/harshrameshnerkar/Caption-to-Image",
    color: "#8b5cf6",
    category: "vision",
    org: "Multimodal AI System",
    details: [
      "Bidirectional synthesis: Natural language prompt-to-image diffusion & image-to-multistyle captioning.",
      "Integrated Text-to-Speech (TTS) audio narration for generated captions and alt-text tags.",
      "Visual remix studio with concept steering and background fine-tuning telemetry."
    ]
  },
  {
    title: "Agentic AI Systems (Production SRE)",
    codename: "AgenticSRE",
    description: "Production 20-Day Autonomous SRE & Multi-Agent Architecture featuring autonomous agent swarms, hybrid RAG, circuit breakers, and human-in-the-loop (HITL) safety boundaries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["Multi-Agent", "Python", "asyncio", "Llama 3", "Hybrid RAG", "SRE"],
    code: "https://github.com/harshrameshnerkar/Agentic-AI",
    demo: "https://github.com/harshrameshnerkar/Agentic-AI",
    color: "#4ec9b0",
    category: "agentic",
    org: "Autonomous Systems",
    details: [
      "Autonomous multi-agent swarms with distributed asynchronous task orchestration.",
      "Hybrid dense-sparse vector RAG retrieval with verified hallucination resistance.",
      "Fault-tolerant circuit breakers, retry backoffs, and HITL safety interventions."
    ]
  },
  {
    title: "Indian Sign Language Translator",
    codename: "ISL-AI",
    description: "Real-time ISL gesture-recognition system combining MediaPipe hand tracking with a deep-learning classifier to detect Indian alphabets and numbers and render full words and sentences on-screen.",
    image: "https://images.unsplash.com/photo-1633113093730-47449a1a9c6e?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenCV", "MediaPipe", "PyTorch CNN", "Bilingual TTS"],
    code: "https://github.com/harshrameshnerkar/ISL-Translator",
    demo: "https://github.com/harshrameshnerkar/ISL-Translator",
    color: "#38bdf8",
    category: "vision",
    org: "TARS Technologies · Nagpur",
    details: [
      "Real-time gesture-to-text using MediaPipe 21-point hand landmarker tracking.",
      "Deep CNN classifier detecting 26 ISL alphabets and numbers with >95% accuracy.",
      "Bilingual TTS engine with interactive web dashboard for real-time translation."
    ]
  },
  {
    title: "Universal Text-to-SQL AI Generator",
    codename: "Text2SQL",
    description: "Multi-table relational schema-aware SQL generator powered by Gemini & Groq LLMs with automated execution testing, self-correction, and multi-dialect SQL support.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    tags: ["Gemini API", "Groq", "SQL", "PostgreSQL", "FastAPI"],
    code: "https://github.com/harshrameshnerkar/Text-to-SQL",
    demo: "https://github.com/harshrameshnerkar/Text-to-SQL",
    color: "#f59e0b",
    category: "agentic",
    org: "Enterprise AI Generator",
    details: [
      "Dynamic schema introspection across PostgreSQL, MySQL, and SQLite databases.",
      "Automated query syntax validation and iterative error self-correction.",
      "Multi-turn conversational SQL assistant with interactive result visualizer."
    ]
  },
  {
    title: "Mental Health Wellbeing Companion",
    codename: "MindWell",
    description: "Research-backed AI platform for overthinking, stress, and anxiety — a multi-agent conversational system on Llama 3 with a RAG pipeline over peer-reviewed literature, stored in Neon PostgreSQL.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    tags: ["Streamlit", "Llama 3", "RAG", "PostgreSQL", "Multi-Agent"],
    code: "https://github.com/harshrameshnerkar/Mental-Health-Wellbeing-Chatbot",
    demo: "https://github.com/harshrameshnerkar/Mental-Health-Wellbeing-Chatbot",
    color: "#7c8cff",
    category: "internship",
    org: "Kohli AI.ML · Remote",
    details: [
      "Multi-agent system on Llama 3 — Orchestrator, Coach, Safety & Memory agents.",
      "RAG pipeline over Neon PostgreSQL grounded in validated mental-health literature.",
      "Context-aware, hallucination-resistant responses for sensitive conversations."
    ]
  },
  {
    title: "Safety Helmet Detection",
    codename: "SafetyVision",
    description: "Construction-site safety-compliance system fine-tuning YOLOv8 with CNN/LSTM layers alongside MediaPipe and OpenCV to automatically detect missing safety helmets in real time.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    tags: ["YOLOv8", "OpenCV", "MediaPipe", "Computer Vision"],
    code: "https://github.com/harshrameshnerkar/Helmet-Detection",
    demo: "https://github.com/harshrameshnerkar/Helmet-Detection",
    color: "#e06c9f",
    category: "vision",
    org: "TARS Technologies · Nagpur",
    details: [
      "Fine-tuned YOLOv8 for real-time PPE-compliance monitoring.",
      "MediaPipe + OpenCV pipeline for construction-site footage.",
      "Automatically flags workers missing safety helmets."
    ]
  },
  {
    title: "Gesture Virtual Keyboard",
    description: "Touchless text-input system enabling typing through real-time hand tracking — a gesture-driven virtual keyboard built with computer-vision hand-pose detection.",
    image: "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenCV", "MediaPipe"],
    code: "https://github.com/harshrameshnerkar/Virtual-Air-KeyBoard",
    demo: "https://github.com/harshrameshnerkar/Virtual-Air-KeyBoard",
    color: "#5bb8e8",
    category: "personal"
  },
  {
    title: "WhatsApp Reminder Bot",
    description: "Automation bot that delivers scheduled event notifications over WhatsApp so no commitment is ever missed — built with workflow automation and messaging APIs.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Automation", "N8N", "Twilio"],
    code: "https://github.com/harshrameshnerkar/WhatsApp-Reminder-Bot",
    demo: "https://github.com/harshrameshnerkar/WhatsApp-Reminder-Bot",
    color: "#c9a84c",
    category: "personal"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Agentic AI Engineer Intern",
    company: "HSM Edifice Construction Services · Nagpur / Hybrid",
    period: "Sep 2026 — Present",
    description: "Architecting enterprise-grade Autonomous Multi-Agent Systems with multi-phase lifecycles (dynamic planning, self-reflection, and quality gating). Engineering resilient RAG pipelines and structured reasoning systems using modern LLMs (Gemini, Llama, Groq) with circuit breakers and HITL safety.",
    tags: ["Autonomous Agents", "Gemini API", "Multi-Agent", "FastAPI", "RAG"]
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "Kohli AI.ML · Remote",
    period: "Dec 2025 — Apr 2026",
    description: "Architecting an end-to-end AI-powered Mental Wellbeing application: a multi-agent system on Llama 3 (Orchestrator, Coach, Safety, Memory) with a RAG pipeline over Neon PostgreSQL for context-aware, hallucination-resistant responses grounded in validated mental-health literature.",
    tags: ["Llama 3", "RAG", "PostgreSQL", "Multi-Agent"]
  },
  {
    role: "AI / ML Intern",
    company: "TARS Technologies · On-site, Nagpur",
    period: "May 2025 — Jul 2025",
    description: "Built an Indian Sign Language translator (CNN/RNN/LSTM + OpenCV) for real-time gesture-to-text, a Safety Helmet Detection system fine-tuning YOLOv8 with MediaPipe & OpenCV, a gesture-driven virtual keyboard, and a WhatsApp reminder bot.",
    tags: ["Computer Vision", "YOLOv8", "OpenCV", "MediaPipe"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "01",
    title: "Languages & Databases",
    count: "6 technologies",
    skills: [
      { name: "Python", logo: "/logos/python.svg" },
      { name: "C", logo: "/logos/c.svg" },
      { name: "SQL", logo: "/logos/sql.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "MongoDB", logo: "/logos/mongodb.svg" }
    ]
  },
  {
    id: "02",
    title: "AI / ML Libraries",
    count: "9 technologies",
    skills: [
      { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
      { name: "Keras", logo: "/logos/keras.svg" },
      { name: "PyTorch", logo: "/logos/pytorch.svg" },
      { name: "OpenCV", logo: "/logos/opencv.svg" },
      { name: "MediaPipe", logo: "/logos/mediapipe.svg" },
      { name: "scikit-learn", logo: "/logos/scikitlearn.svg" },
      { name: "Pandas", logo: "/logos/pandas.svg" },
      { name: "NumPy", logo: "/logos/numpy.svg" },
      { name: "Matplotlib", logo: "/logos/matplotlib.svg" }
    ]
  },
  {
    id: "03",
    title: "Tools & Platforms",
    count: "9 technologies",
    skills: [
      { name: "Docker", logo: "/logos/docker.svg" },
      { name: "Git", logo: "/logos/git.svg" },
      { name: "GitHub", logo: "/logos/github.svg" },
      { name: "Power BI", logo: "/logos/powerbi.svg" },
      { name: "Tableau", logo: "/logos/tableau.svg" },
      { name: "N8N", logo: "/logos/n8n.svg" },
      { name: "Excel", logo: "/logos/excel.svg" },
      { name: "Jupyter", logo: "/logos/jupyter.svg" },
      { name: "Canva", logo: "/logos/canva.svg" }
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    period: "2022 — 2026",
    degree: "B.Tech Computer Science & Engineering",
    institution: "S. B. Jain Institute of Technology, Management & Research · Nagpur",
    grade: "CGPA: 8.23"
  },
  {
    period: "2020 — 2022",
    degree: "HSC (12th) General Science",
    institution: "Bhalerao Jr. College of Science · Maharashtra State Board",
    grade: "Percentage: 81.83%"
  },
  {
    period: "2020",
    degree: "SSC (10th) General",
    institution: "Saraswat Public School · Maharashtra State Board",
    grade: "Percentage: 90.00%"
  }
];

export const CERTIFICATES_LIST: Certificate[] = [
  {
    title: "AI / ML Internship Certificate",
    issuer: "TARS Technologies",
    year: "2025",
    file: "/certificates/tars-internship.png",
    group: "internship"
  },
  {
    title: "AI / ML Internship — Completion Letter",
    issuer: "Kohli AI",
    year: "2026",
    file: "/certificates/kohli-ai-completion-letter.pdf",
    group: "internship"
  },
  {
    title: "ML Engineer Internship — Offer Letter",
    issuer: "Kohli AI",
    year: "2025",
    file: "/certificates/kohli-ai-offer-letter.pdf",
    group: "internship"
  },
  {
    title: "Data Science Master — Virtual Internship",
    issuer: "EduSkills",
    year: "2025",
    file: "/certificates/eduskills-ds-master-internship.pdf",
    group: "internship"
  },
  {
    title: "EduSkills Virtual Internship",
    issuer: "EduSkills",
    year: "2025",
    file: "/certificates/eduskills-48743.pdf",
    group: "internship"
  },
  {
    title: "EduSkills Virtual Internship",
    issuer: "EduSkills",
    year: "2025",
    file: "/certificates/eduskills-650412.pdf",
    group: "internship"
  },
  {
    title: "Data Science Internship — Offer Letter",
    issuer: "CodSoft",
    year: "2025",
    file: "/certificates/codesoft-ds-offer-letter.pdf",
    group: "internship"
  },
  {
    title: "Machine Learning — Master Certification",
    issuer: "RapidMiner Academy",
    year: "2025",
    file: "/certificates/rapidminer-ml-master.pdf",
    group: "certification"
  },
  {
    title: "Machine Learning — Professional Certification",
    issuer: "RapidMiner Academy",
    year: "2025",
    file: "/certificates/rapidminer-ml-professional.pdf",
    group: "certification"
  },
  {
    title: "Platform Administration — Master Certification",
    issuer: "RapidMiner Academy",
    year: "2025",
    file: "/certificates/rapidminer-platform-administration.pdf",
    group: "certification"
  }
];

