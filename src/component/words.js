import React, {Component} from 'react';
import {Text, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, List, ListItem, Left, Right, Icon, Item, Input, Header, Body, Button, Switch  } from 'native-base';
import Word from '../class/word';

let service = new Word()


export default class Words extends Component {
    editWord = (item) => {
        Actions.add({
            words:{
                id : item.id,
                enWord : item.enMean,
                trWord : item.trMean,
                structor : item.structor,
                sentence : item.sentence
            }
            
        })
    }
    deleteWord = (item) => {
        Alert.alert("Dikkat!", item.trMean + " - "+ item.enMean + " kelimesini silmek istediğinize emin misiniz ?", [
            {text : 'Evet, Sil', onPress : () => service.deleteWord(item.id)},
            {text : 'Hayır, Vazgeç', style: 'cancel'}
        ])
       
    }
    
    updateTeachWord = (item) => {
        service.updateTeachWord(item.id,item.teach == 1 ? 0 : 1);
        this.props.refreshWords();
    }

    render(){
        return(
            <Content>
               <Header searchBar>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Ara" onChangeText={val => (this.props.search(val))}/>
                        <Icon type="FontAwesome5" name="language" />
                    </Item>
               </Header>
               <List>
                    { 
                        this.props.data && this.props.data.map( item => (
                            
                                <ListItem key={item.id} >
                                    <Body>
                                        <Text style={{ fontWeight: "600" }}>{item.enMean} - {item.trMean}</Text>
                                        <Text note numberOfLines={1}>{item.structor} - {item.sentence} </Text>
                                    </Body>
                                    <Button iconLeft transparent primary>
                                        <Icon type="FontAwesome5" name='trash' onPress={ () => ( this.deleteWord(item) ) } />
                                    </Button>
                                    <Button iconLeft transparent primary>
                                        <Icon type="FontAwesome5" name='edit' onPress={ () => ( this.editWord(item) ) } />
                                    </Button>
                                    <Switch value={item.teach==1 ? true : false } onValueChange={ () => (  this.updateTeachWord(item) )} />
                                </ListItem>
                        ))
                    }
                    { this.props.data==null && <Text>Görüntülencek kelime yok. Lütfen daha fazla kelime ekleyin.</Text> }
                    
                </List>
            </Content>
        )
    }
}