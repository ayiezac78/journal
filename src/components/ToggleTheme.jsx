import { useEffect, useState } from 'react';

const ToggleTheme = () => {
  // Check for dark mode preference in localStorage or based on system preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Function to toggle theme
  const toggleTheme = () => {
    // Get the current theme from localStorage or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Toggle the theme
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update the theme in localStorage
    localStorage.setItem('theme', newTheme);

    // Update the theme in state
    setTheme(newTheme);
  };

  // Set up state for theme
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply theme on component mount and when theme changes
  useEffect(() => {
    // Apply the theme class to the body
    document.documentElement.className = theme;

    // You can also update the HTML element class if needed
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div>
      <h1>Your React ToggleTheme</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleTheme;
