import React, {Component} from 'react';
import { Footer, FooterTab  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Menu from '../component/buttonMenu';
import moment from "moment";
import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';


const db = openDatabase({name : 'memorize.db'});
export default class FooterMenu extends Component{
    state ={
        count:0
    }
    componentDidMount(){
        this.countTestWords();
    }
    countTestWords = () => {
        db.transaction((tx) => {
            tx.executeSql("SELECT count(*) as countWords FROM vocabulary WHERE reminderDate<=? and teach=1 and teachLevel<>4", [ moment(new Date()).format('YYYY-MM-DD')], (tx,res) => {
                this.setState({count : res.rows.item(0).countWords})
            },(err) => console.log(err));
        });
    }
    render(){
        return( 
            <Footer>
                <FooterTab>
                    <Menu badge={this.state.count == 0 ? false : true} count={this.state.count} icon="pencil-ruler" title="TEST" clickMenu={() => ( Actions.exam())} />
                    <Menu badge={false} count="0" icon="language" title="KELİMELER" clickMenu={() => ( Actions.home())} />
                    <Menu badge={false} count="0" icon="bookmark" title="ÖĞRENDİKLERİM"  clickMenu={() => ( Actions.memorized())} />                  
                    
                </FooterTab>
            </Footer>
        )
    }
}

