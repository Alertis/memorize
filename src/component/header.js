import React, {Component} from 'react';
import {Left, Body, Title, Right, Button, Icon, Header} from 'native-base';

export default class HeaderComp extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name={this.props.icon} />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        )    
    }
}