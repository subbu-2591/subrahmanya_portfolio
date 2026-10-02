// ============================================================
// PORTFOLIO DATA — Edit all your personal information here
// ============================================================

export const personal = {
  name: "Subrahmanya Gouda",
  headline: "BCA Graduate | Aspiring IT Professional",
  shortIntro:
    "BCA graduate with hands-on experience in Java, Python, SQL, web development, manual testing and technical troubleshooting. Currently seeking entry-level opportunities in Software Development, QA, Application Support and Technical Support.",
  location: "Bengaluru, Karnataka, India",
  email: "subrahmanyag79@gmail.com",
  phone: "+91-8310798535",
  github: "https://github.com/subbu-2591",
  linkedin: "https://www.linkedin.com/in/subrahmanya-gouda/",
  portfolio: "https://subrahmanya.onrender.com/",
  resumePath: "/resume.pdf",       // Place resume.pdf inside the public/ folder
  resumeAvailable: true,           // ← set to false if you replace the PDF and need to re-upload
  // Profile photo — place your photo as public/profile.jpg
  // To update photo: replace public/profile.jpg with the new image (same filename)
  profilePhoto: "/profile.jpg",
};

export const about = {
  paragraphs: [
    "I am a 2025 BCA graduate with foundational skills in software development, SQL, web technologies and manual testing. I completed my internship at KodNest where I worked on software development and QA-related activities, gaining practical exposure to real-world development processes.",
    "I am looking for an entry-level opportunity in Software Development, QA/Testing, Application Support or Technical Support where I can apply my technical skills, learn from experienced professionals and grow as an IT professional.",
  ],
};

export const skills = [
  {
    category: "Programming",
    icon: "code",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Web",
    icon: "layers",
    items: ["React", "Flask", "REST APIs", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["SQL", "MySQL", "MongoDB", "Microsoft SQL Server"],
  },
  {
    category: "QA & Testing",
    icon: "checkSquare",
    items: [
      "Manual Testing",
      "Test Case Design",
      "Test Scenarios",
      "Regression Testing",
      "Retesting",
      "Smoke Testing",
      "Sanity Testing",
      "Bug Reporting",
      "SDLC",
      "STLC",
    ],
  },
  {
    category: "Tools",
    icon: "tool",
    items: ["Git", "GitHub", "VS Code", "MS Excel", "Linux basics"],
  },
  {
    category: "IT Support",
    icon: "monitor",
    items: [
      "Troubleshooting",
      "Operating Systems",
      "Networking basics",
      "DNS",
      "DHCP",
      "Hardware & Software support",
      "Application Support basics",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "KodNest",
    period: "August 2025 – April 2026",
    points: [
      "Completed a six-month training program in Java & Python Full Stack Development.",
      "Covered Competitive Programming, Web Development, SQL and Testing.",
      "Worked on software development and testing-related activities.",
      "Practiced manual testing, test case creation, test execution and defect identification.",
      "Improved understanding of SDLC, STLC and Agile development practices.",
    ],
    certificate: {
      label: "View Certificate",
      // Certificate is embedded — opens the PDF from the public folder
      // Place the PDF at public/certificates/kodnest-fullstack.pdf
      path: "/kodnest-fullstack.pdf",
      meta: "Full Stack Development · Issued April 21, 2026 · ID: dccdce04-827d-4b4b-a85a-62af1d821303",
    },
  },
];

export const projects = [
  {
    name: "EasyDoc – Online Doctor Video Consultation System",
    description:
      "A full-stack web application that enables doctor-patient consultations through chat and video communication, with appointment scheduling and document management.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Flask", "MongoDB", "REST APIs", "Agora API"],
    features: [
      "Doctor-patient video consultation",
      "Chat functionality",
      "Email OTP verification",
      "Document upload",
      "Appointment scheduling",
      "Feedback functionality",
    ],
    github: "https://github.com/subbu-2591/Doceasy_new",
    // No live demo link — do not add a fake one
    demo: null,
  },
  {
    name: "Manual Testing – E-Commerce Project",
    description:
      "A structured manual testing project covering test scenarios, test cases, functional testing, regression testing and defect reporting for an e-commerce application.",
    tech: [
      "Manual Testing",
      "Test Case Writing",
      "Test Scenarios",
      "Regression Testing",
      "Bug Reporting",
      "SDLC",
      "STLC",
    ],
    features: [
      "Test scenario creation",
      "Detailed test case documentation",
      "Functional & regression testing",
      "Smoke & sanity testing",
      "Bug reporting & tracking",
    ],
    github: "https://github.com/subbu-2591/manual-testing-ecommerce-project",
    demo: null,
  },
  {
    name: "Online Shopping System",
    description:
      "An online shopping web application demonstrating basic e-commerce functionality including product listing and cart management.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Product listing",
      "Shopping cart functionality",
      "Basic e-commerce flow",
      "Responsive UI",
    ],
    github: "https://github.com/subbu-2591/online-shopping-system-master",
    demo: null,
  },
  {
    name: "Swiggy Restaurant Data Analysis Using SQL",
    description:
      "SQL-based analysis of 148K+ Swiggy restaurant records to identify restaurant distribution, popular cuisines, chain presence, rating patterns and cuisine-level performance.",
    tech: ["SQL", "SQLite", "DB Browser for SQLite"],
    features: [
      "Restaurant distribution analysis",
      "Popular cuisines identification",
      "Restaurant chain presence",
      "Rating patterns analysis",
      "Cuisine-level performance",
    ],
    dataset: "148K+ restaurant records",
    github: "https://github.com/subbu-2591/swiggy-sql-analysis",
    demo: null,
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "SES Shivaji Arts and Commerce College, Baad, Karwar",
    year: "2025",
    score: "CGPA: 7.74",
  },
  {
    degree: "12th – PUC",
    institution: "Govt Mini PU College Kolagibees, Sirsi Taluk, Uttara Kannada District",
    year: "2022",
    score: "78.2%",
  },
  {
    degree: "10th – SSLC",
    institution: "Sri Gajanana High School, Sampkhand, Tal-Sirsi, Uttara Kannada District",
    year: "2020",
    score: "78.7%",
  },
];

