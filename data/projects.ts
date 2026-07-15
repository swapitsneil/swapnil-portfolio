import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "autonomous-data-analyst",
    title: "Autonomous Data Analyst",
    description:
      "An AI-powered Multi-Agent Analytics Platform that automatically collects live cryptocurrency market data, profiles datasets, generates statistical business hypotheses, validates insights using statistical tests (ANOVA/T-Test), and builds executive reports, visualized via an interactive Streamlit dashboard.",
    highlights: [
      "LangGraph Multi-Agent Architecture",
      "Automated Profiling & Cleaning",
      "Gemini-Driven Hypothesis Generation",
      "Advanced Statistical Testing (ANOVA/T-Test)",
      "Streamlit Live Dashboard & Reports",
    ],
    metrics: [
      { label: "AI Agents", value: "6" },
      { label: "Data Pipeline", value: "LangGraph" },
      { label: "Stat Tests", value: "5+" },
      { label: "LLM Model", value: "Gemini" },
    ],
    tags: ["Python", "LangGraph", "Gemini AI", "Streamlit", "SQLite"],
    github: "https://github.com/swapitsneil/autonomous_data_analyst",
    demo: "https://gtqdinrvezfs8xtbqhdp57.streamlit.app/",
  },
  {
    id: "google-play-analytics",
    title: "Google Play Store Analytics",
    description:
      "End-to-end data analysis pipeline on 10K+ apps — from raw SQL cleaning to ML models and an interactive Power BI dashboard delivering actionable business insights.",
    highlights: [
      "SQL Data Cleaning",
      "Exploratory Data Analysis",
      "Machine Learning",
      "Power BI Dashboard",
      "Business Insights",
    ],
    metrics: [
      { label: "Apps Analyzed", value: "10K+" },
      { label: "Duplicates Removed", value: "814" },
      { label: "ML Models", value: "3" },
      { label: "Dashboard", value: "Power BI" },
    ],
    tags: ["Python", "SQL", "Power BI", "Machine Learning"],
    github: "https://github.com/swapitsneil/googleplaystore",
    docs: "#",
  },
  {
    id: "crypto-intelligence-platform",
    title: "Crypto Intelligence Platform",
    description:
      "Real-time crypto analytics platform with live API integration, a Bronze→Silver→Gold ETL pipeline, SQLite data warehouse, Streamlit dashboard, and Gemini AI market analyst.",
    highlights: [
      "Live API Integration",
      "Bronze → Silver → Gold ETL",
      "SQLite Warehouse",
      "Streamlit Dashboard",
      "Gemini AI Market Analyst",
    ],
    metrics: [
      { label: "Coins Tracked", value: "100+" },
      { label: "Data Source", value: "Live API" },
      { label: "Pipeline", value: "ETL" },
      { label: "AI Reports", value: "Gemini AI" },
    ],
    tags: ["Python", "SQL", "SQLite", "Streamlit", "Gemini AI"],
    github: "https://github.com/swapitsneil/crypto-intelligence-platform",
    demo: "https://kkd9lh2h9sstchadvjvbc3.streamlit.app/",
  },
  {
    id: "ecommerce-advanced-analytics",
    title: "E-Commerce Advanced Analytics",
    description:
      "Comprehensive e-commerce analytics covering 20K+ transactions — cohort analysis, funnel analysis, CLV calculation, and executive dashboards for revenue and churn insights.",
    highlights: [
      "Customer Analytics",
      "Revenue Analysis",
      "Cohort Analysis",
      "Customer Lifetime Value",
      "Executive Dashboard",
    ],
    metrics: [
      { label: "Records Processed", value: "20K+" },
      { label: "Drop-off Found", value: "12%" },
      { label: "Analysis Type", value: "Cohort" },
      { label: "Insights", value: "CLV + Churn" },
    ],
    tags: ["Python", "SQL", "Power BI", "Gemini AI"],
    github: "https://github.com/swapitsneil/ecommerce-advanced-analytics",
    docs: "#",
  },
  {
    id: "amazon-prime-analytics",
    title: "Amazon Prime Content Analytics",
    description:
      "Exploratory data analysis of Amazon Prime Video's content library — uncovering insights about content distribution, audience preferences, ratings patterns, and global production trends across 9,000+ titles.",
    highlights: [
      "Content Distribution Analysis",
      "Audience Preference Insights",
      "Production Trend Analysis",
      "Talent Participation Mapping",
      "Data-Driven Visualizations",
    ],
    metrics: [
      { label: "Titles Analyzed", value: "9K+" },
      { label: "Analysis", value: "EDA" },
      { label: "Charts", value: "15+" },
      { label: "Insights", value: "Content Mix" },
    ],
    tags: ["Python", "Pandas", "Seaborn", "Matplotlib"],
    github: "https://github.com/swapitsneil/Amazon-Prime-TV-Shows-and-Movies",
  },
  {
    id: "insurance-lead-analytics",
    title: "Insurance Lead Analytics",
    description:
      "Business Analyst project analyzing insurance lead conversion, marketing performance, revenue tracking, and customer segmentation using Python and Power BI to drive data-backed sales decisions.",
    highlights: [
      "Lead Conversion Analysis",
      "Marketing Performance Tracking",
      "Revenue Analytics",
      "Customer Segmentation",
      "Power BI Dashboard",
    ],
    metrics: [
      { label: "Analysis", value: "Lead Conversion" },
      { label: "Segmentation", value: "Customer" },
      { label: "Dashboard", value: "Power BI" },
      { label: "Insights", value: "Revenue + Marketing" },
    ],
    tags: ["Python", "Power BI", "Data Analysis", "Business Analytics"],
    github: "https://github.com/swapitsneil/Insurance-Lead-Analytics",
  },
  {
    id: "spotify-schema-design",
    title: "Spotify Product Dissection & Schema Design",
    description:
      "Product dissection of Spotify's data architecture with a normalized 3NF PostgreSQL schema design, ER diagrams, and advanced SQL analytics using window functions and CTEs for music platform insights.",
    highlights: [
      "3NF Database Schema Design",
      "ER Diagram Architecture",
      "Advanced SQL Analytics",
      "Window Functions & CTEs",
      "Database Optimization",
    ],
    metrics: [
      { label: "Schema", value: "3NF" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Queries", value: "Advanced SQL" },
      { label: "Design", value: "ER Diagrams" },
    ],
    tags: ["PostgreSQL", "SQL", "Database Design", "3NF"],
    github: "https://github.com/swapitsneil/spotify_project",
  },
  {
    id: "healthcare-analysis",
    title: "Healthcare Risk Analysis Dashboard",
    description:
      "Power BI analysis examining health risks and safety disparities across 77 U.S. cities using the MetroHealth83 dataset — identifying healthcare gaps, cleaning duplicate records, and generating actionable insights through interactive dashboards.",
    highlights: [
      "Health Risk Analysis",
      "77 City Comparison",
      "Data Cleaning Pipeline",
      "Interactive Dashboards",
      "Actionable Health Insights",
    ],
    metrics: [
      { label: "Cities Analyzed", value: "77" },
      { label: "Data Points", value: "16 Cols" },
      { label: "Dashboard", value: "Power BI" },
      { label: "Dataset", value: "MetroHealth83" },
    ],
    tags: ["Power BI", "Data Cleaning", "Data Visualization"],
    github: "https://github.com/swapitsneil/healthcareanalysis",
  },
];

