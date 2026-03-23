export const profile = {
  name: "Thirunaavukkarasu Murugesan",
  shortName: "Thirunaavukkarasu",
  title: "Delivery Engineering Manager",
  subtitle: "Helping frontier LLM models write better code and ship faster",
  location: "Texas, United States",
  email: "thirunaavukkarasu.m@gmail.com",
  bio: `I'm a Delivery Engineering Manager working at the intersection of LLM evaluation, RLHF, and delivery engineering. Over the last few years, I've helped frontier AI labs and large enterprises take models from "promising research" to production-ready systems by designing human-in-the-loop workflows, code benchmarks, and automation that actually scale.

Today, my focus is on code-focused LLMs: I lead evaluation and training workflows on industry-standard evaluation suites, benchmarking for evaluating large language models on real-world software issues, Agentic Code IDE Trajectories, and RLHF pipelines for web apps. I've coordinated 100–150+ trainer teams across time zones, built SxS and golden-test-driven benchmarks, and shipped dashboards that track pass rates, AHT, throughput, and quality across multiple programming languages. This work has contributed to 25–30%+ gains in model pass rates and coding accuracy for frontier models in real-world SWE tasks.

On the engineering side, I'm comfortable across the stack: Python, JavaScript/TypeScript, React, Node.js, SQL, AWS, GCP. I can spin up Dockerized environments, debug infra issues, and get things running end-to-end. Built and worked on ML systems and evaluation pipelines at scale. Also spend time building agents and tooling that actually interact with real environments.

I thrive in roles where I can bridge research, engineering, and operations — designing evaluation frameworks, shipping internal tools, and guiding teams to produce clean data and trustworthy model behavior.

What differentiates my work is operating at the intersection of engineering, product thinking, and customer impact. I regularly work in ambiguous, high-stakes environments where the problem is not just "build a system", but:
- Understand what data is actually needed to improve models
- Design scalable human data pipelines to generate that signal
- Iterate quickly with tight feedback loops
- Deliver outcomes that align with both research goals and real-world use cases

This means acting less like a traditional engineer and more like a technical partner embedded with AI teams — owning problems end-to-end and driving execution with a bias for speed.`,
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Trainers Managed", value: "150+" },
    { label: "Frontier LLM Models", value: "4" },
    { label: "Students Mentored", value: "25+" },
  ],
  socials: {
    github: "https://github.com/Thirunaa",
    linkedin: "https://www.linkedin.com/in/thirunaavukkarasu/",
    leetcode: "https://leetcode.com/Thiru_Mv/",
    twitter: "https://x.com/ThiruMv_",
    youtube: "https://www.youtube.com/@hashmap01",
    scholar: "https://scholar.google.com/citations?user=EZfwvwwAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Thirunaavukkarasu-Murugesan",
  },
};

