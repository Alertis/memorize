import React, {Component} from 'react';
import { Container } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import Exam from '../component/exam';
import { showMessage } from "react-native-flash-message";
import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
import { Actions } from 'react-native-router-flux';
import ExamClass from '../class/exam';
import moment from "moment";

let service = new ExamClass()
const db = openDatabase({name : 'memorize.db'});

export default class ExamPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            answers: null
        }
    }

    listExamWords = () => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM vocabulary WHERE reminderDate=? and teach=1 and teachLevel<>4", [ moment(new Date()).format('YYYY-MM-DD')], (tx,res) => {
                var data=[];
                var answers=[]
                if(res.rows.length>0){
                    for (let i = 0; i < res.rows.length; i++) {
                        data.push(res.rows.item(i));
                        this.listAnswers(data[i].id,data[i].trMean,answers)
                  
                    }
                    this.setState({data : data})
                }
            },(err) => console.log(err));
        });
    }

    listAnswers = (id,trMean,answers) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM vocabulary WHERE id<>? ORDER BY random() limit 3", [ id ], (tx,res) => {
                if(res.rows.length>0){
                    for (let i = 0; i < res.rows.length; i++) {
                        answers.push(res.rows.item(i).trMean);
                    }
                    answers.push(trMean);
                    this.shuffleAnswers(answers);
                }
            },(err) => console.log(err));
        });
    }

    shuffleAnswers = (answers) => {
        var  j, temp;
        for (let i = answers.length-1; i>answers.length-4; i--){
            j=Math.floor(Math.random() * 3) + (answers.length-3);
            temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp;
        }                   
        this.setState({answers : answers})
    }

    chooseAnswer = (trueAnswer,answer, wordId, teachLevel, teachDate) =>{
        if(trueAnswer === answer){
            showMessage({
                message: "Tebrikler, Doğru cevap",
                icon: "success",
                type: "success",
                onPress: () =>{
                    service.updateAnsweredWord(wordId, true, teachLevel, teachDate);
                    Actions.refresh({key : Actions.exam()});

                }
              });
        }else{
            showMessage({
                message: "Üzgünüz. Yanlış cevap",
                description: "Doğru cevap : "+trueAnswer,
                icon: "danger",
                type:"danger",
                onPress: () =>{
                    service.updateAnsweredWord(wordId, false, teachLevel, teachDate);
                    Actions.refresh({key : Actions.exam()});
                }
              });
        }

    }

    componentDidMount(){
        this.listExamWords();
        
    }

    render(){
        
        return(
            <Container>
                <HeaderComp  title="Soruları Cevapla" />
                <Exam data={this.state.data} answers={this.state.answers} chooseAnswer={this.chooseAnswer} />
                <FooterMenu />
            </Container>
        );
    }


}