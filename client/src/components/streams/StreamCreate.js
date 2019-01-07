import React from 'react';
import {createStream} from '../../actions/index';
import StreamForm from './StreamForm';
import {connect} from 'react-redux'

class StreamCreate extends React.Component{

        onSubmit=(formValues)=>{
        this.props.createStream(formValues);
    }

    render(){
        return (
            <div>
               <h3>Create Stream</h3>
               <StreamForm onSubmit={this.onSubmit}/>
            </div>
            
            )
    }
}



export default connect(null,{createStream})(StreamCreate);
