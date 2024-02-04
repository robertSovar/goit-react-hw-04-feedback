import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const handleFeedback = type => {
    onLeaveFeedback(type);
  };
  return (
    <div className={styles.buttonSection}>
      <button className={styles.buttons} onClick={() => handleFeedback('good')}>
        Good
      </button>
      <button
        className={styles.buttons}
        onClick={() => handleFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.buttons} onClick={() => handleFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
