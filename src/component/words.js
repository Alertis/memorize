import React, {Component} from 'react';
import {Text} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, List, ListItem, Left, Right, Icon, Item, Input, Header, Body, Button, Switch  } from 'native-base';

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
    render(){
        console.log(this.props.data)
        return(
            <Content>
               <Header searchBar>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Ara" />
                        <Icon name="ios-people" />
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
                                        <Icon type="FontAwesome5" name='edit' onPress={ () => ( this.editWord(item) ) } />
                                    </Button>
                                    <Switch value={item.teach==1 ? true : false } />
                                </ListItem>
                        ))
                    }
                    
                </List>
            </Content>
        )
    }
}