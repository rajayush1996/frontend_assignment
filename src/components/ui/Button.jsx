export default function Button({ children, variant = 'primary', className, ...props }) {
  const base = 'px-4 py-2 font-medium rounded-lg focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-700 focus:ring-primary-300',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-700 focus:ring-secondary-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-200',
    danger: 'bg-danger-500 text-white hover:bg-danger-700 focus:ring-danger-300',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
