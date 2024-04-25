/** @format */
import "./style.css";
import { useState } from "react";

const IMC = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState(0);
  const [error, setError] = useState("");
  const [classification, setClassification] = useState("");

  const calculator = () => {
    setClassification("");
    if (!weight || !height || parseFloat(weight) <= 0 || parseFloat(height) <= 0) {
      setError("Preencha o peso e altura com valores numéricos maiores que zero.");
      return;
    }

    const calculatedIMC = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    setImc(calculatedIMC.toFixed(1));

    if (calculatedIMC < 18.5) {
      setClassification("Baixo peso");
    } else if (calculatedIMC >= 18.5 && calculatedIMC <= 24.9) {
      setClassification("Eutrofia (peso adequado)");
    } else if (calculatedIMC >= 25 && calculatedIMC <= 29.9) {
      setClassification("Sobrepeso");
    } else if (calculatedIMC >= 30 && calculatedIMC <= 34.9) {
      setClassification("Obesidade grau 1");
    } else if (calculatedIMC >= 35 && calculatedIMC <= 39.9) {
      setClassification("Obesidade grau 2");
    } else {
      setClassification("Obesidade extrema");
    }

    setError("");
  };

  return (
    <div className="IMC">
      <h2>Cálculo IMC</h2>
      <div className="msg">{error}</div>
      <div className="msg success">{classification}</div>

      <input
        type="text"
        placeholder="digite seu peso"
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="digite sua altura"
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculator}>Calcular</button>
      <p className="resultado">Seu IMC é{imc > 0 && <span> {imc}</span>}</p>
    </div>
  );
};

export default IMC;
