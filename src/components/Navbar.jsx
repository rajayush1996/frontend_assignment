import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import IconButton from "./ui/IconButton";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";
import useDarkMode from "../hooks/useDarkMode";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="bg-white dark:bg-gray-900 dark:border-b dark:border-gray-700 shadow sticky top-0 z-20 w-full">
      <motion.div
        className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <NavLink to="/dashboard" className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 hover:text-primary-500 transition-colors">
            Employee App
          </h1>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Dashboard link */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-2 py-1 ${
                isActive
                  ? "font-medium text-primary-500 dark:text-primary-300 border-b-2 border-primary-500 dark:border-primary-300"
                  : "text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-300"
              } transition-colors`
            }
          >
            Dashboard
          </NavLink>

          {/* Employees button */}
          <button
            onClick={() => console.log("Employees clicked")}
            className="px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-primary-500 transition-colors"
          >
            Employees
          </button>

          {/* Settings dropdown */}
          <div className="relative group">
            <button className="px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-primary-500 transition-colors">
              Settings
            </button>
            <div className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={() => console.log("Profile clicked")}
                className="w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Profile
              </button>
              <button
                onClick={() => console.log("Security clicked")}
                className="w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Security
              </button>
            </div>
          </div>

          {/* Dark mode toggle */}
          <Button variant="secondary" onClick={() => setIsDark((d) => !d)}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <IconButton
            icon={open ? X : Menu}
            label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          />
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-inner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dashboard */}
            <div className="px-6">

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-2 py-1 transition-colors ${
                  isActive
                    ? "font-medium text-primary-500 dark:text-primary-300 border-b-2 border-primary-500 dark:border-primary-300"
                    : "text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-300"
                }`
              }
            >
              Dashboard
            </NavLink>


            {/* Employees */}
            <button
              onClick={() => {
                console.log("Employees clicked");
                setOpen(false);
              }}
              className="block w-full text-left py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Employees
            </button>
            </div>


            {/* Settings */}
            <div className="border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {}}
                className="w-full text-left px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Settings
              </button>
              <button
                onClick={() => {
                  console.log("Profile clicked");
                  setOpen(false);
                }}
                className="block w-full text-left px-12 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  console.log("Security clicked");
                  setOpen(false);
                }}
                className="block w-full text-left px-12 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Security
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
