import React, {Component} from 'react';
import { Container } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import Words from '../component/words';
import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
//import Data from '../DBHelper/data';

//let service = new Data()

const db = openDatabase({name : 'memorize.db'});

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount(){
      this.selectWords();
    }
    selectWords = () => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM vocabulary", [], (tx,res) => {
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
    render(){
        return(
            <Container>
                <HeaderComp icon="add" title="Kelimeler"  />
                <Words data={this.state.data} refreshWords={this.selectWords}/>
                <FooterMenu />
            </Container>
        );
    }


}