import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './pages/main'
import AddWords from './pages/addWords'
import ExamPage from './pages/examPage'
import Memorized from './pages/memorized'
import FlashMessage from "react-native-flash-message";

export default class Routes extends Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <Scene key="root">
                        <Scene key="home" component={Main} hideNavBar initial={true}/>
                        <Scene key="add" component={AddWords} hideNavBar />
                        <Scene key="exam" component={ExamPage} hideNavBar />
                        <Scene key="memorized" component={Memorized} hideNavBar />
                    </Scene>
                </Router>
                <FlashMessage position="center" autoHide={false} />  
            </React.Fragment>
        );
    }
}