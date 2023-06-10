import FeedbackApp from '../FeedbackApp/Feedback';
import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = e => {
    const clickedBtn = e.currentTarget.id;
    this.setState(prevState => ({
      [clickedBtn]: prevState[clickedBtn] + 1,
    }));
  };

  render() {
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
        <FeedbackApp stats={this.state} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;
