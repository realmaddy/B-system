"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface QuickActionCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function QuickActionCard({
  title,
  desc,
  icon,
  gradient,
}: QuickActionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="p-3 rounded-xl bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-gray-100 group-hover:to-gray-50 transition-all"
          >
            {icon}
          </motion.div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition">
              {title}
            </h4>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
        </div>
      </div>

      {/* Animated Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`mt-4 text-white text-xs font-medium py-2.5 px-3 rounded-md flex items-center justify-center gap-1 shadow-sm ${gradient} transition-all duration-300 hover:shadow-lg`}
      >
        Get Started
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ChevronRight className="w-3 h-3" />
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
