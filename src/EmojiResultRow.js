import React from 'react';

class EmojiResultRow extends React.Component {
  render() {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div>
        <img alt={this.props.title} src={src} />
      </div>
    );
  }
}
EmojiResultRow.propTypes = {
  title: React.PropTypes.string,
  symbol: React.PropTypes.string
};
export default EmojiResultRow;
