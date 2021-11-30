import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "🤑": "Money-Mouth Face",
  "😑": "Expressionless Face",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🤗": "Hugging Face",
  "😉": "Winking Face",
  "😋": "Face Savoring Food",
  "😇": "Smiling Face with Halo",
  "🤐": "Zipper-Mouth Face"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  var [emojiInput, setEmojiInput] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;
    setEmojiInput(emojiInput);
    var meaning = emojiDictionary[emojiInput];
    if (emojiInput in emojiDictionary) {
      setMeaning(meaning);
    } else if (emojiInput === "") {
      meaning = "";
      setMeaning(meaning);
    } else {
      meaning = "sorry we don't have this in our database, try something else";
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    setEmojiInput("");
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "#FBBF24",
          padding: "2rem",
          fontWeight: "bold",
          fontSize: "1.5rem"
        }}
      >
        Emoji Interpreter
      </nav>
      <h2 style={{ marginTop: "3rem" }}>
        Type your emoji here👇 to know its meaning
      </h2>

      <input
        onChange={emojiInputHandler}
        style={{
          fontSize: "1.5rem",
          height: "7vh",
          border: "1px solid black"
        }}
        value={emojiInput}
      />

      <div
        style={{ paddingTop: "1rem", fontWeight: "bold", fontSize: "larger" }}
      >
        {meaning}
      </div>

      <h3>click on emoji to know its meaning</h3>

      {emojiArray.map(function emojiDisplay(emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
