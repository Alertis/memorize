import React, {Component} from 'react';
import { Button, Icon, Container, Content, Footer, FooterTab, Text, Badge,  } from 'native-base';
import HeaderComp from '../component/header';

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
                <HeaderComp icon="menu" title="Kelimeler" />
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