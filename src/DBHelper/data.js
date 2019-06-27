import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
import { Actions } from 'react-native-router-flux';
import moment from "moment";

const db = openDatabase({name : 'memorize.db'});

export default class Data {
    state = {
        words:null
    }
    init() {
        db.transaction((tx) => {
            tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='vocabulary'", [], (tx, res) => {
                if(res.rows.length == 0)
                    this.createDefaultData();
                else
                    this.deleteOldWords();                  
            })
        })
    }

    deleteOldWords(){
        db.transaction((tx) => {
            tx.executeSql("UPDATE vocabulary set teachLevel=1, teachDate=?, reminderDate=? WHERE reminderDate<? and teachLevel<>4", 
            [(new Date()).format('YYYY-MM-DD'), moment(new Date()).add(1, 'days').format('YYYY-MM-DD'),(new Date()).format('YYYY-MM-DD')],(tx,res) => {
            },(err) => console.log(err));
        })
    }

    createDefaultData(){
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS vocabulary("+
                    "id INTEGER PRIMARY KEY NOT NULL, "+
                    "trMean TEXT, "+
                    "enMean TEXT, "+
                    "structor TEXT, "+
                    "sentence TEXT, "+
                    "reminderDate TEXT, "+
                    "teachDate TEXT, "+
                    "teachLevel INTEGER, "+
                    "teach INTEGER "+
                ")", [],
                 (tx,res) => console.log("Database Created"),
                 (err) => console.log(err)
            )
        })
    }
   
   
}