import React, {Component} from 'react';
import {Button, Icon,  Footer, FooterTab, Text, Badge,  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Menu from '../component/buttonMenu';

export default class FooterMenu extends Component{
    
    render(){
        return( 
            <Footer>
                <FooterTab>
                    <Menu badge="true" count="2" icon="pencil-ruler" title="TEST" clickMenu={() => ( Actions.exam())} />
                    <Menu badge={false} count="0" icon="language" title="KELİMELER" clickMenu={() => ( Actions.home())} />
                    <Menu badge={false} count="0" icon="bookmark" title="ÖĞRENDİKLERİM"  clickMenu={() => ( Actions.memorized())} />                  
                    
                </FooterTab>
            </Footer>
        )
    }
}

