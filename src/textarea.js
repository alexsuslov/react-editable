import React from 'react';

import Input from './input';

class TextArea extends Input {
  static propTypes = {
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,

    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  };

  render() {
    const { name, type, value } = this.props;
    const _input = {
      name, type,
      defaultValue: value,
      onKeyDown: this.handleKeyDown,
      onBlur: this.handleBlur,
      style: {
        width: this.width,
        height: this.height,
      }
    };
    return this.state.edited
    ? (<textarea autoFocus {..._input} />)
    : (<p ref="span"
        onDoubleClick={this.handleClick}>{value}</p>);
  }
}

export default TextArea;
