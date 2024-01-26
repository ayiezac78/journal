import { useLayoutEffect, useState } from 'react';

const ToggleTheme = () => {
  const isDarkMode = localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', isDarkMode);

  const initialTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.classList.add(initialTheme);

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const [theme, setTheme] = useState(initialTheme);

  useLayoutEffect(() => {
    document.documentElement.className = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <box-icon name='moon' /> : <box-icon color="#fffffb" name='sun' />}
      </button>
    </div>
  );
};

export default ToggleTheme;
