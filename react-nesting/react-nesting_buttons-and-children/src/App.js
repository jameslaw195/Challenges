import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Samantha</Button>
      <Button>Charlotte</Button>
      <Button>Miranda</Button>
      <Button>Carrie</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
