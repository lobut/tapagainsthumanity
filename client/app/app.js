var React = require('react');
var ReactDOM = require('react-dom');

class HelloMessage extends React.Component {
  render() {
    return <div>Hello world!</div>;
  }
}

(function() {
  ReactDOM.render(<HelloMessage name="Sebastian" />, document.getElementById('robertface'));
})();
