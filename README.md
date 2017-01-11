# React Editable

Make any content on page editable

## Demo 

https://alexsuslov.github.io/react-editable/index.html

## Use

```
import React from 'react';
import ReactEditable from '../react-editable/';


const testProps = {
  name: 'name',
  type: 'text',
  value:'value',
  onChange: e => {
    const { name, value, type } = e.target;
    console.log({ name, value, type });
  },
}

const App = props => (<div className="App">
  <ReactEditable {...testProps}/>
</div>);

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
