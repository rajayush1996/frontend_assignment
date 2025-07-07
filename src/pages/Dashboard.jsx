import { useState } from "react";
import { useQuery } from "@apollo/client";
import EmployeeDetailModal from "../components/EmployeeDetailModal";
import EditEmployeeModal   from "../components/EditEmployeeModal";
import Navbar              from "../components/Navbar";
import ToggleView          from "../components/ToggleView";
import EmployeeGrid        from "../components/EmployeeGrid";
import EmployeeTile        from "../components/EmployeeTile";
import { GET_EMPLOYEES_QUERY } from "../graphql/operations";
import { client }             from "../apollo/client";

export default function Dashboard() {
  // 1. Pagination state
  const [page, setPage]   = useState(1);
  const limit             = 20;

  const [viewMode, setViewMode]         = useState("grid");
  const [selectedEmployee, setSelected] = useState(null);
  const [editingEmployee, setEditing]   = useState(null);

  // 2. Query with pagination variables
  const { data, loading, error } = useQuery(GET_EMPLOYEES_QUERY, {
    variables: { page, limit },
    fetchPolicy: "network-only",
  });

  if (loading) return <p className="p-4">Loading…</p>;
  if (error)   return <p className="p-4 text-red-600">Error: {error.message}</p>;

  // 3. Destructure items & pageInfo
  const { items: employees, pageInfo } = data.employees;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="p-4 max-w-7xl mx-auto">
        <ToggleView viewMode={viewMode} setViewMode={setViewMode} />

        {viewMode === "grid" ? (
          <EmployeeGrid
            employees={employees}
            onEdit={(emp) => setEditing(emp)}
            onFlag={(emp) => console.log("Flag", emp)}
            onDelete={(emp) => console.log("Delete", emp)}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {employees.map((emp) => (
              <EmployeeTile
                key={emp.id}
                employee={emp}
                onSelect={(e) => setSelected(e)}
                onEdit={(e) => setEditing(e)}
                onFlag={(e) => console.log("Flag", e)}
                onDelete={(e) => console.log("Delete", e)}
              />
            ))}
          </div>
        )}

        {/* 4. Pagination controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setPage(page - 1)}
            disabled={!pageInfo.hasPreviousPage}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {pageInfo.page} of {pageInfo.totalPages} — {pageInfo.totalItems} items
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={!pageInfo.hasNextPage}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* 5. Edit Modal */}
      <EditEmployeeModal
        employee={editingEmployee}
        isOpen={Boolean(editingEmployee)}
        onClose={() => setEditing(null)}
        onUpdated={() => {
          // Refetch current page after update
          client.refetchQueries({
            include: [{ query: GET_EMPLOYEES_QUERY, variables: { page, limit } }],
          });
          setEditing(null);
        }}
      />

      {/* Detail Modal */}
      <EmployeeDetailModal
        employee={selectedEmployee}
        isOpen={Boolean(selectedEmployee)}
        onClose={() => {
          setSelected(null);
          setViewMode("tile");
        }}
      />
    </div>
  );
}
