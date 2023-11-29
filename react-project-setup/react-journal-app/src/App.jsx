// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { EntryForm } from "./components/EntryForm/EntryForm";
import { Entries } from "./components/Entries/Entries";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <EntryForm />
      <Entries />
      <Footer />
    </>
  );
}

export default App;
