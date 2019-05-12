import React, {Component} from 'react';
import { Container,Content, ListItem, Left, Right, Text, Radio } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import MemorizedWords from '../component/memorizedWords';
import { openDatabase }from 'react-native-sqlite-storage';


const db = openDatabase({name : 'memorize.db'});

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount(){
      this.selectMemorizedWords();
    }
    
    selectMemorizedWords = () => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM vocabulary WHERE teachLevel=4 ", [], (tx,res) => {
                var data=[];
                if(res.rows.length>0){
                    for (let i = 0; i < res.rows.length; i++) {
                        data.push(res.rows.item(i));
                    }
                    this.setState({data : data})
                }
            },(err) => console.log(err));
        });
    }

    searchWords = (search) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM vocabulary WHERE (trMean like ? or enMean like ? or sentence like ?) and teachLevel=4 ", ['%'+search+'%','%'+search+'%','%'+search+'%'], (tx,res) => {
                var data=[];
                if(res.rows.length>0){
                    for (let i = 0; i < res.rows.length; i++) {
                        data.push(res.rows.item(i));
                    }
                    this.setState({data : data})
                }else{
                    this.setState({data : null}) 
                }
            })
        })
    }
    render(){
        return(
            <Container>
                <HeaderComp title="Raporlar"   />
                <MemorizedWords data={this.state.data} refreshWords={this.selectMemorizedWords} search={this.searchWords}/>
                <FooterMenu />
            </Container>
        );
    }


}