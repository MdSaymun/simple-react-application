import { useState } from "react";

function Content() {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    setDisplayText(textAreaValue);
  };

  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "70vh" }}>
      <textarea value={textAreaValue} onChange={handleTextAreaChange} rows={3} />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayText}</p>
    </div>
  );
}

export default Content;
