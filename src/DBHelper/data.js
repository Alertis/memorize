import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
import { Actions } from 'react-native-router-flux';

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
                    console.log("Already exist database!")
            })
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
    addWord(enMean, trMean, structor, sentence){
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO vocabulary (enMean, trMean, structor, sentence, teach, teachLevel) VALUES (?, ?, ?, ?, 0, 0)",
            [enMean, trMean, structor, sentence], (tx,res) => {
                Actions.home();
            },(err) => console.log(err));
        })
    }
}