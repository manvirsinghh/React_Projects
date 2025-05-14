import React, { useMemo, useState } from "react";

function CalculatorProject() {
  const [numI, setNumI] = useState(""); // Start with an empty string
  const [numII, setNumII] = useState("");
  const [operator, setOperator] = useState("+");

  // Perform calculation
  function performCalculations(numI, numII, operator) {
    const a = parseFloat(numI);
    const b = parseFloat(numII);

    if (isNaN(a)) {
      return "Invalid input";
    }

    switch (operator) {
      case "+":
        return a + parseFloat(b || 0); // Handle binary operators with default for second number
      case "-":
        return a - parseFloat(b || 0);
      case "*":
        return a * parseFloat(b || 0);
      case "/":
        return b !== 0 ? a / b : "Can't divide by zero"; // Check for division by zero
      case "sin":
        return Math.sin(a); // Sin operation (works for single number)
      case "cos":
        return Math.cos(a);
      case "tan":
        return Math.tan(a);
      case "log":
        return a > 0 ? Math.log(a) : "Log error (x > 0 required)"; // Log error check
      case "sqrt":
        return a >= 0 ? Math.sqrt(a) : "Square root error (x >= 0 required)";
      case "square":
        return a * a;
      default:
        return "Invalid operator"; // Default case for any unknown operator
    }
  }

  const handleChangeFirst = (event) => {
    setNumI(event.target.value);
  };

  const handleChangeSecond = (event) => {
    setNumII(event.target.value);
  };

  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };

  const result = useMemo(() => {
    return performCalculations(numI, numII, operator);
  }, [numI, numII, operator]);

  return (
    <div>
      <label htmlFor="num1" className="form-label">
        Num1:
      </label>
      <input
        onChange={handleChangeFirst}
        type="number"
        value={numI}
        className="form-control"
        placeholder="Enter the first number"
      />
      <br />

      {/* Conditionally render the second input field */}
      {["+", "-", "*", "/"].includes(operator) && (
        <>
          <label htmlFor="num2" className="form-label">
            Num2:
          </label>
          <input
            onChange={handleChangeSecond}
            type="number"
            value={numII}
            className="form-control"
            placeholder="Enter the second number"
          />
          <br />
        </>
      )}

      <label htmlFor="operator">Choose Operator:</label>
      <select onChange={handleOperatorChange} value={operator}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="sin">sin(x)</option>
        <option value="cos">cos(x)</option>
        <option value="tan">tan(x)</option>
        <option value="log">log(x)</option>
        <option value="sqrt">√x</option>
        <option value="square">x²</option>
      </select>
      <br />
      <br />
      <label htmlFor="result" className="form-label">
        Result:
      </label>
      <input
        type="text"
        value={result}
        className="form-control"
        placeholder="Result appears here"
        readOnly
      />
      <br />
      <button
        onClick={() => {
          // Reset the fields after calculation if necessary
          setNumI("");
          setNumII("");
          setOperator("+");
        }}
        className="border border-0 bg-success rounded-2 text-center text-white p-2 mt-3"
      >
        Reset Fields
      </button>
    </div>
  );
}

export default CalculatorProject;
