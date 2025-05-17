import { useState } from "react";
import "./App.css"; // This should contain your CSS class

function ListGroup() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalized = inputValue.trim().toLowerCase();
    const accepted = ["c.c", "cc", "dinosaur1886", "@dinosaur1886", "dinosaur"];

    if (accepted.includes(normalized)) {
      setMessage("✅ Man of culture, indeed");
      if (
        normalized === "dinosaur1886" ||
        normalized === "@dinosaur1886" ||
        normalized === "dinosaur"
      ) {
        window.location.href = "https://giphy.com/gifs/relnvfSEa2Qa125uPA";
      }
    } else {
      setMessage("❌ Wrong! Get some help.");
    }
  };

  return (
    <div className="app-container">
      <h1>🔥 🔥</h1>

      <a
        href="https://www.kitchenstories.com/en/recipes/roasted-butter-garlic-prawns-ca15"
        className="prawnlink"
        target="_blank"
        rel="noreferrer"
      >
        catch this prawn 🍤
      </a>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="who is the best waifu?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {message && <p className="feedback">{message}</p>}
      <a
        href="https://www.pixiv.net/en/artworks/73982471"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="cc"
          id="html-logo"
          src="0D5262F6-D6D7-4A44-B948-306837933432.jpeg"
          alt="most beautiful waifu"
          title="most beautiful waifu"
          style={{ width: "800px", height: "auto" }}
        />
      </a>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const query = (form.elements.namedItem("q") as HTMLInputElement).value
            .trim()
            .toLowerCase();
          if (query === "c.c") {
            window.location.href =
              "https://myanimelist.net/anime/1575/Code_Geass__Hangyaku_no_Lelouch";
          } else {
            window.location.href =
              "https://imgur.com/gallery/rick-roll-rickroll-with-sound-xks5yH9";
          }
        }}
      >
        <input name="q" placeholder="search c.c" required />
        <button type="submit" className="submit-button">
          Beseech
        </button>
      </form>
    </div>
  );
}
export default ListGroup;
