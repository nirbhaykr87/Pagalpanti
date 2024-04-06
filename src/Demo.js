import React, { useState } from 'react';

function Programs() {
  const [program, setProgram] = useState('');
  const [output, setOutput] = useState('');

  // Interpreter function to execute the program
  function interpret(program) {
    // Check if the program starts with "start karo"
    if (!program.trim().startsWith('start karo')) {
      setOutput('Error: Program must start with "start karo"');
      return; // Exit early if program is invalid
    }

    // Check if the program ends with "ok bye"
    if (!program.trim().endsWith('ok bye;')) {
      setOutput('Error: Program must end with "ok bye"');
      return; // Exit early if program is invalid
    }

    const statements = program.split(';'); // Split program into individual statements
    let variables = {}; // Store variables in an object
    let result = ''; // Store the output

    // Loop through each statement in the program
    for (let statement of statements) {
      statement = statement.trim(); // Trim whitespace

      if (statement.startsWith('start karo')) {
        continue; // Skip "start karo" statement
      }

      if (statement.startsWith('ok bye')) {
        break; // End program on "ok bye"
      }

      // Check the statement type based on keywords
      if (statement.startsWith('maan lo')) {
        // Variable declaration: maan lo variable_name = value;
        const parts = statement.substring(7).trim().split('=');
        const variableName = parts[0].trim();
        const value = parts[1].trim();
        variables[variableName] = parseInt(value); // Store variable as integer
      } else if (statement.startsWith('likho')) {
        // Print statement: likho expression;
        const expression = statement.substring(5).trim();
        const outputText = evaluateExpression(expression, variables);
        result += outputText + '\n'; // Append to output
      } else if (statement.startsWith('agar')) {
        // If statement: agar (condition) { statements }
        const conditionBlock = statement.substring(4).trim();
        const condition = conditionBlock.split('{')[0].trim();
        const statementsBlock = conditionBlock.split('{')[1].split('}')[0].trim();

        const conditionResult = evaluateCondition(condition, variables);

        if (conditionResult) {
          result += interpret(statementsBlock) + '\n'; // Recursively interpret if-block statements
        }
      } else if (statement.startsWith('warna')) {
        // Else statement: warna { statements }
        const statementsBlock = statement.substring(5).trim();
        result += interpret(statementsBlock) + '\n'; // Recursively interpret else-block statements
      }
    }

    return result.trim(); // Return collected output
  }

  // Function to evaluate arithmetic or variable expressions
  function evaluateExpression(expression, variables) {
    // Replace variable names with their values in the expression
    const replacedExpression = expression.replace(/[a-zA-Z]+/g, (match) => {
      const variableValue = variables[match.trim()];
      return variableValue !== undefined ? variableValue : match; // Replace with value if variable exists
    });

    // Evaluate the replaced expression using eval() (for arithmetic operations)
    return eval(replacedExpression);
  }

  // Function to evaluate conditions
  function evaluateCondition(condition, variables) {
    // Replace variable names with their values in the condition
    const replacedCondition = condition.replace(/[a-zA-Z]+/g, (match) => {
      const variableValue = variables[match.trim()];
      return variableValue !== undefined ? variableValue : match; // Replace with value if variable exists
    });

    // Evaluate the replaced condition using eval() (for comparison)
    return eval(replacedCondition);
  }

  // Event handler for running the program
  const runProgram = () => {
    try {
      const result = interpret(program);
      if (result !== undefined) {
        setOutput(result); // Update output state with interpreted result
      }
    } catch (error) {
      console.error('Error interpreting program:', error);
      setOutput('Error: Invalid program'); // Display error message in output
    }
  };

  return (
    <div>
      <h2>Toy Language Interpreter</h2>
      <textarea
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        rows={10}
        cols={50}
        placeholder="Enter your program here..."
      />
      <br />
      <button onClick={runProgram}>Run Program</button>
      <hr />
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default Programs;




















<div className="container">
<h2>Toy Language Interpreter</h2>
<textarea
  value={inputProgram}
  onChange={(e) => setInputProgram(e.target.value)}
  placeholder="Enter your program here..."
  rows="5"
  style={{ width: '100%' }}
></textarea>
<button className="btn btn-primary mt-2" onClick={runProgram}>
  Run Program
</button>
{output && (
  <div className="mt-3">
    <h4>Output:</h4>
    <textarea
      value={output}
      readOnly
      rows="3"
      style={{ width: '100%', resize: 'none' }}
    ></textarea>
  </div>
)}
</div>