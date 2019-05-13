import React, {Component} from 'react';
import { Container,Content, ListItem, Left, Right, Text, Radio } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import MemorizedWords from '../component/memorizedWords';
import { openDatabase }from 'react-native-sqlite-storage';


const db = openDatabase({name : 'memorize.db'});

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    render(){
        return(
            <Container>
                <HeaderComp title="Raporlar"   />
                <MemorizedWords />
                <FooterMenu />
            </Container>
        );
    }


}