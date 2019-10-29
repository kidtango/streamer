import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  async componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id}>
          <i className='large middle aligned icon camera' />
          <div className='content'>
            {stream.title}
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.currentUserId);
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
      </div>
    );
  }
}

const actions = {
  fetchStreams
};

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  actions
)(StreamList);
