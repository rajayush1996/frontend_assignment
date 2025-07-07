import { useState, useEffect } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { useMutation } from "@apollo/client";
import { UPDATE_EMPLOYEE_MUTATION } from "../graphql/operations";

export default function EditEmployeeModal({
  employee,
  isOpen,
  onClose,
  onUpdated,
}) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    class: "",
    subjects: "",
    attendance: "",
  });

  // Populate form when `employee` changes
  useEffect(() => {
    if (employee) {
      setForm({
        name:       employee.name,
        age:        String(employee.age),
        class:      employee.class,
        subjects:   employee.subjects.join(", "),
        attendance: String(employee.attendance),
      });
    }
  }, [employee]);

const [updateEmployee, { loading, error, data }] = useMutation(
  UPDATE_EMPLOYEE_MUTATION,
  {
    onCompleted: (d) => console.log("✅ Success:", d),
    onError:     (e) => console.error("❌ Mutation error:", e),
  }
);

// Then in your submit handler:
function handleSubmit(e) {
  e.preventDefault();
  const input = {
    id:         employee.id,
    name:       form.name,
    age:        parseInt(form.age, 10),
    class:      form.class,
    subjects:   form.subjects.split(",").map(s => s.trim()),
    attendance: parseInt(form.attendance, 10),
  };
  console.log("▶️ Sending updateEmployee with:", input);

  updateEmployee({ variables: { id: employee.id, input } });
}

  if (!employee) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Edit ${employee.name}`}>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          value={form.name}
          onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Name"
          required
        />
        <input
          type="number"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          value={form.age}
          onChange={e => setForm(prev => ({ ...prev, age: e.target.value }))}
          placeholder="Age"
          required
        />
        <input
          type="text"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          value={form.class}
          onChange={e => setForm(prev => ({ ...prev, class: e.target.value }))}
          placeholder="Class"
          required
        />
        <input
          type="text"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          value={form.subjects}
          onChange={e => setForm(prev => ({ ...prev, subjects: e.target.value }))}
          placeholder="Subjects (comma-separated)"
          required
        />
        <input
          type="number"
          className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
          value={form.attendance}
          onChange={e => setForm(prev => ({ ...prev, attendance: e.target.value }))}
          placeholder="Attendance (%)"
          required
        />

        {error && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            {error.message}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          className="w-full"
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </form>
    </Modal>
  );
}
