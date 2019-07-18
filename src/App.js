import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.pageLoad();
  }

  render() {
    const { isPinging, ping, drag } = this.props;
    return (
      <div>
        <h1>Redux Observable Demo</h1>
        <h2>is pinging: {isPinging.toString()}</h2>
        <button onClick={ping}>Start PING</button>
        <h3>You dragged for a total of {drag.toString()} pixels</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ ping: { isPinging }, drag }) => ({ isPinging, drag });
const mapDispatchToProps = {
  ping: () => ({ type: 'PING' }),
  pageLoad: () => ({ type: 'PAGELOAD' }),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);