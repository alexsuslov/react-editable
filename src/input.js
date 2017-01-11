import React from 'react';

class Input extends React.Component {
  static propTypes = {
    onChange: React.PropTypes.func,
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

  state = {
    edited: false
  };

  handleClick(e) {
    e.preventDefault();
    this.setState({ edited: !this.state.edited});
  }

  handleKeyDown(e) {
    if(e.keyCode === 13){
      if(this.props.onChange){
        this.props.onChange(e);
      }
      this.setState({ edited: false});
    }
  }

  handleBlur(e){
    setTimeout(() => { this.setState({ edited: false}); }, 200);
  }
  componentDidMount(){
    this.width = this.refs.span.offsetWidth;
    this.height = this.refs.span.offsetHeight;
  }

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
    ? (<input autoFocus {..._input} />)
    : (<span ref="span"
        onDoubleClick={this.handleClick}>{value}</span>);
  }
}

export default Input;
