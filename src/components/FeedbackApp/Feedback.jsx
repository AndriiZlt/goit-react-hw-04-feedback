import PropTypes from 'prop-types';
import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
class FeedbackApp extends React.Component {
  countTotalFeedbacks() {
    return Object.values(this.props.stats).reduce((acc, item) => acc + item, 0);
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedbacks() > 0
      ? Math.floor((this.props.stats.good / this.countTotalFeedbacks()) * 100) +
          '%'
      : 0 + '%';
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.props.stats}
            onLeaveFeedback={this.props.clickHandler}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedbacks() > 0 ? (
            <Statistics
              options={this.props.stats}
              totalFeedbacks={this.countTotalFeedbacks()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackApp;

FeedbackApp.propTypes = {
  stats: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
