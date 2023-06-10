import PropTypes from 'prop-types';
import { BtnList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {Object.keys(options).map(key => (
        <Button key={key} id={key} type="button" onClick={onLeaveFeedback}>
          {key}
        </Button>
      ))}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
