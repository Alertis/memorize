import React, {Component} from 'react';
import { Container, Text } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import WordForm from '../component/addWordForm';
import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
import Data from '../DBHelper/data';

let service = new Data()

const db = openDatabase({name : 'memorize.db'});

export default class addWords extends Component {
    constructor(props){
        super(props);
        service.init();
    }

    save = (enMean, trMean, structor, sentence) => {
        service.addWord(enMean, trMean, structor, sentence);
    }

    update = (id, enMean, trMean, structor, sentence) => {
        service.updateWord(id, enMean, trMean, structor, sentence);
    }

    render(){
        console.log(this.props)
        return(
            <Container>
                <HeaderComp  title="Yeni Kelime Ekle" />
                <WordForm saveClick={this.save} updateClick={ this.update } words={this.props.words}/>
                <FooterMenu />
            </Container>
        );
    }


}