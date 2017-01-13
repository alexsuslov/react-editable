# React Editable

Make any content on page editable

## Demo 

https://alexsuslov.github.io/react-editable/index.html

## Use

```
import React, { Component } from 'react';
import { TextArea, Input } from '../react-editable/';
import './App.css';

const onChange = e => {
  const { name, value, type } = e.target;
  console.log({ name, value, type });
};

const props = {
  name: 'name',
  type: 'text',
  value:'value',
  onChange,
};

const props1 = {
  ...props,
  name: 'name',
  type: 'number',
  value: 2015,
}

const props2 = {
  ...props,
  name: 'name',
  value: `
Lorem Ipsum  Lorem Ipsum.`,
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input {...props}/>
        <hr />
        <Input {...props1}/>
        <hr />
        <TextArea {...props2}/>
      </div>
    );
  }
}

export default App;

```

## UI

- dblClick "value"
- type "new value"
- on press "Enter" execute "onChange" method

LOG:
```
Object {name: "name", value: "new value", type: "text"}
```
