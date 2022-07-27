import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions'; 

class StreamDelete extends React.Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  deleteStream = (id) => {
    this.props.deleteStream(id);
  }

  renderActions = () => {

    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button className='ui button negative' onClick={() => this.deleteStream(id)}>
          Delete
        </button>
        <Link to="/" className='ui button'>
          Cancel
        </Link>
      </React.Fragment>
    )
  };

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream';
    }
      return `Are you sure you want to delete ${this.props.stream.title}`;
  }

  onDismiss = () => {
    history.push('/');
  }

  render() {
    return (
      <Modal 
      header="Delete stream" 
      content={this.renderContent()} 
      actions={this.renderActions()} 
      onDismiss={this.onDismiss} />
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {stream : state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);