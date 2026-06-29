"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animated bar chart data
const barData = [45, 78, 62, 91, 55, 84, 70, 95, 68, 82];
const linePoints = [30, 45, 35, 60, 50, 75, 65, 88, 72, 92];

const kpis = [
  { label: "Accuracy", value: "94.2%", delta: "+2.4%" },
  { label: "Records", value: "20K+", delta: "+15%" },
  { label: "Insights", value: "47", delta: "+8" },
];

export default function AnalyticsDashboard() {
  const [animated, setAnimated] = useState(false);
  const [liveValue, setLiveValue] = useState(94.2);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const deltas = [0.3, -0.1, 0.4, 0.2, -0.2, 0.1, -0.3, 0.2];
    let tick = 0;
    const interval = setInterval(() => {
      setLiveValue((v) => {
        const next = v + deltas[tick % deltas.length];
        tick += 1;
        return Math.max(90, Math.min(99, parseFloat(next.toFixed(1))));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const maxBar = Math.max(...barData);
  const svgWidth = 280;
  const svgHeight = 80;
  const pointSpacing = svgWidth / (linePoints.length - 1);
  const pathD = linePoints
    .map((v, i) => {
      const x = i * pointSpacing;
      const y = svgHeight - (v / 100) * svgHeight;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <div className="relative w-full max-w-[420px]">
      {/* Glow */}
      <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-3xl blur-2xl scale-110 pointer-events-none" />

      {/* Main Card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-2xl border border-[#27272A] bg-[#111827]/90 backdrop-blur-xl p-5 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-widest">Analytics Dashboard</p>
            <h3 className="text-white font-heading font-bold text-sm mt-0.5">Portfolio Overview</h3>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium">Live</span>
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="bg-[#09090B]/60 rounded-xl p-2.5 border border-[#27272A]"
            >
              <p className="text-[#94A3B8] text-[10px] mb-1">{kpi.label}</p>
              <p className="text-white font-heading font-bold text-sm">
                {kpi.label === "Accuracy" ? `${liveValue}%` : kpi.value}
              </p>
              <p className="text-emerald-400 text-[10px] font-medium mt-0.5">{kpi.delta}</p>
            </motion.div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="mb-4">
          <p className="text-[#94A3B8] text-[10px] mb-2 uppercase tracking-wider">Model Performance</p>
          <div className="flex items-end gap-1.5 h-16">
            {barData.map((val, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: animated ? `${(val / maxBar) * 100}%` : 0 }}
                transition={{ duration: 0.7, delay: 1 + i * 0.05, ease: "easeOut" }}
                className="flex-1 rounded-sm"
                style={{
                  background: `linear-gradient(to top, #3B82F6, ${i > 6 ? "#60A5FA" : "#1D4ED8"})`,
                  opacity: 0.6 + (val / maxBar) * 0.4,
                }}
              />
            ))}
          </div>
        </div>

        {/* Line Chart */}
        <div className="mb-4">
          <p className="text-[#94A3B8] text-[10px] mb-2 uppercase tracking-wider">Revenue Trend</p>
          <div className="relative bg-[#09090B]/50 rounded-xl overflow-hidden border border-[#27272A] p-2">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-16"
              preserveAspectRatio="none"
            >
              {/* Fill */}
              <motion.path
                d={`${pathD} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`}
                fill="url(#lineGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />
              {/* Line */}
              <motion.path
                d={pathD}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: animated ? 1 : 0 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
              />
              {/* Gradient def */}
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Last dot */}
              <motion.circle
                cx={(linePoints.length - 1) * pointSpacing}
                cy={svgHeight - (linePoints[linePoints.length - 1] / 100) * svgHeight}
                r="4"
                fill="#3B82F6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 }}
              />
            </svg>
          </div>
        </div>

        {/* Tags Row */}
        <div className="flex flex-wrap gap-1.5">
          {["Python", "SQL", "Power BI", "Gemini AI"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-semibold rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA]"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Floating mini cards */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute -right-6 top-8 bg-[#111827] border border-[#27272A] rounded-xl p-3 shadow-xl backdrop-blur-xl"
      >
        <p className="text-[#94A3B8] text-[9px] uppercase tracking-wider mb-1">ETL Pipeline</p>
        <div className="flex gap-1.5 items-center">
          {["Bronze", "Silver", "Gold"].map((tier, i) => (
            <motion.div
              key={tier}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2 + i * 0.15 }}
              className="flex flex-col items-center gap-0.5"
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold"
                style={{
                  background:
                    tier === "Bronze"
                      ? "rgba(180,100,50,0.2)"
                      : tier === "Silver"
                      ? "rgba(180,180,200,0.2)"
                      : "rgba(250,200,50,0.2)",
                  border: `1px solid ${
                    tier === "Bronze" ? "rgba(180,100,50,0.4)" : tier === "Silver" ? "rgba(180,180,200,0.4)" : "rgba(250,200,50,0.4)"
                  }`,
                  color:
                    tier === "Bronze" ? "#CD7F32" : tier === "Silver" ? "#C0C0C0" : "#FFD700",
                }}
              >
                {tier[0]}
              </div>
              <span className="text-[#94A3B8] text-[8px]">{tier}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.1 }}
        className="absolute -left-6 bottom-16 bg-[#111827] border border-[#27272A] rounded-xl p-3 shadow-xl backdrop-blur-xl"
      >
        <p className="text-[#94A3B8] text-[9px] uppercase tracking-wider mb-1">Hackathons</p>
        <p className="text-white font-heading font-bold text-sm">5 Events</p>
        <p className="text-emerald-400 text-[9px] font-medium">3 National · 2 International</p>
      </motion.div>
    </div>
  );
}
