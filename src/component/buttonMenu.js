import React, {Component} from 'react';
import {Button, Icon, Text, Badge,  } from 'native-base';

export default class Menu extends Component{

    render(){
        if(this.props.badge){
            return( 
                <Button badge vertical active={this.props.active} onPress={ () => (this.props.clickMenu(this.props.keyVal))}>
                    <Badge><Text> {this.props.count} </Text></Badge>
                    <Icon type="FontAwesome5" name={this.props.icon}/>
                    <Text>{this.props.title}</Text>
                </Button>
            )
        }else{
            return( 
                <Button vertical active={this.props.active} onPress={ () => (this.props.clickMenu(this.props.keyVal))}>
                    <Icon type="FontAwesome5" name={this.props.icon}/>
                    <Text>{this.props.title}</Text>
                </Button>
            ) 
        }
        
    }
}

