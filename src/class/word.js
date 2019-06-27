import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
import { Actions } from 'react-native-router-flux';
import moment from "moment";
import pushSender from './pushSender';

const db = openDatabase({name : 'memorize.db'});
let Notification = new pushSender()
export default class Word {

    addWord(enMean, trMean, structor, sentence){
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO vocabulary (enMean, trMean, structor, sentence, teach, teachLevel) VALUES (?, ?, ?, ?, 0, 0)",
            [enMean, trMean, structor, sentence], (tx,res) => {
                Actions.home();
            },(err) => console.log(err));
        })
    }

    updateWord(id, enMean, trMean, structor, sentence){
        db.transaction((tx) => {
            tx.executeSql("UPDATE vocabulary SET enMean=?, trMean=?, structor=?, sentence=? WHERE id=?",
            [enMean, trMean, structor, sentence, id], (tx,res) => {
                Actions.home();
            },(err) => console.log(err));
        })
    }

    deleteWord(id){
        db.transaction((tx) => {
            tx.executeSql("DELETE FROM vocabulary WHERE id=?",
            [id], (tx,res) => {
                Actions.home();
            },(err) => console.log(err));
        })
    }

    updateTeachWord(id, teach, enMean){
        db.transaction((tx) => {
            tx.executeSql("UPDATE vocabulary SET teach=?, teachLevel=1, teachDate=?, reminderDate=? WHERE id=?",
            [teach, moment(new Date()).format('YYYY-MM-DD'), moment(new Date()).add(1, 'days').format('YYYY-MM-DD'), id], (tx,res) => {
                if(teach == 1)
                    Notification.SendNotification(enMean,  moment(new Date()).add(1, 'days').format('YYYY-MM-DD') );
            },(err) => console.log(err));
        })
    }


}