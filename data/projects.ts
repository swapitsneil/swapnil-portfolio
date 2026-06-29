import { Project } from "@/types";

export const projects: Project[] = [
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
    demo: "https://github.com/swapitsneil/crypto-intelligence-platform",
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
];
