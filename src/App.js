import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  //It’s not the count variable that somehow changes inside an “unchanging” effect. It’s the effect function itself that’s different on every render.
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click the switch to toggle themes</p>
        <label class="switch">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => toggleThemeChange()}
          />
          <span class="slider round" />
        </label>
      </header>
    </div>
  );
};

export default App;
