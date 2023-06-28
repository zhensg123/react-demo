import React from 'react';

function NameComponent(props){
  return (
    <div color={props.color}>22--{props.color}</div>
  )
}


function withColor(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

const NameWithColor = withColor(NameComponent);

function App() {
  return (
    <div>
      <NameWithColor color="blue" />
    </div>
  );
}

export default App
