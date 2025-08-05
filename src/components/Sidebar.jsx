"use client";
import { motion } from "framer-motion";
import { FaUserMd, FaProcedures, FaFlask, FaClipboardList, FaUserFriends, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const menuItems = [
  { icon: <FaChartLine />, label: "Dashboard" },
  { icon: <FaUserFriends />, label: "Staff" },
  { icon: <FaProcedures />, label: "Ward" },
  { icon: <FaFlask />, label: "Lab" },
  { icon: <FaClipboardList />, label: "Treatment" },
  { icon: <FaUserMd />, label: "Pharmacy" },
  { icon: <FaUserMd />, label: "Patient" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <motion.div
      animate={{ width: open ? "220px" : "70px" }}
      className="bg-gradient-to-b from-primary to-secondary h-screen p-4 text-black flex flex-col justify-between shadow-lg"
    >
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="mb-6 text-xl font-bold tracking-widest"
        >
          {open ? "MediLab" : "ML"}
        </button>
        <ul className="space-y-4">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center space-x-3 hover:bg-white/20 p-2 rounded-lg cursor-pointer"
            >
              {item.icon}
              {open && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
