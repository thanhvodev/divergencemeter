import divergenceValueMap from "./divergenceValue";
import "./App.css";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";
import { useState } from "react";

function App() {
  const [dvValue, setDvValue] = useState("");

  setInterval(() => {
    const message = utf8ToBytes(new Date().getSeconds().toString());
    const hash = keccak256(message);

    let divergenceKey = hash[0] % 11;
    let divergenceValue = divergenceValueMap[divergenceKey];
    setDvValue(divergenceValue);
  }, 1000);

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${dvValue})`,
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default App;
