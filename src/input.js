import React from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer class Input extends React.Component {

  static propTypes = {
    name: React.PropTypes.string,
    type: React.PropTypes.string,

    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
  };

  constructor(props) {
    super(props);
    ['KeyDown', 'Click', 'Blur' ].forEach( v => {
      this[`handle${v}`] = this[`handle${v}`].bind(this);
    });
  }

  @observable edited = false;

  handleClick(e) {
    e.preventDefault();
    this.edited = !this.edited;
  }

  handleKeyDown(e) {
    if(e.keyCode === 13){
      if(this.props.onChange){
        this.props.onChange(e);
      }
      this.edited = false;
    }
  }

  handleBlur(e){
    setTimeout(() => { this.edited = false }, 100);
  }

  render() {
    const { name, type, value } = this.props;
    const _input = {
      name, type, 
      defaultValue: value,
      onKeyDown: this.handleKeyDown,
      onBlur: this.handleBlur,
      style: {
        display: 'flex',
        width: '100%',
      }
    };
    return this.edited
    ? (<input autoFocus {..._input} />
    : (
      <span
        style={_input.style}
        onDblClick={this.handleClick}>{value}</span>
    );
  }
}

export default observer(Input);
