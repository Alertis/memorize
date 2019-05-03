import React, {Component} from 'react';
import {Button, Icon,  Footer, FooterTab, Text, Badge,  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Menu from '../component/buttonMenu';

export default class FooterMenu extends Component{
    
    state = {
        test : false,
        words : true,
        memorized : false 
    }
    activeMenu = (key) =>{
        
        switch (key) {
            case 'test' : 
                Actions.exam()
                break;
            case 'words' : 
                Actions.home()
                break;
        } 
        this.setState({ test : false, words : false, memorized : false})
        this.setState({[key] : true})
    }
    render(){
        return( 
            <Footer>
                <FooterTab>
                    <Menu badge="true" count="2" icon="pencil-ruler" title="TEST" keyVal="test" active={this.state.test} clickMenu={this.activeMenu} />
                    <Menu badge={false} count="0" icon="language" title="KELİMELER" keyVal="words" active={this.state.words} clickMenu={this.activeMenu} />
                    <Menu badge={false} count="0" icon="bookmark" title="ÖĞRENDİKLERİM" keyVal="memorized" active={this.state.memorized} clickMenu={this.activeMenu} />                  
                    
                </FooterTab>
            </Footer>
        )
    }
}

