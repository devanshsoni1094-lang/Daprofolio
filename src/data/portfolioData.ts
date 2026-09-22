export interface Metric {
  value: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  primary: string[];
  supporting: string[];
  level: number;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  badges: string[];
  bullets: string[];
  artifacts?: string[];
  note?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  tools: string;
  datasetSize: string;
  description: string;
  githubLink?: string;
  calculatedMetrics: string[];
  breakdowns: string[];
  details: {
    problem: string;
    data: string;
    cleaning: string;
    analysis: string;
    outcome: string;
  };
}

export interface EducationData {
  degree: string;
  institution: string;
  timeline: string;
  honours: string;
  minor: string;
  cgpa: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  grade?: string;
  description: string;
  topics: string[];
  link?: string;
}

export const portfolioData = {
  profile: {
    name: "Devansh Soni",
    title: "Data Analyst · Aspiring Data Scientist",
    tagline: "I turn complex raw data into clear business decisions — leveraging SQL, Excel, Power BI & Python to uncover stories across 50,000+ transactional records.",
    heroEyebrow: "Data Analyst · Aspiring Data Scientist",
    summary: "Data Analyst with internship experience using SQL, Excel, and Power BI to analyze sales and transactional data. Worked with 50K+ sales records, performing data cleaning, SQL analysis, KPI calculations, Pivot Table analysis, and dashboard development. Strong foundation in Python, MySQL, data visualization, and statistics, with a long-term focus on Data Science.",
    youtubeChannel: {
      name: "Hinglish Tech & Data Education",
      subscribers: "Community Educator",
      description: "Creates Hinglish content teaching Python, SQL & Data Science.",
      link: "https://youtube.com/@devanshsoni"
    },
    bio: {
      university: "Vidyalankar Institute of Technology, Mumbai",
      degree: "B.Tech in Electronics and Telecommunication Engineering (2023–2027)",
      cgpa: "7.5 / 10",
      honours: "Next Gen Data Science",
      minor: "Computer Science",
      ambition: "Long-term focus on Data Science and Machine Learning."
    },
    resumePdf: "https://drive.google.com/file/d/11-XEVQAozm7UxUHZtmPK2zBV6e6bNw6C/view?usp=drive_link",
    contact: {
      phone: "+91-7737378928",
      email: "devanshsoni1094@gmail.com",
      linkedin: "https://www.linkedin.com/in/devansh-soni-80b38a289",
      github: "https://github.com/devanshsoni1094-lang",
      instagram: "https://www.instagram.com/devanshsoni1904?stkn=MWw3aXRmcmJlODJuYw==",
      portfolio: "#",
      codecOfferLetter: "https://drive.google.com/file/d/1z58kjIT47YmYDkEb8VLSp2T-FtJQn7tU/view?usp=drive_link",
      codecCertificate: "https://drive.google.com/file/d/1g8f0Xdmi0tIz71tJistjosItQB36Jead/view?usp=drive_link",
    },
  },

  quickStats: [
    { value: "50K+", label: "Sales Rows Analyzed" },
    { value: "2", label: "Industry Internships" },
    { value: "3", label: "Professional Certifications" },
    { value: "7.5", label: "Engineering CGPA" },
  ] as Metric[],

  skillsPillars: [
    { name: "SQL & MySQL", desc: "Complex queries, aggregations, joins, date/time logic on 50K+ row datasets.", path: "#what-i-do" },
    { name: "Power BI & Excel", desc: "Interactive dashboards, DAX measures, Pivot Tables & executive KPI views.", path: "#what-i-do" },
    { name: "Python & Analytics", desc: "Pandas, NumPy, Matplotlib, Seaborn, exploratory data analysis & statistical inference.", path: "#what-i-do" },
  ],

  skills: [
    {
      category: "Programming",
      primary: ["Python"],
      supporting: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      level: 90,
      description: "Data manipulation, arrays, exploratory data analysis, and statistical visualization."
    },
    {
      category: "SQL & Databases",
      primary: ["MySQL"],
      supporting: ["Joins", "Subqueries", "Aggregations", "GROUP BY", "Filtering", "Indexing", "Date & Time Functions"],
      level: 95,
      description: "Complex relational queries, temporal aggregations, subqueries, and database performance indexing."
    },
    {
      category: "BI & Tools",
      primary: ["Power BI", "Excel"],
      supporting: ["DAX", "Data Modeling", "Dashboard Development", "Pivot Tables", "Lookup Functions", "Data Cleaning"],
      level: 92,
      description: "Interactive executive dashboards, custom DAX measures, relational modeling, and advanced spreadsheet analytics."
    },
    {
      category: "Statistics",
      primary: ["Statistical Analysis"],
      supporting: ["Descriptive Statistics", "Probability", "Hypothesis Testing", "Correlation Analysis"],
      level: 88,
      description: "Distribution evaluation, variance estimation, significance testing, and variable correlation."
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "codec",
      role: "Data Analyst Intern",
      company: "Codec Technologies",
      period: "Mar 2026 – Apr 2026",
      badges: ["MySQL", "Excel", "Pivot Tables", "Sales Analysis", "KPIs"],
      bullets: [
        "Analyzed approximately 50K rows of pizza sales data using Excel and MySQL to answer assigned sales and performance questions.",
        "Cleaned and organized raw sales data in Excel and used Pivot Tables to summarize sales performance across product categories and key dimensions.",
        "Wrote MySQL queries using filtering, grouping, aggregations, and date and time functions to analyze transactional sales data.",
        "Built an Excel dashboard to present key sales metrics, trends, and product-level performance."
      ],
      artifacts: ["Offer Letter", "Completion Certificate"]
    },
    {
      id: "imarticus",
      role: "Data Analyst Intern",
      company: "Imarticus Learning",
      period: "Jun 2026 – Jul 2026",
      badges: ["SQL", "Excel", "Power BI", "DAX", "Dashboards"],
      bullets: [
        "Analyzed a Supermarket Sales dataset using SQL, Excel, and Power BI to answer assigned business questions and evaluate sales performance.",
        "Wrote SQL queries to explore transactional sales data and calculate metrics required for the assigned analysis.",
        "Built a Power BI dashboard using interactive visuals and KPIs to present sales performance and trends.",
        "Independently completed the assigned SQL analysis and Power BI dashboard within the internship timeline while working as part of a four-member team."
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "pizza-sales",
      title: "Pizza Sales Performance Analysis",
      tools: "MySQL + Excel",
      datasetSize: "50,000+ Records",
      description: "Comprehensive end-to-end analysis of a 50K+ record pizza sales dataset to derive executive sales metrics and transactional insights.",
      githubLink: "https://github.com/devanshsoni1094-lang/pizza-sales-data-analysis",
      calculatedMetrics: [
        "Total Revenue",
        "Total Orders",
        "Average Order Value (AOV)",
        "Average Pizzas per Order"
      ],
      breakdowns: [
        "Revenue contribution across pizza categories and sizes to evaluate product mix",
        "Daily and hourly order patterns using MySQL date and time functions to identify peak sales volume",
        "Ranked top and bottom 5 pizzas by quantity sold to evaluate product-level performance"
      ],
      details: {
        problem: "Analyze transactional pizza sales data to evaluate revenue metrics, identify sales peaks, and evaluate product-level profitability.",
        data: "50K+ rows of sales records with order dates, times, pizza categories, sizes, prices, and quantities.",
        cleaning: "Cleaned and sanitized raw transactional data in Excel, eliminated redundancies, and verified data integrity.",
        analysis: "Wrote structured MySQL queries leveraging filtering, grouping, date/time functions, and aggregations. Summarized dimensions using Excel Pivot Tables.",
        outcome: "Constructed an interactive Excel dashboard providing key revenue metrics, temporal trends, and top/bottom selling SKU rankings."
      }
    }
  ] as ProjectData[],

  education: {
    degree: "B.Tech in Electronics and Telecommunication Engineering",
    institution: "Vidyalankar Institute of Technology",
    timeline: "2023 – 2027",
    honours: "Next Gen Data Science",
    minor: "Computer Science",
    cgpa: "7.5 / 10"
  } as EducationData,

  certifications: [
    {
      id: "cdac",
      name: "Certificate Course in MySQL & MongoDB",
      issuer: "C-DAC ACTS, Pune",
      year: "2025",
      grade: "Grade B+",
      description: "Completed a comprehensive certificate course covering relational MySQL and NoSQL MongoDB fundamentals through C-DAC Advanced Computing Training School (ACTS), Pune.",
      topics: ["Relational Database Management", "MySQL Joins & Subqueries", "MongoDB Document Model", "Aggregation Framework", "Indexing & Optimization"],
      link: "https://drive.google.com/file/d/1jRu52wbF1g2-KsThFWQfxzkbCPJNlWsr/view?usp=drive_link"
    },
    {
      id: "cisco",
      name: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      description: "Completed the Data Analytics Essentials course from Cisco Networking Academy, building foundational knowledge in data analytics concepts and practices.",
      topics: ["Data Collection & Cleaning", "Exploratory Data Analysis", "Descriptive Statistics", "Data Storytelling & Visualization", "Analytical Ethics"],
      link: "https://drive.google.com/file/d/172EhYLJDq2pCjGigYvzrkJHFv_mWcr7g/view?usp=drive_link"
    },
    {
      id: "infosys",
      name: "Data Science Certificate",
      issuer: "Infosys",
      description: "Completed a Data Science certification from Infosys, developing foundational knowledge of data science concepts and analytical techniques.",
      topics: ["Python for Data Science", "Data Modeling", "Exploratory Data Analysis", "Statistical Thinking", "Machine Learning Foundations"],
      link: "https://drive.google.com/file/d/1jtIFhtNKvlkk5h4uQKO1vCKTP2Rmf3TX/view?usp=drive_link"
    }
  ] as CertificationItem[]
};
