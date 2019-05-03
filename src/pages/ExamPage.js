import React, {Component} from 'react';
import { Container } from 'native-base';
import HeaderComp from '../component/header';
import FooterMenu from '../component/footerMenu';
import Exam from '../component/exam';
import FlashMessage,{ showMessage, hideMessage } from "react-native-flash-message";
import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
import moment from "moment";

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
            tx.executeSql("SELECT * FROM vocabulary WHERE reminderDate<? and teach=1", [ moment(new Date()).format('YYYY-MM-DD')], (tx,res) => {
                var data=[];
                
                if(res.rows.length>0){
                    for (let i = 0; i < res.rows.length; i++) {
                        data.push(res.rows.item(i));
                        db.transaction((tx) => {
                            var answers=[]
                            tx.executeSql("SELECT * FROM vocabulary WHERE id<>? ORDER BY random() limit 3", [ data[i].id ], (tx,res) => {
                                if(res.rows.length>0){
                                    for (let i = 0; i < res.rows.length; i++) {
                                        answers.push(res.rows.item(i).trMean);
                                    }
                                    answers.push(data[i].trMean);
                                    var  j, temp;
                                    for (let i = answers.length-1; i>0; i--){
                                    console.log('answers')

                                        j=Math.floor(Math.random() * (i+1));
                                        temp = answers[i];
                                        answers[i] = answers[j];
                                        answers[j] = temp;
                                    }
                                    this.setState({answers : answers})
                                }
                            },(err) => console.log(err));
                        });
                    }
                    this.setState({data : data})
                }
            },(err) => console.log(err));
        });
    }

    listAnswers = (id) => {
        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM vocabulary WHERE id<>? ORDER BY random() limit 3", [ id ], (tx,res) => {
                var data=[];
                if(res.rows.length>0){
                    for (let i = 0; i < res.rows.length; i++) {
                        data.push(res.rows.item(i));
                    }S
                    this.setState({answers : data})
                }
            },(err) => console.log(err));
        });
    }

    chooseAnswer = (trueAnswer,answer, wordId) =>{
        if(trueAnswer === answer){
            showMessage({
                message: "Tebrikler, Doğru cevap",
                icon: "success",
                type: "success",
                onPress: () =>{

                }
              });
        }else{
            showMessage({
                message: "Üzgünüz. Yanlış cevap",
                description: "Doğru cevap : "+trueAnswer,
                icon: "danger",
                type:"danger"
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
                <Exam data={this.state.data} answers={this.state.answers} answerFetch={this.listAnswers} chooseAnswer={this.chooseAnswer} />
                <FooterMenu />
            </Container>
        );
    }


}