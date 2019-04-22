import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';

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

     selectVocabulary = () => {
        
       console.log( db.transaction((tx) => {        
            //return "asd";
           return tx.executeSql("SELECT * FROM vocabulary", [], rowsData(tx,res),(err) => console.log(err));
        }));

        function rowsData(tx,res){
            var data=[];
            var len = res.rows.length;
            for (let i = 0; i < len; i++) {
                let row = res.rows.item(i);
                data.push(row);
            }
            return data;
        }
        //console.log(data)
        //return data;
    }
}


/*

 selectVocabulary = () => {
       
        db.transaction((tx) => {
            //return "asd";
           tx.executeSql("SELECT * FROM vocabulary", [], (tx,res) => {
                var data=[];
                if(res.rows.length>0){
                    for (let i = 0; i < res.rows.length; i++) {
                        //console.log(res.rows.item(i))
                        data.push(res.rows.item(i));
                    }
                }else{
                    tx.executeSql("INSERT INTO vocabulary (trMean, enMean, structor, sentence, reminderDate, teachDate, teachLevel, teach)"+
                    "VALUES ('elma', 'apple', 'isim', 'I want to eat apple pie.', '', '', 0, 0 )", [], 
                    (tx,res) => console.log(res), 
                    (err) => console.log(err) );
                }
            },(err) => console.log(err));
        });
        console.log(this.state.words)
        //return data;
    }
    
*/