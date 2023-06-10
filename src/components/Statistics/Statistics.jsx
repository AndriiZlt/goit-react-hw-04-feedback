import PropTypes from 'prop-types';
import { StatList, Stat } from './Statistics.styled';

export const Statistics = ({ options, totalFeedbacks, positivePercentage }) => {
  return (
    <StatList>
      <Stat>
        Good: <span>{options.good}</span>
      </Stat>
      <Stat>
        Neutral: <span>{options.neutral}</span>
      </Stat>
      <Stat>
        Bad: <span>{options.bad}</span>
      </Stat>
      <Stat>
        Total: <span>{totalFeedbacks}</span>
      </Stat>
      <Stat>
        Positive feedbacks: <span>{positivePercentage}</span>
      </Stat>
    </StatList>
  );
};

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
