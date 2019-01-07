import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import {fetchStream,deleteStream} from '../../actions/index';
import {connect} from 'react-redux';

class StreamDelete extends React.Component{

    componentDidMount=()=>{
        this.props.fetchStream(this.props.match.params.id)
    }

    onDelete=()=>{
        this.props.deleteStream(this.props.match.params.id);
    }

    renderActions=()=>{
        return (
                <React.Fragment>
                    <div onClick={this.onDelete} className="ui button negative">Delete</div>
                    <div onClick={()=>history.push('/')} className="ui button">cancel</div>
                </React.Fragment>
        )
    }


    renderContent(){
        if(!this.props.stream){
            return `Are you sure you want to delete Stream`
        }
        
        return `Are you sure you want to delete Stream with title ${this.props.stream.title}`
    }

    render(){
        console.log(this.props)
        return (
             <Modal
              title = "Delete Stream"
              content = {this.renderContent()}  
              actions = {this.renderActions()}
              onDismiss = {()=>history.push('/')} 
               />
        
    )
    
 }

}

const mapStateToProps = (state,ownProps)=>{
    // console.log(state);
    return {stream:state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps,{deleteStream,fetchStream})(StreamDelete);