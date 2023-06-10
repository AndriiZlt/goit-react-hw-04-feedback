import FeedbackApp from '../FeedbackApp/Feedback';
import { useState } from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = e => {
    const clickedBtn = e.currentTarget.id;

    switch (clickedBtn) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error('What a fuck?');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        fontFamily: 'Roboto',
      }}
    >
      <FeedbackApp stats={{ good, neutral, bad }} clickHandler={clickHandler} />
    </div>
  );
}
