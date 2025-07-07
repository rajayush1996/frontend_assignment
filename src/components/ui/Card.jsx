export default function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-xl shadow-card dark:bg-gray-800 overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
