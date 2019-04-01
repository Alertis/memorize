import React, {Component} from 'react';
import {Text} from 'react-native'
import { Content, List, ListItem, Left, Right, Icon, Item, Input, Header, Body, Button, Switch  } from 'native-base';

export default class Words extends Component {
    render(){
        return(
            <Content>
               <Header searchBar>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
               </Header>
               <List>
                    <ListItem iconLeft >
                           
                        <Body>
                            <Text style={{ fontWeight: "600" }}>Apple - Elma</Text>
                            <Text note numberOfLines={1}>Zarf - Elma ile ilgili bir cümle </Text>
                        </Body>
                        <Button iconLeft transparent primary>
                                <Icon type="FontAwesome5" name='edit' />
                            </Button>
                        <Switch value={false} />
                    </ListItem>
                </List>
            </Content>
        )
    }
}