import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from '../../actions/counter';

const Home = (props) => {
  const onIncrement = () => props.increment(props.count);
  const onIncrementAsync = () => props.incrementAsync(props.count);
  const onDecrement = () => props.decrement(props.count);
  const onDecrementAsync = () => props.decrementAsync(props.count);

  return (
    <div>
      <h1>Home</h1>
      <p>Count: {props.count}</p>
      <div>
        <button onClick={onIncrement} disabled={props.isIncrementing}>Increment</button>
        <button onClick={onIncrementAsync} disabled={props.isIncrementing}>Increment Async</button>
      </div>
      <div>
        <button onClick={onDecrement} disabled={props.isDecrementing}>Decrement</button>
        <button onClick={onDecrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
      </div>
      <div>
        <button onClick={() => props.changePage()}>Go to about page via redux</button>
      </div>
    </div>
  );
};

Home.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  isIncrementing: PropTypes.bool.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  changePage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
