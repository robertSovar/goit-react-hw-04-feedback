import { Component } from 'react';
import styles from '../Statistics/Statistics.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

export default class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    isFeedback: false,
  };
  render() {
    const { isFeedback } = this.state;
    return (
      <div className={styles.statisticsDiv}>
        <h2>Please leave Feedback</h2>
        <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
        {isFeedback ? (
          <>
            <h1> Statistics </h1>
            <div className={styles.container}>
              <span> Good: {this.state.good} </span>
              <span> Neutral: {this.state.neutral}</span>
              <span> Bad: {this.state.bad}</span>
              <span> Total: {this.countTotalFeedback()}</span>
              <span>
                Positive feedback: {this.countPositiveFeedbackPercentage()}
              </span>
            </div>
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
  handleFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
      isFeedback: true,
    }));
  };

  countTotalFeedback() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    const percentage = (good / total) * 100;
    return `${Math.floor(percentage)}%`;
  }

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    onFeedback: PropTypes.func,
    isFeedback: PropTypes.bool,
  };
}
