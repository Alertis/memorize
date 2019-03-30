import React, {Component} from 'react';
import { Button, Icon, Container, Content, Footer, FooterTab, Text, Badge,  } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';

export default class Main extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            records: []
        }
    
    }

    render(){
        return(
            <Container>
                <HeaderComp icon="menu" title="Kelimeler" />
                <Content />
                <FooterMenu />
            </Container>
        );
    }


}