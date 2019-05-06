import { openDatabase }from 'react-native-sqlite-storage';
import moment from "moment";

const db = openDatabase({name : 'memorize.db'});

export default class Exam {

    updateAnsweredWord(id, status, teachLevel, teachDate){
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
                        console.log(res)
                    },(err) => console.log(err));
                })   
            }else{
                db.transaction((tx) => {
                    tx.executeSql("UPDATE vocabulary SET  teachLevel=4 WHERE id=?",
                    [id], (tx,res) => {
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
