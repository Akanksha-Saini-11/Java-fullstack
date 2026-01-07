import { useState } from "react";
import "./App.css";

function App() {
  
  const [theme, setTheme] = useState("light");

  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
