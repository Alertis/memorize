import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import { Content, Tabs, Tab, Text, TabHeading, DatePicker, View, Left, Right, Button, Body } from 'native-base';
import PureChart from 'react-native-pure-chart';
import { openDatabase,deleteDatabase }from 'react-native-sqlite-storage';
import moment from "moment";

const db = openDatabase({name : 'memorize.db'});

export default class Words extends Component {
    state = {
        startDate : null,
        finishDate : null,
        data: null
    }
    calculateReport = (reportType) =>{
        if(this.state.startDate && this.state.finishDate){
            db.transaction((tx) => {
                tx.executeSql("SELECT * FROM vocabulary WHERE teachDate between ? and ?", 
                [moment(this.state.startDate).format('YYYY-MM-DD'), moment(this.state.finishDate).format('YYYY-MM-DD') ], (tx,res) => {
                    if(res.rows.length>0){
                        if(reportType=="daily")
                            this.dailyGraphic(res.rows.length, res.rows);                        
                        else if (reportType=="monthly")
                            this.monthlyGraphic(res.rows.length, res.rows);
                    }
                },(err) => console.log(err));
            });

        }
    }
  
    monthlyGraphic = (length, rows) => {
        var jan=0, feb=0, mar=0, apr=0, may=0, jun=0, jul=0, aug=0, sep=0, oct=0, nov=0, dec=0;
        for (let i = 0; i < length; i++) {
            console.log(rows)
            switch (moment(rows.item(i).teachDate).format('MMMM')){
                case 'January' :
                    jan++;
                    break;
                case 'February' :
                    feb++;
                    break;
                case 'March' :
                    mar++;
                    break;
                case 'April' :
                    apr++;
                    break;
                case 'May' :
                    may++;
                    break;
                case 'June' :
                    jun++;
                    break;
                case 'July' :
                    jul++;
                    break;
                case 'August' :
                    aug++;
                    break;
                case 'September' :
                    sep++;
                    break;
                case 'October' :
                    oct++;
                    break;
                case 'Novomber' :
                    nov++;
                    break;
                case 'December' :
                    dec++;
                    break;
                default :
                    console.log(moment(rows.item(i).teachDate).format('MMMM'))
                    break;
            }
        }
        var data = [
            {
                data:[
                    {x : 'Ocak', y: jan},
                    {x : 'Şubat', y: feb},
                    {x : 'Mart', y: mar},
                    {x : 'Nisan', y: apr},
                    {x : 'Mayıs', y: may},
                    {x : 'Haziran', y: jun},
                    {x : 'Temmuz', y: jul},
                    {x : 'Ağustos', y: aug},
                    {x : 'Eylül', y: sep},
                    {x : 'Ekim', y: oct},
                    {x : 'Kasım', y: nov},
                    {x : 'Aralık', y: dec},

                ],
                color: '#297AB1'
            }
        ];
       
        this.setState({data : data})
    }
    dailyGraphic = (length, rows) => {
        var mon=0, tue=0, wed=0, thu=0, fri=0, sat=0, sun=0;
        for (let i = 0; i < length; i++) {
            switch (moment(rows.item(i).teachDate).format('dddd')){
                case 'Monday' :
                    mon=mon+1;
                    break;
                case 'Tuesday' :
                    tue++;
                    break;
                case 'Wednesday' :
                    wed++;
                    break;
                case 'Thursday' :
                    thu=thu+1;
                    break;
                case 'Friday' :
                    fri++;
                    break;
                case 'Saturday' :
                    sat++;
                    break;
                case 'Sunday' :
                    sun++;
                    break;
                default :
                    console.log(moment(rows.item(i).teachDate).format('dddd'))
                    break;                    
            }
            var data = [
                {
                    data:[
                        {x : 'Pazartesi', y: mon} ,
                        {x : 'Salı', y: tue} ,
                        {x : 'Çarşamba', y: wed},
                        {x : 'Perşembe', y: thu},
                        {x : 'Cuma', y: fri},
                        {x : 'Cumartesi', y: sat},
                        {x : 'Pazar', y: sun}
                    ],
                    color: '#297AB1'
                }
            ];
           
            this.setState({data : data})
            console.log(data);
        }

    }
    
    render(){
       
        return(
          
            <Content>
           
                <Tabs locked>
                    <Tab heading={ <TabHeading><Text>Günlük</Text></TabHeading>}>
                        <View style={{ flexDirection:'row', marginTop:10, marginBottom:10}}>
                            <Left>
                                <DatePicker
                                    placeHolderText="Başlangıç Tarihi"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={date => {this.setState({startDate : date})}}
                                />
                            </Left>
                            <Body>
                                <DatePicker
                                    placeHolderText="Bitiş Tarihi"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={date => this.setState({finishDate : date})}
                                    
                                />
                            </Body>
                            <Right>
                        
                               <Button bordered onPress={() => this.calculateReport('daily') } >
                                    <Text>Raporla</Text>
                                </Button>   
                            </Right>
                        </View>
                        {this.state.data && 
                        <ScrollView >
                            <PureChart 
                                type={'bar'}
                                data={this.state.data}
                                width={'100%'}
                                height={200}
                                showEvenNumberXaxisLabel={false}
                            />
                        </ScrollView>
                        }
                        
                            
                       
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Aylık</Text></TabHeading>}>
                        <View style={{ flexDirection:'row', marginTop:10, marginBottom:10}}>
                            <Left>
                                <DatePicker
                                    placeHolderText="Başlangıç Tarihi"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={date => {this.setState({startDate : date})}}
                                />
                            </Left>
                            <Body>
                                <DatePicker
                                    placeHolderText="Bitiş Tarihi"
                                    textStyle={{ color: "green" }}
                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                    onDateChange={date => this.setState({finishDate : date})}
                                    
                                />
                            </Body>
                            <Right>
                        
                            <Button bordered onPress={() => this.calculateReport('monthly') } >
                                    <Text>Raporla</Text>
                                </Button>   
                            </Right>
                        </View>
                        {this.state.data && 
                        <ScrollView >
                            <PureChart 
                                type={'bar'}
                                data={this.state.data}
                                width={'100%'}
                                height={200}
                                showEvenNumberXaxisLabel={false}
                            />
                        </ScrollView>
                        }
                       
                    </Tab>
                </Tabs>
            </Content>
        )
    }
}

/**
 *  <PureChart 
                                type={'bar'}
                                data={data}
                                width={'100%'}
                                height={200}
                                showEvenNumberXaxisLabel={false}
                           />
 */