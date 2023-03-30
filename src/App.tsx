import divergenceValueMap from "./divergenceValue";
import "./App.css";
import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";

function App() {
  const message = utf8ToBytes(new Date().getFullYear().toString());
  const hash = keccak256(message);

  let divergenceKey = hash[0] % 11;
  let divergenceValue = divergenceValueMap[divergenceKey];

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${divergenceValue})`,
        backgroundPosition: "center",
      }}
    ></div>
  );
}

export default App;
