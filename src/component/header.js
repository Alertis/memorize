import React, {Component} from 'react';
import {Left, Body, Title, Right, Button, Icon, Header, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HeaderComp extends Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Header>
                <Left/>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                { this.props.icon &&
                <Right>
                    
                         <Button transparent onPress={() => Actions.add()}>
                            <Icon name={this.props.icon} />
                            <Text>EKLE</Text>
                        </Button>
                </Right>
                  }
            </Header>
        
        )    
    }
}