import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from '../components/Header';
import creatHistory from '../history';


const App = ()=>{
    return (
        <div className="ui container">
            <Router history={creatHistory}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/' exact component={StreamList}/>
                        <Route path='/streams/new' exact component={StreamCreate}/>
                        <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                        <Route path='/streams/:id' exact component={StreamShow}/>
                        <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;