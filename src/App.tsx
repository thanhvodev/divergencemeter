import divergenceValueMap from "./divergenceValue";
import "./App.css";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";
import { useState, useEffect } from "react";

function App() {
  const [dvValue, setDvValue] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const message = utf8ToBytes(new Date().getSeconds().toString());
      const hash = keccak256(message);
      let divergenceKey = hash[0] % 11;
      let divergenceValue = divergenceValueMap[divergenceKey];
      setDvValue(divergenceValue);
      console.log(divergenceValue);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval when component is unmounted
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={dvValue} alt="divergence value" />
    </div>
  );
}

export default App;
