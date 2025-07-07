import { useState } from "react";
import IconButton from "./ui/IconButton";
import Table from "./ui/Table";
import { MoreVertical, Edit2, Flag, Trash2 } from "lucide-react";

export default function EmployeeGrid({ employees, onEdit, onFlag, onDelete }) {
  const [openRow, setOpenRow] = useState(null);

  return (
    <Table className="mt-4 rounded-lg shadow overflow-hidden">
      <thead className="bg-gray-50 dark:bg-gray-700 sticky top-0 z-10">
        <tr className="text-left text-sm font-medium text-gray-700 dark:text-gray-200">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Age</th>
          <th className="px-4 py-2">Class</th>
          <th className="px-4 py-2">Subjects</th>
          <th className="px-4 py-2">Attendance</th>
          <th className="px-4 py-2 text-right" style={{ width: "60px" }}>
            Actions
          </th>
        </tr>
      </thead>

      <tbody className="bg-white dark:bg-gray-800">
        {employees.map((emp) => (
          <tr
            key={emp.id}
            className="border-t hover:bg-gray-50 dark:hover:bg-gray-700 relative"
          >
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-gray-100">
              {emp.name}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
              {emp.age}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
              {emp.class}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
              {emp.subjects.join(", ")}
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100 rounded">
                {emp.attendance}%
              </span>
            </td>

            <td className="px-4 py-3 whitespace-nowrap text-sm text-right">
              <div className="relative inline-block">
                {/* Three-dot toggle */}
                <IconButton
                  icon={MoreVertical}
                  label="Row actions"
                  variant="default"
                  onClick={() =>
                    setOpenRow(openRow === emp.id ? null : emp.id)
                  }
                />

                {openRow === emp.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20">
                    <ul>
                      <li>
                        <button
                          onClick={() => onEdit(emp)}
                          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <IconButton
                            icon={Edit2}
                            label="Edit employee"
                            variant="primary"
                            className="mr-2 p-0"
                          />
                          Edit
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => onFlag(emp)}
                          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <IconButton
                            icon={Flag}
                            label="Flag employee"
                            className="mr-2 p-0"
                          />
                          Flag
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => onDelete(emp)}
                          className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <IconButton
                            icon={Trash2}
                            label="Delete employee"
                            variant="danger"
                            className="mr-2 p-0"
                          />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
