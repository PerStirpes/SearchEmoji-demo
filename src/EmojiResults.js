import React, {Component} from 'react';
import EmojiResultRow from './EmojiResultRow';

class EmojiResults extends Component {
  const {emojiData: {symbol, title }, emojiData} = this.props;

  render() {
    return (
      <div>
        {emojiData.map(emojiData => {
          return (
            <EmojiResultRow
              key={symbol}
              symbol={symbol}
              title={title}
            />
          );
        })}
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: React.PropTypes.array
};
export default EmojiResults;