export const careerInterests = [
  "Software Development",
  "Java Development",
  "QA / Manual Testing",
  "Application Support",
  "Technical Support",
  "IT Support",
  "Service Desk",
  "Production Support",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Interests", href: "#interests" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// CERTIFICATIONS
// ============================================================
export const certifications = [
  {
    name: "Full Stack Development",
    issuer: "KodNest",
    date: "April 2026",
    type: "Course Certificate",
    linkLabel: "View Certificate",
    // Certificate PDF stored locally in public/certificates/
    link: "/kodnest-fullstack.pdf",
    local: true, // opens from public folder, not external URL
  },
  {
    name: "Data Analyst Job Simulation",
    issuer: "OneRoadmap",
    date: null,
    type: null,
    linkLabel: "Verify Certificate",
    link: "https://www.oneroadmap.io/verify/ORA-DA-RGWWH5",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "August 2025",
    type: "Virtual",
    linkLabel: "View Certificate",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_FjNdTphmChGRRvu9t_1754584342102_completion_certificate.pdf",
  },
  {
    name: "Certified Generative AI Professional",
    issuer: "Oracle Cloud Infrastructure",
    date: "September 2025",
    type: "Virtual",
    linkLabel: "View Badge",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge_m?id=0B0AA2860D5EB684CB8E5350D8A33A68229041DC9B29F49C1B16C70FAFF983A8",
  },
  {
    name: "Cyber Job Simulation",
    issuer: "Deloitte Australia",
    date: "December 2025",
    type: "Virtual",
    linkLabel: "View Certificate",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_FjNdTphmChGRRvu9t_1765540540046_completion_certificate.pdf",
  },
  {
    name: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata",
    date: "December 2025",
    type: "Virtual",
    linkLabel: "View Certificate",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_FjNdTphmChGRRvu9t_1765545771686_completion_certificate.pdf",
  },
];
