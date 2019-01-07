import React from 'react';
import {Field,reduxForm} from 'redux-form';


class StreamForm extends React.Component{

    renderError({error,touched}){
        if(error && touched){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = (formsProps)=>{
        return (
            <div className="field">
                <label>{formsProps.label}</label>
                <input autoComplete="off" value={formsProps.input.value} onChange={formsProps.input.onChange}/>
                <div>{this.renderError(formsProps.meta)}</div>
            </div>
        )
    }

    onSubmit=(formValues)=>{
        this.props.onSubmit(formValues);
    }

    render(){
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.renderInput} label="Enter Title"/>
                    <Field name="description" component={this.renderInput} label="Enter Description"/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
            
            )
    }
}


const validate = (formValues)=>{
    const error = {};

    if(!formValues.title){
        error.title='Please enter a valid Title'
    }

    if(!formValues.description){
        error.description='Please enter valid description'
    }

    return error;
}



export default reduxForm({
    form:'streamCreate',
    validate:validate
})(StreamForm);

