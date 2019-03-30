import React, {Component} from 'react';
import {  Icon, Container, Header, Content, Footer, FooterTab, Button, Text, Badge, Left, Body, Title, Right } from 'native-base';


export default class Main extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            records: []
        }
    
    }

    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active badge vertical>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                       
                    </FooterTab>
                </Footer>
            </Container>
        );
    }


}