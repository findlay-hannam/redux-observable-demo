import React from 'react';
import { connect } from 'react-redux';

let App = ({ isPinging, ping }) => (
  <div>
    <h1>is pinging: {isPinging.toString()}</h1>
    <button onClick={ping}>Start PING</button>
  </div>
);

const mapStateToProps = ({ isPinging }) => ({ isPinging });
const mapDispatchToProps = { ping: { type: 'PING' } };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);