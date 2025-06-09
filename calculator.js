function Calculator() {
  const [input, setInput] = React.useState('');
  const [history, setHistory] = React.useState([]);

  const addToInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setHistory((prev) => [...prev, input + ' = ' + result]);
      setInput(result.toString());
    } catch (error) {
      alert('Invalid Expression');
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="calculator">
      <div className="display">{input || '0'}</div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((char) => (
          <button
            key={char}
            className={['/', '*', '-', '+'].includes(char) ? 'operator' : ''}
            onClick={() => addToInput(char)}
          >
            {char}
          </button>
        ))}
        {['4', '5', '6', '*'].map((char) => (
          <button
            key={char}
            className={['/', '*', '-', '+'].includes(char) ? 'operator' : ''}
            onClick={() => addToInput(char)}
          >
            {char}
          </button>
        ))}
        {['1', '2', '3', '-'].map((char) => (
          <button
            key={char}
            className={['/', '*', '-', '+'].includes(char) ? 'operator' : ''}
            onClick={() => addToInput(char)}
          >
            {char}
          </button>
        ))}
        <button onClick={clearInput}>C</button>
        <button onClick={() => addToInput('0')}>0</button>
        <button onClick={calculate}>=</button>
        <button
          className="operator"
          onClick={() => addToInput('+')}
        >
          +
        </button>
      </div>

      {/* History Section */}
      <div style={{ marginTop: '20px', color: '#0f0' }}>
        <h3>History</h3>
        <button onClick={clearHistory} style={{ marginBottom: '10px' }}>
          Clear History
        </button>
        <ul>
          {history.length === 0 && <li>No calculations yet.</li>}
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<Calculator />, document.getElementById('root'));
