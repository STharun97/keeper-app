import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./styles.css";
import contents from "./main";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main-container">
      <Header />
      {contents.map((note) => (
        <Note key={note.key} title={note.title} details={note.details} />
      ))}
      <Footer />
    </div>
  </StrictMode>
);
