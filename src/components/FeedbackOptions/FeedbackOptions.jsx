import { Component } from 'react';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  handleFeedback = feedbackType => {
    this.props.onLeaveFeedback(feedbackType);
  };
  render() {
    return (
      <div className={styles.buttonSection}>
        <button
          className={styles.buttons}
          onClick={() => this.handleFeedback('good')}
        >
          Good
        </button>
        <button
          className={styles.buttons}
          onClick={() => this.handleFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={styles.buttons}
          onClick={() => this.handleFeedback('bad')}
        >
          Bad
        </button>
      </div>
    );
  }
}
