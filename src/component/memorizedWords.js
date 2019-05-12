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
    dailyReport = () =>{
        if(this.state.startDate && this.state.finishDate){
            db.transaction((tx) => {
                tx.executeSql("SELECT * FROM vocabulary WHERE teachDate between ? and ?", 
                [moment(this.state.startDate).format('YYYY-MM-DD'), moment(this.state.finishDate).format('YYYY-MM-DD') ], (tx,res) => {
                    var mon=0, tue=0, wed=0, thu=0, fri=0, sat=0, sun=0;
                    if(res.rows.length>0){
                        for (let i = 0; i < res.rows.length; i++) {
                            switch (moment(res.rows.item(i).teachDate).format('dddd')){
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
                                    console.log(moment(res.rows.item(i).teachDate).format('dddd'))
                                    break;
                                    
                            }
                        }
                        console.log(mon+' '+tue+' '+wed+' '+thu+' '+fri+' '+sat+' '+sun+' ')
                        var data = [
                            {
                                data:[
                                    {x : 'Pazartesi', y: mon},
                                    {x : 'Salı', y: tue},
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

                    }
                },(err) => console.log(err));
            });

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
                        
                               <Button bordered onPress={() => this.dailyReport() } >
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
                        
                            <Button bordered onPress={() => this.monthlyReport() } >
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