import React, {Component} from 'react';
import {Text} from 'react-native';
import { Content, List, ListItem, Icon, Item, Input, Header, Body } from 'native-base';


export default class Words extends Component {


    render(){
        console.log(this.props.data)
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
                                </ListItem>
                        ))
                    }
                    { this.props.data==null && <Text>Öğrenilen hiç kelime bulunamadı. Daha fazla çalışmalısın.</Text> }
                    
                </List>
            </Content>
        )
    }
}