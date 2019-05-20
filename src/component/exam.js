import React, {Component} from 'react';
import {Text, Alert} from 'react-native';
import { Content, Card, CardItem, Body, Icon,Right, Left} from 'native-base';


export default class Exam extends Component {
    constructor(props){
        super(props);
      }
    render(){        
        var count=-1;
        counter=()=>{
         count=count+1;
        }
        return(
            <Content>
                { 
                        this.props.data && this.props.data.map( item => (
                            <Card key={item.id}>
                            {counter()}
                                <CardItem bordered>
                                    <Body>
                                        <Text>
                                            <Text style={{fontWeight: "bold", fontSize:18}}>{item.enMean}</Text> kelimesinin türkçe karşılığı nedir ?
                                        </Text>
                                    </Body>

                                </CardItem>
                                {console.log(count)}
                                {
                                    this.props.answers && this.props.answers.slice(count*4,(count*4)+4).map(answer => (
                                     <CardItem bordered button onPress={() => ( this.props.chooseAnswer(item.trMean,answer,item.id, item.teachLevel, item.teachDate) )}>
                                        
                                     <Left>
                                         <Icon type="FontAwesome5"  name="check" />
                                     </Left>
                                     <Text>{answer}</Text>
                                     <Right>
                                         <Icon name="arrow-forward" />
                                     </Right>
                                 </CardItem>
                                ))
                                }
             
                            </Card>
                        ))
                }
                { this.props.data==null && <Text>Görüntülencek kelime yok. Lütfen daha sonra tekrar kontrol edin</Text>}
            </Content>
        )
    }
}