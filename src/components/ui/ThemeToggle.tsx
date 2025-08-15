import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
        theme === 'dev' 
          ? 'bg-gray-800 text-green-400 border border-green-500/50 shadow-lg shadow-green-500/25' 
          : 'bg-white text-blue-600 border border-blue-300/50 shadow-lg shadow-blue-500/25'
      }`}
      title={`Switch to ${theme === 'dev' ? 'Normal' : 'Developer'} mode`}
    >
      {theme === 'dev' ? '</>' : '✨'}
    </button>
  );
};

export default ThemeToggle;