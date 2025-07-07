import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import IconButton from "./ui/IconButton";
import { User, CalendarDays, MapPin, CheckCircle2, BookOpen, X, Edit2, Flag } from "lucide-react";

export default function EmployeeDetailModal({ employee, isOpen, onClose }) {
  if (!employee) return null;

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="fixed inset-0 bg-black/40" />

        <div className="flex items-center justify-center min-h-screen p-4">
          <Dialog.Panel as={motion.div}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg p-6"
          >
            {/* Close button */}
            <div className="absolute top-4 right-4">
              <IconButton
                icon={X}
                label="Close"
                onClick={onClose}
                variant="default"
                className="bg-gray-100 dark:bg-gray-700"
              />
            </div>

            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-full">
                <User size={28} className="text-primary-600 dark:text-primary-300" />
              </div>
              <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {employee.name}
              </Dialog.Title>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <CalendarDays size={20} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-200">Age: {employee.age}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={20} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-200">Class: {employee.class}</span>
              </div>
              <div className="flex items-center space-x-2 sm:col-span-2">
                <BookOpen size={20} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-200">
                  Subjects: {employee.subjects.join(", ")}
                </span>
              </div>
            </div>

            {/* Attendance */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 size={20} className="text-gray-500 dark:text-gray-400" />
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    Attendance
                  </span>
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  {employee.attendance}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 dark:bg-primary-300"
                  style={{ width: `${employee.attendance}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-2">
              <IconButton
                icon={CalendarDays}
                label="Schedule"
                onClick={() => alert("Schedule clicked")}
                variant="default"
              />
              <IconButton
                icon={Edit2}
                label="Edit"
                onClick={() => console.log("Edit clicked")}
                variant="primary"
              />
              <IconButton
                icon={Flag}
                label="Flag"
                onClick={() => console.log("Flag clicked")}
                variant="default"
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
