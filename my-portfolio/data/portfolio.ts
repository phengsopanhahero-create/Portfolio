export const personalInfo = {
  name: "Pheng Sopanha",
  role: "AI Engineer",
  tagline: "Building robust, scalable, and innovative AI solutions",
  email: "phengsopanha.hero@gmail.com",
  phone: "060 271 125",
  github: "https://github.com/phengsopanhahero-create",
  location: "Phnom Penh, Cambodia",
  bio: "An AI Engineer & Data Scientist passionate about building intelligent solutions for real-world problems. Experienced in ML, DL, RAG, LLMs, and web development. Open to collaboration and new opportunities.",
  roles: ["AI Engineer","Data Scientist", "Web Developer"],
};

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "SQL", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "JavaScript", level: 75 },
  ],
  frameworks: [
    { name: "TensorFlow", level: 85 },
    { name: "PyTorch", level: 80 },
    { name: "Scikit-learn", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "React.js", level: 75 },
    { name: "FastAPI", level: 70 },
    { name: "Django", level: 65 },
  ],
  tools: [
    { name: "Git / GitHub", level: 85 },
    { name: "Power BI", level: 75 },
    { name: "VS Code", level: 90 },
    { name: "Jupyter Notebook", level: 85 },
    { name: "Excel", level: 80 },
    { name: "OpenCV", level: 75 },
  ],
  aiml: [
    { name: "LLM Fine-tuning", level: 80 },
    { name: "RAG Systems", level: 75 },
    { name: "Computer Vision", level: 85 },
    { name: "Data Analysis", level: 88 },
    { name: "EDA", level: 88 },
  ],
};

export const techStack = [
  "Python", "PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas",
  "Next.js", "React", "FastAPI", "Django", "SQL", "Power BI",
  "OpenCV", "Transformers", "Unsloth", "Git", "Jupyter",
];

export const projects = [
  {
    id: 1,
    title: "Fine-Tune LLM — Cambodia Financial",
    period: "Dec 2025 – Present",
    description: "Fine-tuned a transformer-based LLM on Cambodian financial documents using Unsloth for faster, memory-efficient training. Evaluated on financial Q&A tasks with prompt tuning and dataset refinement.",
    techs: ["Transformer", "PyTorch", "Unsloth", "Python", "Colab", "NumPy", "Pandas"],
    highlights: [
      "Collected & cleaned Cambodian financial documents, reports, FAQs",
      "Used Unsloth for faster and memory-efficient GPU training",
      "Improved accuracy through prompt tuning and dataset refinement",
    ],
    color: "#3b82f6",
    image: "/certs/imagssslle.png",
    category: "AI/ML",
  },
  {
    id: 2,
    title: "AI Face Skin Analysis & Skincare Recommendation",
    period: "Oct 2025 – Dec 2025",
    description: "Built a real-time system using EfficientNetV2 to classify skin conditions (Acne, Dry, Oily, Spots, Wrinkles) from video and recommend appropriate skincare products.",
    techs: ["TensorFlow", "PyTorch", "EfficientNetV2", "OpenCV", "Next.js", "Django", "FastAPI"],
    highlights: [
      "Achieved 97.76% validation accuracy on skin classification",
      "Real-time face scanning with video stream analysis",
      "Full-stack: Next.js frontend + FastAPI/Django backend",
    ],
    color: "#3b82f6",
    image: "/certs/imagske.png",
    category: ["AI/ML", "Web Development"],
  },
  {
    id: 3,
    title: "Facial Recognition System",
    period: "Sep 2025 – Oct 2025",
    description: "Real-time facial recognition system using CNN with MobileNetV2. Users provide 20 training images and 10 test images, achieving 98.9% real-time accuracy.",
    techs: ["TensorFlow", "MobileNetV2", "Python", "OpenCV", "Jupyter Notebook"],
    highlights: [
      "Achieved 98.9% real-time accuracy",
      "Only 20 images needed for training per user",
      "Real-time inference with OpenCV video capture",
    ],
    color: "#06b6d4",
    image: "/certs/ffffsdf.png",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Loan Prediction — ML",
    period: "Sep 2025",
    description: "Trained and compared multiple ML models to predict loan approval. Selected best-performing model based on accuracy and confusion matrix evaluation.",
    techs: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn", "Seaborn"],
    highlights: [
      "Compared LR, Decision Tree, Random Forest, Gradient Boosting, SVM",
      "Feature engineering and exploratory data analysis (EDA)",
      "Model evaluation with accuracy & confusion matrix",
    ],
    color: "#10b981",
    image: "/certs/imagell.png",
    category: "Data Science",
  },
  {
    id: 5,
    title: "Employee Attrition Prediction",
    period: "Aug 2025 – Sep 2025",
    description: "Analyzed employee attrition patterns and built predictive models to identify at-risk employees using multiple ML algorithms.",
    techs: ["Jupyter Notebook", "Pandas", "Matplotlib", "Scikit-learn", "Python"],
    highlights: [
      "Analyzed dataset for attrition patterns",
      "Built Logistic Regression, Random Forest, Linear Regression models",
      "Fine-tuned and evaluated the best-performing model",
    ],
    color: "#f59e0b",
    image: "/certs/imeeeage.png",
    category: "Data Science",
  },
  {
    id: 6,
    title: "Khmer Supermarket Analysis",
    period: "May 2025 – Jul 2025",
    description: "End-to-end data analytics project with interactive Power BI dashboards to visualize sales trends, top products, and customer behavior.",
    techs: ["Python", "Power BI", "SQL", "Excel"],
    highlights: [
      "Collected and cleaned sales data via SQL & Excel",
      "Built interactive Power BI dashboards",
      "Provided data-driven insights for inventory and marketing",
    ],
    color: "#ec4899",
    image: "/certs/dataa.png",
    category: "Data Science",
  },
  {
    id: 7,
    title: "Frontend Web Monitor Shop",
    period: "Oct 2025 – Nov 2025",
    description: "Built a responsive e-commerce frontend for a monitor shop with reusable components and modern web design practices.",
    techs: ["HTML", "CSS", "React.js", "Next.js"],
    highlights: [
      "Responsive UX/UI for e-commerce",
      "Reusable component architecture",
      "Modern web design patterns",
    ],
    color: "#3b82f6",
    image: "/certs/monit.png",
    category: "Web Development",
  },
  {
    id: 8,
    title: "Frontend Web — Siem Pheng JongPhov",
    period: "Nov 2024 – Apr 2025",
    description: "Collaborated to build a responsive website for Siem Pheng JongPhov using Next.js, contributing UI/UX components and responsive layouts.",
    techs: ["HTML", "CSS", "React.js", "Next.js"],
    highlights: [
      "Responsive layout with Next.js",
      "Built UI/UX components for the team",
      "Collaborative frontend development",
    ],
    color: "#3b82f6",
    image: "/certs/imagesssp.png",
    category: "Web Development",
  },
];

