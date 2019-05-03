import React, {Component} from 'react';
import {Text, Alert} from 'react-native'
import { Content, Form, Label, Left, Right, Icon, Item, Input, Header, Body, Button, Switch  } from 'native-base';

export default class WordForm extends Component {
    state = {
        enWord : this.props.words ? this.props.words.enWord : '',
        trWord : this.props.words ? this.props.words.trWord : '',
        structor : this.props.words ? this.props.words.structor : '',
        sentence : this.props.words ? this.props.words.sentence : '',
        id : this.props.words ? this.props.words.id : null
    }
    saveClick = () =>{
        console.log(this.state);
        if(this.state.enWord == '' || this.state.trWord == '' || this.state.structor == '')
            Alert.alert('DİKKAT !','Lütfen formdaki boş alanları doldurunuz!')
        else{
            if(this.state.id == null)
                this.props.saveClick(this.state.enWord, this.state.trWord, this.state.structor, this.state.sentence);
            else
                this.props.updateClick(this.state.id,this.state.enWord, this.state.trWord, this.state.structor, this.state.sentence)
        }
    }

    render(){
      
        return(
            <Content>
               <Form>
                    <Item stackedLabel>
                        <Label>Kelime (İngilizce)</Label>
                        <Input value={this.state.enWord} onChangeText={val => this.setState({ enWord: val })} />
                    </Item>
                    <Item stackedLabel >
                        <Label>Kelime (Türkçe)</Label>
                        <Input value={this.state.trWord} onChangeText={val => this.setState({ trWord: val })}  />
                    </Item>
                    <Item stackedLabel >
                        <Label>Kelimenin Yapısı (Zarf, Fiil ...)</Label>
                        <Input  value={this.state.structor} onChangeText={val => this.setState({ structor: val })} />
                    </Item>
                    <Item stackedLabel last >
                        <Label>Kelime ile ilgili cümle (isteğe bağlı)</Label>
                        <Input  value={this.state.sentence} onChangeText={val => this.setState({ sentence: val })} />
                    </Item>
                </Form>

                <Button block info style={{ marginTop:25}} onPress={this.saveClick}>
                    <Text style={{color:'white'}}>Kaydet</Text>
                </Button>
            </Content>
        )
    }
}