export const experience = [
  {
    role: "Delivery Engineering Manager",
    company: "Turing",
    period: "Jun 2024 – Present",
    location: "United States (Remote)",
    description: [
      "Designed and implemented structured benchmarking frameworks, including multi-turn agent evaluations and 3x replication validation strategies.",
      "Operationalized RLHF pipelines and reward modeling workflows to improve model reliability and regression detection.",
      "Developed AHT forecasting models and performance dashboards to optimize throughput while maintaining strict quality thresholds.",
      "Managed time-and-material engagements with SLA alignment, delivery tracking, and cross-stakeholder communication.",
      "Established root-cause analysis systems to detect hallucinations, quality drift, and benchmark overfitting.",
      "Led crisis-delivery initiatives under compressed timelines, ensuring on-time milestone completion without quality degradation.",
    ],
    tags: ["LLM Evaluation", "RLHF", "Benchmarking", "Program Management", "AI Delivery", "SLA"],
  },
  {
    role: "Software Engineer – LLM Training",
    company: "GCOM Information Technology Inc. (Turing client)",
    period: "Aug 2023 – Jun 2024",
    location: "United States (Remote)",
    description: [
      "Developed structured datasets for training large language models in programming and reasoning tasks.",
      "Designed prompt structures and evaluation frameworks for assessing model output quality.",
      "Contributed to large-scale human-in-the-loop training workflows used to improve model performance.",
      "Participated in quality assurance processes to verify dataset correctness and consistency.",
      "Collaborated with distributed teams to ensure delivery of high-quality training data for frontier AI models.",
    ],
    tags: ["Python", "Prompt Engineering", "LLM Training", "HITL", "Dataset Generation"],
  },
  {
    role: "Senior Software Development Engineer",
    company: "HTC Global Services",
    period: "Feb 2017 – Jul 2021",
    location: "Chennai, India",
    description: [
      "Built and maintained backend services for large-scale tax applications processing millions of records stored in DB2 databases.",
      "Developed enterprise applications using Java Spring Boot, JPA, COBOL, PL/I, and IBM mainframe systems.",
      "Designed automation scripts in Python to reduce manual operational tasks and improve reporting workflows.",
      "Led modernization initiatives migrating legacy mainframe workloads to AWS cloud infrastructure.",
      "Migrated large-scale DB2 datasets to cloud systems using AWS Database Migration Service.",
      "Developed full-stack monitoring dashboards using Node.js, Express, React, and PostgreSQL to visualize operational metrics.",
    ],
    tags: ["Java", "Spring Boot", "DB2", "COBOL", "AWS", "Node.js", "React", "PostgreSQL"],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stevens Institute of Technology",
    period: "Aug 2021 – May 2023",
    location: "Hoboken, NJ",
    credentialId: "232U-ZIVV-TQNP",
    credentialUrl: "https://cediploma.stevens.edu/validation",
    details: [
      "Courses: Web Development I & II, Applied Machine Learning, Deep Learning, Big Data Technologies, Web Mining, Algorithms",
      "Teaching Assistant — Applied Machine Learning (Prof. Shucheng Yu)",
      "Teaching Assistant — Web Mining (Prof. Jingyi Sun)",
      "Research Assistant — Social Media Analytics & COVID-19 CSR Study",
    ],
  },
  {
    degree: "Post Graduate Program in Machine Learning",
    institution: "Great Lakes Institute of Management",
    period: "2018 – 2019",
    location: "Chennai, India",
    credentialId: null,
    credentialUrl: null,
    details: [
      "Intensive PGP-ML-Online program covering supervised and unsupervised learning, deep learning, NLP, and model deployment.",
      "Successfully completed and awarded certificate by the Great Learning team.",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Anna University",
    period: "Aug 2012 – May 2016",
    location: "Tamil Nadu, India",
    credentialId: null,
    credentialUrl: null,
    details: [
      "Major: Computer Science and Engineering",
      "Member of Computer Society of India",
      "Active member of CII – Young Indians (Trichy Chapter)",
      "College football team — state tournament representative",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issued: "Jun 2023",
    expires: "Jun 2026",
    credentialUrl: "https://www.credly.com/badges/8c03547a-cb1a-48c8-9512-039cd4899e48/linked_in_profile",
  },
  {
    title: "Master of Science in Computer Science",
    issuer: "Stevens Institute of Technology",
    issued: "May 2023",
    expires: null,
    credentialId: "232U-ZIVV-TQNP",
    credentialUrl: "https://cediploma.stevens.edu/validation",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: "LLM & AI Systems",
    items: ["RLHF", "Reward Modeling", "Benchmark Evaluation", "Agent-Based Workflows", "Prompt Engineering", "HITL Systems"],
  },
  {
    category: "Web & Full Stack",
    items: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Infrastructure & Tools",
    items: ["Docker", "AWS", "GCP", "GitHub", "LiteLLM Proxy", "Google Sheets Automation"],
  },
  {
    category: "AI Program Management",
    items: ["LLM Evaluation", "Delivery Operations", "SLA Management", "Performance Dashboards", "Quality Metrics", "AHT Forecasting"],
  },
];

export const research = [
  {
    title: "Enhancing SWE-Bench with Context Engineering: A Comparative Study Against Prompt Engineering in LLM-Based Software Tasks",
    venue: "ResearchGate",
    year: "2024",
    role: "Author",
    coauthors: ["Thirunaavukkarasu Murugesan"],
    abstract:
      "A comparative study examining how context engineering techniques improve LLM performance on SWE-Bench — a benchmark for evaluating models on real-world software engineering tasks — versus conventional prompt engineering approaches.",
    tags: ["LLM Evaluation", "SWE-Bench", "Context Engineering", "Prompt Engineering", "Software Engineering"],
    link: "https://www.researchgate.net/publication/399643171_Enhancing_SWE_Bench_with_Context_Engineering_A_Comparative_Study_Against_Prompt_Engineering_in_LLM-Based_Software_Tasks",
  },
  {
    title: "The Structural Challenge: Why Language Models Fail with Tabular Data",
    venue: "ResearchGate",
    year: "2024",
    role: "Author",
    coauthors: ["Thirunaavukkarasu Murugesan"],
    abstract:
      "An investigation into the structural limitations of large language models when processing and reasoning over tabular data, identifying key failure modes and proposing directions to improve tabular data comprehension.",
    tags: ["LLM", "Tabular Data", "Structured Data", "Failure Analysis", "NLP"],
    link: "https://www.researchgate.net/publication/400359422_The_Structural_Challenge_Why_Language_Models_Fail_with_Tabular_Data",
  },
  {
    title: "AI-Enabled Geospatial Intelligence for the Energy Transition: A Comparative CNN Study on CCUS, Geothermal Siting, and NetZero Strategies",
    venue: "Journal Pre-proof · ResearchGate",
    year: "2024",
    role: "Author",
    coauthors: ["Thirunaavukkarasu Murugesan", "et al."],
    abstract:
      "A comparative convolutional neural network study applying geospatial AI to critical energy transition challenges — including Carbon Capture, Utilisation and Storage (CCUS) site selection, geothermal siting, and net-zero strategy evaluation.",
    tags: ["AI", "CNN", "Geospatial Intelligence", "Energy Transition", "CCUS", "Net Zero"],
    link: "https://www.researchgate.net/publication/402545682_Journal_Pre-proof_AI_Enabled_Geospatial_Intelligence_for_the_Energy_Transition_A_Comparative_CNN_Study_on_CCUS_Geothermal_Siting_and_NetZero_Strategies_AI_Enabled_Geospatial_Intelligence_for_the_Energ",
  },
  {
    title: "US Fortune 500 Stakeholder Engagement During COVID-19",
    venue: "Industrial Marketing Management · Elsevier",
    year: "2022",
    role: "Research Assistant",
    roleNote: "Contributed as Research Assistant under Prof. Jingyi Sun (Stevens Institute of Technology). Not listed as a primary author.",
    coauthors: ["Prof. Jingyi Sun (Lead Author)", "et al."],
    abstract:
      "Examined how U.S. Fortune 500 companies discussed COVID-19 CSR actions on Facebook, Twitter, and other platforms over 15 months of data, and how the public responded to such messages. Published in Industrial Marketing Management (Elsevier).",
    tags: ["Social Media Mining", "NLP", "COVID-19", "CSR", "Fortune 500"],
    link: "https://www.sciencedirect.com/science/article/pii/S0363811122000856",
  },
];

export const achievements = [
  {
    title: "Sigma Xi — Full Member Election",
    issuer: "Sigma Xi, The Scientific Research Honor Society",
    year: "2026",
    description:
      "Elected Full Member (Member ID: 20269990617) by the Committee on Qualifications and Membership. Sigma Xi is the world's largest multidisciplinary research honor society with over 200 Nobel laureates among its members.",
    verifiable: true,
    verifyNote: "Member ID: 20269990617",
  },
  {
    title: "Hackathon Raptors Distinguished Fellowship",
    issuer: "Hackathon Raptors (raptors.dev)",
    year: "2026",
    description:
      "Recognised as a Distinguished Expert (Fellowship #14091) with confirmed contributions to the advancement and innovation of technology. Certificate signed February 23, 2026.",
    verifiable: true,
    verifyNote: "Fellowship #14091",
  },
  {
    title: "Canada Copyright — IoT & AI Asset Tracking System",
    issuer: "Canadian Intellectual Property Office (CIPO)",
    year: "2025",
    description:
      "Registered copyright for 'IoT and AI-Based Real-Time Asset Tracking and Portfolio Management System' with CIPO. Covers an integrated AI-IoT system bridging physical and financial asset intelligence.",
    verifiable: true,
    verifyNote: "File Number: 1238858",
    credentialUrl: "https://www.ic.gc.ca/app/opic-cipo/cpyrghts/dtls.do?fileNum=1238858&type=1",
  },
  {
    title: "25–30%+ Model Pass Rate Gains on Frontier LLMs",
    issuer: "Turing",
    year: "2024–Present",
    description:
      "Led evaluation and RLHF training workflows that contributed to 25–30%+ gains in model pass rates and coding accuracy for frontier AI models on real-world software engineering tasks (SWE-Bench).",
  },
  {
    title: "Managed 100–150+ Cross-Timezone Trainer Teams",
    issuer: "Turing",
    year: "2024–Present",
    description:
      "Coordinated large distributed trainer teams across time zones for multiple frontier AI clients, maintaining SLA compliance, quality thresholds, and on-time milestone delivery.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2023",
    description:
      "Certified Cloud Practitioner — issued June 2023, valid through June 2026. Validates foundational cloud knowledge across AWS core services, security, architecture, and pricing.",
    verifiable: true,
    credentialUrl: "https://www.credly.com/badges/8c03547a-cb1a-48c8-9512-039cd4899e48/linked_in_profile",
  },
  {
    title: "Graduate Teaching Assistantship × 2 (Concurrent)",
    issuer: "Stevens Institute of Technology",
    year: "2022–2023",
    description:
      "Selected as Teaching Assistant concurrently for two graduate courses: Applied Machine Learning (Prof. Shucheng Yu) and Web Mining (Prof. Jingyi Sun). Mentored 25+ graduate students.",
  },
  {
    title: "Hashmap — 75+ Hours of DSA Content Published",
    issuer: "Self-built (YouTube + GitHub)",
    year: "2022–2023",
    description:
      "Built and published a DSA preparation platform with structured walkthroughs for 90+ LeetCode problems and 75+ hours of instructional video content to help engineers crack top-company interviews.",
    credentialUrl: "https://www.youtube.com/@hashmap01",
  },
  {
    title: "Published Research in Elsevier Industrial Marketing Management",
    issuer: "Elsevier / Industrial Marketing Management",
    year: "2022",
    description:
      "Contributed as Research Assistant to a peer-reviewed paper on US Fortune 500 CSR engagement during COVID-19, published in Industrial Marketing Management — an Elsevier journal with impact factor 10.5.",
    verifiable: true,
    credentialUrl: "https://www.sciencedirect.com/science/article/pii/S0363811122000856",
  },
  {
    title: "Enterprise Mainframe-to-AWS Cloud Migration",
    issuer: "HTC Global Services",
    year: "2020",
    description:
      "Led modernization of data-intensive legacy mainframe applications (COBOL/DB2) to AWS cloud infrastructure using AWS Database Migration Service, impacting enterprise-scale government tax reporting systems.",
  },
];

export const media = [
  {
    title: "When AI Grows Up, Engineering and Education Matter More Than Benchmarks",
    outlet: "Business News Ledger",
    author: "Rachel Knox",
    date: "Feb 18, 2026",
    type: "article",
    link: "https://businessnewsledger.com/when-ai-grows-up-engineering-and-education-matter-more-than-benchmarks/",
    summary: "Feature profile covering Thirunaavukkarasu Murugesan's work on AI evaluation, reliability engineering, and his advocacy for technical education — arguing that real-world behavior and systematic evaluation matter more than headline benchmark scores.",
  },
];

export const blogs = [
  {
    title: "Support Vector Machine (SVM): A Simple Non-Linear Classifier",
    platform: "Medium",
    date: "2021",
    link: "https://medium.com/@thiru_73177/support-vector-machine-svm-a-simple-non-linear-classifier-9b7e079f5d1",
    summary: "A beginner-friendly deep dive into Support Vector Machines — covering kernel tricks, the margin maximization objective, and how SVMs elegantly handle non-linearly separable data in higher-dimensional spaces.",
  },
  {
    title: "Event Loops in Node.js: A Deep Dive into libuv, Thread Pool and Event Instances",
    platform: "Medium",
    date: "2021",
    link: "https://medium.com/@thiru_73177/event-loops-in-node-js-a-deep-dive-into-libuv-thread-pool-and-event-instances-4054d9c6fde8",
    summary: "An in-depth exploration of Node.js internals — how the event loop works under the hood, the role of libuv's thread pool, and the full lifecycle of asynchronous I/O operations and callbacks.",
  },
];

export const memberships = [
  {
    org: "Sigma Xi — The Scientific Research Honor Society",
    role: "Full Member",
    since: "2026",
    description:
      "Elected Full Member (Member ID: 20269990617) by the Committee on Qualifications and Membership. Sigma Xi is the world's largest general research honor society — an international, multidisciplinary organisation for research scientists and engineers. Over its history, more than 200 members have won the Nobel Prize.",
    badge: "Sigma Xi",
  },
  {
    org: "Hackathon Raptors (raptors.dev)",
    role: "Fellow",
    since: "2026",
    description:
      "Recognised as a distinguished expert (Fellowship #14091) with confirmed contributions to the advancement and innovation of technology within the Hackathon Raptors community's mission. Certificate signed February 23, 2026.",
    badge: "Fellowship",
  },
  {
    org: "S30 — Interview Prep Community",
    role: "Volunteer DSA Interviewer",
    since: "2022",
    description:
      "Volunteer as a Data Structures & Algorithms mock interviewer, mentoring and training software engineers preparing for technical interviews at top companies.",
  },
  {
    org: "Computer Society of India",
    role: "Member",
    since: "2012",
    description: "Active member during undergraduate studies at Anna University.",
  },
  {
    org: "CII — Young Indians (Trichy Chapter)",
    role: "Active Member",
    since: "2012",
    description:
      "Participated in awareness rallies on Child Labour and its societal impact.",
  },
];

export const judging = [];

export const peerReviews = [
  {
    conference: "2nd International Conference on Distributed Systems, Computer Networks and Cybersecurity (ICDSCNC-2026)",
    date: "Aug 27, 2026",
    location: "Bengaluru, India",
    link: "https://icdscnc.co.in/index.php",
  },
  {
    conference: "2nd International Conference on Ambient Intelligence, Knowledge Informatics and Industrial Electronics (AIKIIE)",
    date: "Aug 6, 2026",
    location: "Ballari, India",
    link: "https://aikiie.in/",
  },
  {
    conference: "Second International Conference on Advances in Computer Science, Electrical, Electronics, and Communication Technologies",
    date: "Jul 2, 2026",
    location: "Bhimtal, Nainital, Uttarakhand, India",
    link: "https://ce2ct.gehu.ac.in/",
  },
  {
    conference: "1st International Conference on Global Symposium on Emerging and Communication Technologies (GSEACT 2026)",
    date: "Jun 11, 2026",
    location: "Hyderabad, India",
    link: "https://gseact.com/",
  },
  {
    conference: "Second International Conference on Artificial Intelligence, Computation, Communication and Network Security",
    date: "Apr 28, 2026",
    location: "Dubai, United Arab Emirates",
    link: "https://aiccons.com/",
  },
  {
    conference: "5th International Conference on Recent Advances in Electrical, Electronics, Ubiquitous Communication, and Computational Intelligence",
    date: "Apr 22, 2026",
    location: "Chennai, India",
    link: "https://www.srmist.edu.in/events/raeeucci-2026/",
  },
  {
    conference: "2nd International Conference on Communication and Signal Processing",
    date: "Mar 27, 2026",
    location: "Ballari, India",
    link: "https://comsigpro.co.in/index.php",
  },
  {
    conference: "IEEE International Conference on AI Engineering and Innovation",
    date: "Mar 25, 2026",
    location: "Jamshedpur, India",
    link: "https://www.aiengineering-conference.org/",
  },
  {
    conference: "International Conference on Innovative Practices in Technology and Management (2026)",
    date: "Feb 19, 2026",
    location: "Noida, India",
    link: "https://amity.edu/iciptm2026/",
  },
  {
    conference: "3rd International Conference on Integrated Intelligence and Communication Systems (ICIICS-2026)",
    date: "Feb 20, 2026",
    location: "Kalaburagi, India",
    link: "https://iciics.in/index.php",
  },
  {
    conference: "IEEE Contemporary Computing Innovations Conference 2026",
    date: "Feb 6, 2026",
    location: "Tirupati, India",
    link: "https://sites.google.com/view/ccic2026",
  },
  {
    conference: "National Conference on Emerging Technology in Computer Applications",
    date: "Feb 2, 2026",
    location: "Ghaziabad, India",
    link: "https://ncetca2026.abesit.in/",
  },
];

export const workingOn = {
  reading: [
    {
      title: "AutoResearch — Automated Scientific Discovery",
      type: "GitHub / Research",
      author: "Andrej Karpathy",
      note: "Exploring Karpathy's autoresearch framework for automated scientific discovery using LLMs — particularly how it handles hypothesis generation, experiment design, and result synthesis.",
      link: "https://github.com/karpathy/autoresearch/blob/master/README.md",
      logoType: "github",
    },
    {
      title: "NVIDIA NeMo Claw — How It Works",
      type: "Documentation",
      author: "NVIDIA",
      note: "Diving into NVIDIA's NeMo Claw architecture and its approach to LLM customization, retrieval-augmented fine-tuning, and inference optimization at scale.",
      link: "https://docs.nvidia.com/nemoclaw/latest/about/how-it-works.html",
      logoType: "nvidia",
    },
    {
      title: "Claude Certified Architect Foundations",
      type: "Course / Certification",
      author: "Anthropic",
      note: "Working through Anthropic's official certification program covering Claude's architecture, system prompt design, tool use, and responsible deployment patterns.",
      link: "https://anthropic.skilljar.com/claude-certified-architect-foundations-access-request",
      logoType: "anthropic",
    },
    {
      title: "Measuring the Performance of Our Models on Real-World Tasks",
      type: "Research / Blog",
      author: "OpenAI",
      note: "OpenAI's approach to evaluating model capabilities on real-world tasks via GDPVal — a benchmark grounded in economically meaningful work rather than synthetic benchmarks.",
      link: "https://openai.com/index/gdpval/",
      logoType: "openai",
    },
    {
      title: "arXiv:2603.13594 — ServiceNow Research Paper",
      type: "Research Paper",
      author: "ServiceNow Research",
      note: "A recent ServiceNow research paper on AI systems and enterprise automation, exploring LLM capabilities in structured, real-world workflow environments.",
      link: "https://arxiv.org/pdf/2603.13594",
      logoType: "servicenow",
    },
  ],
  building: [
    {
      title: "LLM as a Judge v2.0",
      description: "A second iteration of the LLM-as-a-judge evaluation framework — improving reliability, calibration, and multi-dimensional scoring for model output assessment in RLHF pipelines.",
      status: "In Progress",
      tags: ["LLM Evaluation", "Python", "RLHF"],
      link: "https://github.com/Thirunaa/llm-as-a-judge-version-2.0",
      logoType: "judge",
    },
    {
      title: "Claude API Tutorial Series",
      description: "Building a video series demonstrating Claude API capabilities, prompt engineering patterns, agentic workflows, and tool use — aimed at developers new to the Anthropic ecosystem.",
      status: "In Progress",
      tags: ["Claude API", "Education", "Anthropic"],
      link: "https://youtu.be/-iEzrQ6em-U",
      logoType: "anthropic",
    },
    {
      title: "Wolverine Claws",
      description: "An autonomous code repair agent — self-healing Python scripts that detect runtime errors, feed them to an LLM, and apply generated fixes automatically in a feedback loop.",
      status: "In Progress",
      tags: ["Python", "LLM Agents", "Auto-repair"],
      link: "https://github.com/Thirunaa/wolverine-claws",
      logoType: "claw",
    },
  ],
};

export const copyrights = [
  {
    title: "System for Autonomous Detection and Mitigation of Prompt Injection Attacks in Large Language Models",
    type: "Patent (Pending)",
    country: "United States",
    office: "United States Patent and Trademark Office (USPTO)",
    fileNumber: "19/465,180",
    patentCenterNo: "74221440",
    docket: "LXG_8698",
    filedDate: "Jan 28, 2026",
    status: "Pending",
    author: "Thirunaavukkarasu Murugesan",
    abstract: "A computer-implemented system for autonomously detecting and mitigating prompt injection attacks in large language models. The system uses a hierarchical authority model for source attribution, semantic intent inference, and real-time adversarial risk scoring. Executes proportional mitigation actions including prompt sanitization, runtime constraint enforcement, and adaptive policy evolution — providing layered, runtime-enforced LLM security.",
    link: null,
  },
  {
    title: "Agentic AI System for Intelligent Malware Detection",
    type: "Patent (Pending)",
    country: "United States",
    office: "United States Patent and Trademark Office (USPTO)",
    fileNumber: "19/437,433",
    patentCenterNo: "73784718",
    docket: "LXG_8613",
    filedDate: "Dec 30, 2025",
    status: "Pending",
    author: "Thirunaavukkarasu Murugesan",
    abstract: "An agentic artificial intelligence system employing a multi-agent architecture for real-time detection, analysis, and remediation of malicious software threats. Comprises a master orchestration agent coordinating specialized endpoint monitoring, static/dynamic analysis, behavioral analysis, threat intelligence, classification, and remediation agents — with a consensus validation framework requiring 75%+ agreement across classification agents before threat confirmation.",
    link: null,
  },
  {
    title: "IoT and AI-Based Real-Time Asset Tracking and Portfolio Management System",
    type: "Copyright",
    country: "Canada",
    office: "Canadian Intellectual Property Office (CIPO)",
    fileNumber: "1238858",
    filedDate: "2025",
    status: "Registered",
    author: "Thirunaavukkarasu Murugesan",
    abstract: "An IoT and AI-based real-time asset tracking and portfolio management system designed to monitor, analyze, and optimize both physical and financial assets in an integrated manner. The system employs IoT-enabled sensors and AI-driven analytics modules to generate insights regarding performance, depreciation, utilization, and risk — bridging physical asset intelligence with financial portfolio analytics under a unified cloud-based architecture.",
    link: "https://www.ic.gc.ca/app/opic-cipo/cpyrghts/dtls.do?fileNum=1238858&type=1",
  },
];

export const portfolio = [
  {
    title: "Hashmap — DSA Prep Platform",
    description:
      "Personal educational platform with structured walkthroughs for 90+ critical DSA problems and 75+ hours of instructional video content. Designed to help engineers prepare for interviews at top tech companies.",
    tags: ["React", "JavaScript", "Education"],
    github: "https://github.com/Thirunaa/dsawebsite",
    demo: "https://thirunaa.github.io/dsawebsite/",
    image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220507102444/How-to-Start-Leaning-DSA.jpg",
  },
  {
    title: "Ticketify",
    description:
      "One-stop ticket booking web app built on the Ticketmaster API. Users can browse and book tickets for events, venues, and attractions.",
    tags: ["React", "JavaScript", "API Integration"],
    github: "https://github.com/Thirunaa/ticketify",
    demo: "https://thirunaa.github.io/ticketify/",
    image: "https://cdn.slidesharecdn.com/ss_thumbnails/ticketmasterataglance-170828215112-thumbnail.jpg?width=640&height=640&fit=bounds",
  },
  {
    title: "Employee Retention Analysis",
    description:
      "ML-based analysis of employee tenure and retention using Random Forest, achieving 84% accuracy. Identifies key drivers of employee churn.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://www.kaggle.com/code/thirunaavukkarasu/random-forest-84-accuracy/notebook",
    demo: "https://www.kaggle.com/code/thirunaavukkarasu/random-forest-84-accuracy/notebook",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg",
  },
];

export const recommendations = [
  {
    name: "Jingyi Sun",
    title: "Assistant Professor",
    company: "Stevens Institute of Technology",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQFg2cIcYoKIAA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1631366384782?e=1775692800&v=beta&t=-KgkAvnIytUh6MG6IBN7qoiW2I0z2qHVm7n31CnBJ4c",
    text: "Thiru has been my RA for summer research and TA for the web mining class for two semesters. I am very impressed by his technical skills and working ethics. He did a fantastic job with both roles. He has excellent knowledge and skills of data analytics. Most importantly, Thiru is a reliable and responsible co-worker.",
  },
  {
    name: "Gopi",
    title: "Associate Principal Specialist",
    company: "Temenos",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFxbeFvxl78kA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1711428564700?e=1775692800&v=beta&t=XxVDdUbb_hKpyJAH9hVAjixEwdpueDR7bXWBL9B4Qwg",
    text: "A person to trust with knowledge we can rely on. One of the fastest logical problem-solving experts I came across. Best wishes for your future.",
  },
  {
    name: "Karthikeyan",
    title: "Delivery Manager",
    company: "HTC Global Services",
    avatar: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    text: "I know Thirunaavukkarasu for the last 3 years. He is willing to work on emerging technologies and ready to take on any challenging task. Very good at logical thinking.",
  },
  {
    name: "Jaani Francis",
    title: "Technical Product Owner",
    company: "Jetstar Asia Airways",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQH7w9i66MYk9Q/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720099561612?e=1775692800&v=beta&t=GuZ4le8B1mIpW6ykTTFZsygz7IWrje6VsJTRdF5CYv4",
    text: "Thirunaavukkarasu is a self-motivated and hard-working person. Fresh out of college, he showed a lot of interest in learning new tech stacks. He would go lengths to explore a better solution. I would definitely recommend Thirunaavukkarasu as a capable and efficient developer.",
  },
];