export const experience = [
  {
    role: "Software R&D",
    company: "Freelance",
    period: "Dec 2025 – Current",
    description: "Researched and implemented LLM, RAG, ML, DL, and AI solutions for real-world applications. Built full-stack web applications (frontend & backend), designed REST APIs, integrated databases, and performed data analytics including ETL, data visualization, statistical analysis, and predictive modeling.",

    color: "#3b82f6",
  },
  {
    role: "Volunteer Content Creator",
    company: "Facebook (DSE Page)",
    period: "Oct 2025",
    description: "Managed social media content creation to promote the DSE Facebook page to grow community engagement.",

    color: "#3b82f6",
  },
  {
    role: "Data Entry Specialist",
    company: "Private Team",
    period: "Aug 2025 – Oct 2025",
    description: "Prepared parallel Khmer–English sentence pairs to help ML engineers train bilingual models.",

    color: "#10b981",
  },
];

export const education = [
  {
    degree: "Bachelor of Data Science and Engineering",
    school: "Royal University of Phnom Penh (RUPP)",
    period: "Jan 2025 – Jun 2028",

    color: "#3b82f6",
  },
];

export const certificates = [
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",

    date: "23 Jul 2025",
    image: "/certs/python1-cisco.jpg",
  },
  {
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",

    date: "12 Sep 2025",
    image: "/certs/python2-cisco.jpg",
  },
  {
    name: "Intro to Programming",
    issuer: "Kaggle",

    date: "11 Jul 2025",
    image: "/certs/kaggle-intro-programming.jpg",
  },
  {
    name: "ASEAN Data Science Explorers – SAP Analytics Cloud",
    issuer: "ASEAN Foundation / SAP",

    date: "2025",
    image: "/certs/asean-dse-sap.jpg",
  },
];

export const reference = {
  name: "Mr. Rop Borom",
  position: "Data Engineer at Hattha Bank",
  phone: "+855967718531",
  linkedin: "Rop Borom",
};
