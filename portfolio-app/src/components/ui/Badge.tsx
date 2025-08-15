interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'success';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-accent-500/20 text-accent-500 border-accent-500/30',
    secondary: 'bg-slate-700/50 text-slate-300 border-slate-600/50',
    success: 'bg-green-500/20 text-green-400 border-green-500/30'
  };
  
  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border
      ${variants[variant]} ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;