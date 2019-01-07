import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions/index';
import flv from 'flv.js';


class StreamShow extends React.Component{

    constructor(props){
        super(props);

        this.videoRef = React.createRef();
    }

    componentDidMount=()=>{
        this.props.fetchStream(this.props.match.params.id);
        this.buildPlayer();
    }

    componentDidUpdate=()=>{
        this.buildPlayer();
    }

    componentWillUnmount(){
        this.player.destroy();
    }

    buildPlayer=()=>{
        if(this.player || !this.props.stream){
            return ;
        }

        this.player = flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();

    }


    renderStream=()=>{
        if(!this.props.stream){
            return <div>Loading</div>;
        }

        return (
            <React.Fragment>
                <video ref={this.videoRef} controls style={{width:'100%'}}/>
                <h1>{this.props.stream.title}</h1>
                <h5 className="content">{this.props.stream.description}</h5>
            </React.Fragment>
        )
    }

    render(){
        return (
            <div>
                {this.renderStream()}
            </div>
        )
    }
}




const mapStateToProps = (state,ownProps)=>{
     return {stream:state.streams[ownProps.match.params.id]}
}


export default connect(mapStateToProps,{fetchStream})(StreamShow);