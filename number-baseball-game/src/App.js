import { useState, useEffect } from 'react';
import './App.css';
import { generateRandomNumber } from './random';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    console.log(randomNumber);
  }, [randomNumber]);

  const handleAnswerChanged = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    // 스트라이크, 볼, 정답 유무 확인

    const answers = answer.split('').map((item) => Number(item));

    const { strike, ball } = randomNumber.reduce(
      (prev, cur, index) => {
        // 같은 자리에 같은 수가 존재하면 스트라이크
        if (answers[index] === cur) {
          return {
            ...prev,
            strike: prev.strike + 1,
          };
        }
        // 다른 자리에 수가 존재하면 볼
        if (answers.includes(cur)) {
          return {
            ...prev,
            ball: prev.ball + 1,
          };
        }

        return prev;
      },
      {
        strike: 0,
        ball: 0,
      }
    );

    console.log(strike, ball);
  };

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">{randomNumber}</header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged} />
        <button onClick={handleSubmit}>맞춰보기</button>
      </section>
      <h2>기록</h2>
      <ol>
        <li>1234 (strike: 0, ball: 2)</li>
        <li>4567 (strike: 1, ball: 1)</li>
        <li>7869 (strike: 1, ball: 1)</li>
      </ol>
    </div>
  );
}

export default App;
