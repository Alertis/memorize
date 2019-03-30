import React, {Component} from 'react';
import {Button, Icon,  Footer, FooterTab, Text, Badge,  } from 'native-base';
import Menu from '../component/buttonMenu';

export default class FooterMenu extends Component{

    render(){
        return( 
            <Footer>
                <FooterTab>
                    <Menu badge="true" count="2" icon="pencil-ruler" title="TEST" />
                    <Menu badge={false} count="0" icon="language" title="KELİMELER" />
                    <Menu badge={false} count="0" icon="bookmark" title="ÖĞRENDİKLERİM" />                  
                    
                </FooterTab>
            </Footer>
        )
    }
}

