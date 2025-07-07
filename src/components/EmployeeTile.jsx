import { motion } from "framer-motion";
import IconButton from "./ui/IconButton";
import {
  User,
  CalendarDays,
  MapPin,
  CheckCircle2,
  Edit2,
  Flag,
  Trash2,
} from "lucide-react";

const tileVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.02, boxShadow: "0 8px 16px rgba(0,0,0,0.12)" },
};

export default function EmployeeTile({
  employee,
  onSelect,
  onEdit,
  onFlag,
  onDelete,
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-card overflow-hidden cursor-pointer"
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onClick={() => onSelect(employee)}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3 text-gray-800 dark:text-gray-100">
          <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full">
            <IconButton
              icon={User}
              size={20}
              className="
                    text-primary-600 dark:text-primary-300 
                    bg-gray-100 dark:bg-gray-700 
                    p-2 rounded-full
            "
              label="Profile"
            />
          </div>
          <h3 className="text-lg font-semibold">{employee.name}</h3>
        </div>
        <IconButton
          icon={Flag}
          label="Options"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(employee);
          }}
          variant="default"
        />
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <CalendarDays size={18} />
            <span>{employee.age} yrs</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={18} />
            <span>Class {employee.class}</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-200">
          <strong>Subjects:</strong> {employee.subjects.join(", ")}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <CheckCircle2 size={18} />
            <span>{employee.attendance}%</span>
          </div>
          <div className="flex space-x-2">
            <IconButton
              icon={Edit2}
              label="Edit employee"
              variant="primary"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(employee);
              }}
            />
            <IconButton
              icon={Flag}
              label="Flag employee"
              variant="default"
              onClick={(e) => {
                e.stopPropagation();
                onFlag(employee);
              }}
            />
            <IconButton
              icon={Trash2}
              label="Delete employee"
              variant="danger"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(employee);
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
