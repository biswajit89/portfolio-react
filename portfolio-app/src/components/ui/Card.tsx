interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <div className={`
      bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50
      ${hover ? 'hover:bg-secondary/70 hover:border-slate-600/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;