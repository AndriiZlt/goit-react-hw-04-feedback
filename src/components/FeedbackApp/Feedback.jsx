import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
const FeedbackApp = ({ stats, clickHandler }) => {
  function countTotalFeedbacks() {
    return Object.values(stats).reduce((acc, item) => acc + item, 0);
  }

  function countPositiveFeedbackPercentage() {
    return countTotalFeedbacks() > 0
      ? Math.floor((stats.good / countTotalFeedbacks()) * 100) + '%'
      : 0 + '%';
  }

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stats} onLeaveFeedback={clickHandler} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedbacks() > 0 ? (
          <Statistics
            options={stats}
            totalFeedbacks={countTotalFeedbacks()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </div>
  );
};

export default FeedbackApp;

FeedbackApp.propTypes = {
  stats: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
