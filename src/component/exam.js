import React, {Component} from 'react';
import {Text, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, Card, CardItem, Body, Icon,Right, Left} from 'native-base';


export default class Exam extends Component {
    
    render(){
        console.log(this.props.answers)
        return(
            <Content>

                { 
                        this.props.data && this.props.data.map( item => (
                            <Card key={item.id}>
                                <CardItem bordered>
                                    <Body>
                                        <Text>
                                            <Text style={{fontWeight: "bold", fontSize:18}}>{item.enMean}</Text> kelimesinin türkçe karşılığı nedir ?
                                        </Text>
                                    </Body>
                                </CardItem>
                                {this.props.answers && this.props.answers.map(answer => (
                                     <CardItem bordered button onPress={() => ( this.props.chooseAnswer(item.trMean,answer,item.id) )}>
                                        <Left>
                                            <Icon type="FontAwesome5"  name="check" /*style={{ color: 'green'}}*//>
                                        </Left>
                                        <Text>{answer}</Text>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                ))}
             
                            </Card>
                        ))
                }
               
              
            </Content>
        )
    }
}