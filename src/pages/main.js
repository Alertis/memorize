import React, {Component} from 'react';
import { Container } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import Words from '../component/words';

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
                <Words />
                <FooterMenu />
            </Container>
        );
    }


}