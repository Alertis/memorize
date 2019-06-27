import { openDatabase }from 'react-native-sqlite-storage';
import moment from "moment";
import pushSender from './pushSender';

const db = openDatabase({name : 'memorize.db'});
let Notification = new pushSender()

export default class Exam {

    updateAnsweredWord(id, status, teachLevel, teachDate, enMean){
        if(status === true){
            var days;
            switch(teachLevel){
                case 1 :
                   days=7;
                   break;
                case 2 :
                    days=30;
                    break;
                case 3 :
                    days=180;
                    break;
                default : 
                    days=0;
                    break; 
            }
            if(days !== 0){
                db.transaction((tx) => {
                    tx.executeSql("UPDATE vocabulary SET  teachLevel=?,  reminderDate=? WHERE id=?",
                    [teachLevel+1, moment(teachDate).add(days, 'days').format('YYYY-MM-DD'), id], (tx,res) => {
                        Notification.SendNotification(enMean, moment(teachDate).add(days, 'days').format('YYYY-MM-DD') );
                    },(err) => console.log(err));
                })   
            }else{
                db.transaction((tx) => {
                    tx.executeSql("UPDATE vocabulary SET  teachLevel=4, teachDate=? WHERE id=?",
                    [moment(new Date()).format('YYYY-MM-DD'),id], (tx,res) => {
                        console.log(res)
                    },(err) => console.log(err));
                })   
            }
        }else{
            db.transaction((tx) => {
                tx.executeSql("UPDATE vocabulary SET teachLevel=1, teachDate=?, reminderDate=? WHERE id=?",
                [ moment(new Date()).format('YYYY-MM-DD'), moment(new Date()).add(1, 'days').format('YYYY-MM-DD'), id], (tx,res) => {
                    console.log(res)
                },(err) => console.log(err));
            })
        }
    }
}
