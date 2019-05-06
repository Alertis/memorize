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
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('go', 'gitmek', 'fiil', 'I am going to be late for work', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('look', 'bakmak', 'fiil', 'people were looking at him', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('be', 'olmak', 'fiil', 'the exhibition will be in November', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('begin', 'başlatmak', 'fiil', 'it is a good place to begin', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('üflemek', 'blow', 'fiil', 'A little puff is enough to make it fall.', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('kırmak', 'break', 'fiil', 'the rope broke with a loud snap', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('getirmek', 'bring', 'fiil', 'she brought Luke home from the hospital', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('yayımlamak', 'broadcast', 'fiil', 'the announcement was broadcast live', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('inşa etmek', 'build', 'fiil', 'the factory was built in 1936', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('patlatmak', 'burst', 'fiil', ' Robbins said that he had experienced a sudden burst of artistic activity.', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('satın almak', 'buy', 'fiil', 'the wine is a good buy at $3.49', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('seçmek', 'choose', 'fiil', 'he chose a seat facing the door', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('gelmek', 'come', 'fiil', 'Jessica came into the kitchen', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('almak', 'take', 'fiil', 'he leaned forward to take her hand', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('yazmak', 'write', 'fiil', 'he wrote his name on the paper', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('koymak', 'put', 'fiil', 'Harry put down his cup', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('içmek', 'drink', 'fiil', 'we sat by the fire, drinking our coffee', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('saymak', 'count', 'fiil', 'I started to count the stars I could see', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('çizmek', 'draw', 'fiil', 'he drew a map', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('uyumak', 'sleep', 'fiil', 'I was on the verge of sleep', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('yemek', 'eat', 'fiil', 'he was eating a hot dog', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('yardım', 'help', 'isim', 'I asked for help from my neighbors', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('sürmek', 'drive', 'fiil', 'he got into his car and drove off', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Pazartesi', 'Monday', 'isim', 'I saw him on Monday', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Salı', 'Tuesday', 'isim', 'come to dinner on Tuesday', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Çarşamba', 'Wednesday', 'isim', 'a report goes before the councilors on Wednesday', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Perşembe', 'Thursday', 'isim', 'the committee met on Thursday', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Cuma', 'Friday', 'isim', 'he was arrested on Friday', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Cumartesi', 'Saturday', 'isim', 'I am going to see Twelfth Night on Saturday', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Pazar', 'Sunday', 'isim', 'they left town on Sunday', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Ocak', 'January', 'isim', 'Sophie was two in January', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Şubat', 'February', 'isim', 'even in February the place is busy', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Mart', 'March', 'isim', 'the work was completed in March', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Nisan', 'April', 'isim', 'the prison was to close in April', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Mayıs', 'May', 'isim', 'the new model makes its showroom debut in May', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Haziran', 'June', 'isim', 'the roses flower in June', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Temmuz', 'July', 'isim', 'I had a letter from him in July', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Ağustos', 'August', 'isim', 'the sultry haze of late August', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Eylül', 'September', 'isim', 'sow the plants in early September', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Ekim', 'October', 'isim', 'the project started in October', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Kasım', 'November', 'isim', 'the store opened in November', 0, 0)");
            tx.executeSql("INSERT INTO vocabulary ( trMean, enMean, structor, sentence, teach, teachLevel) VALUES ('Aralık', 'December', 'isim', 'the fuel shortage worsened during December', 0, 0)");
   
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

    updateTeachWord(id, teach){
        db.transaction((tx) => {
            tx.executeSql("UPDATE vocabulary SET teach=?, teachLevel=1, teachDate=?, reminderDate=? WHERE id=?",
            [teach, moment(new Date()).format('YYYY-MM-DD'), moment(new Date()).add(1, 'days').format('YYYY-MM-DD'), id], (tx,res) => {
                console.log(res)
            },(err) => console.log(err));
        })
    }
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
            console.days
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