import { useState } from 'react';
import Content from './components/Content';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <div className='App'>
      <div className={`container ${theme}`}>
        <Content toggleTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
