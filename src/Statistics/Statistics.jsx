import styles from '../Statistics/Statistics.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

const Statistics = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [isFeedback, setIsFeedback] = useState(false);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = (good / total) * 100;
    return `${Math.floor(percentage)}%`;
  };

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        setIsFeedback(true);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        setIsFeedback(true);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        setIsFeedback(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.statisticsDiv}>
      <h2>Please leave Feedback</h2>
      <FeedbackOptions onLeaveFeedback={handleFeedback} />
      {isFeedback ? (
        <>
          <h1> Statistics </h1>
          <div className={styles.container}>
            <span> Good: {good} </span>
            <span> Neutral: {neutral}</span>
            <span> Bad: {bad}</span>
            <span> Total: {countTotalFeedback()}</span>
            <span>Positive feedback: {countPositiveFeedbackPercentage()}</span>
          </div>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onFeedback: PropTypes.func,
  isFeedback: PropTypes.bool,
};

export default Statistics;
