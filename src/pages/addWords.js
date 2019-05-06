import React, {Component} from 'react';
import { Container, Text } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import WordForm from '../component/addWordForm';
import Word from '../class/word';

let service = new Word()

export default class addWords extends Component {
    constructor(props){
        super(props);
    }

    save = (enMean, trMean, structor, sentence) => {
        service.addWord(enMean, trMean, structor, sentence);
    }

    update = (id, enMean, trMean, structor, sentence) => {
        service.updateWord(id, enMean, trMean, structor, sentence);
    }

    render(){
        return(
            <Container>
                <HeaderComp  title="Soru Kaydet" />
                <WordForm saveClick={this.save} updateClick={ this.update } words={this.props.words}/>
                <FooterMenu />
            </Container>
        );
    }


}