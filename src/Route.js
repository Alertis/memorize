import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './pages/main'
import AddWords from './pages/addWords'

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Scene key="root">
                    <Scene key="home" component={Main} hideNavBar initial={true}/>
                    <Scene key="add" component={AddWords} hideNavBar />

                </Scene>
            </Router>
        );
    }
}