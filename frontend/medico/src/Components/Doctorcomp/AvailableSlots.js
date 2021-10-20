import React,{useState,useContext} from 'react';
import {Card,CardContent,Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';
import  {DoctorContext} from '../../Context/Provider';

function AvailableSlots() {
    const [state,dispatch] = useContext( DoctorContext);
    var dates = datify();
    var yesterdating = yesterdate();
    const [booked,setbooked] = useState([10.15,10.30,10.45,12.15,14.00]);
    const [availabletime,setavailabletime] = useState({start :10,end : 14})

    const onClick = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const payload = {
            token : state.token,
            date : "18-10-2021",
            doctor : "hritiksinghal",
            time : e.target.value,
        }
         axios.post("http://localhost:5000/bookap",
        
        payload).then((res => console.log(res)));
        

        
       
    } 


    var rows = [];


for (var i = 0; i < 23; i++) {
    for(var j = 0;j<=45;j = j + 15){
        const found = booked.find(element =>{ if(element === (i + 0.01*j)) return true});
    if(i>=availabletime.start && i<availabletime.end &&  !found){
        
    rows.push(<button type = "submit" key = {`${i} : ${j}`} value = {i + 0.01*j} onClick = {(e) => onClick(e)} >{i}  : { j>=10?j:("0" + j)} </button>
    
    );
    }
    }
}





    return (
        
            <Card className = "calender-component">
                <CardContent>
                    <Typography>
                        Calender of doctors
                    </Typography>
                    <br/>
                    <hr/>
                    <div className = "calender-cards">
                    
                        <Card >
                           {yesterdating} 
                        </Card>
                        <Card>
                            {dates.today}
                        </Card>
                        <Card>
                            {dates.tomorrow}
                        </Card>
                        

                    </div>
                    <br/>
                    <hr/>
                    <div>
                        {rows}
                        </div>

                    



                    

                </CardContent>

            </Card>
            
        
    )
}

export default AvailableSlots
function datify(){
    var today =  new Date();
    
var dd = String(today.getDate()-1). padStart(2, '0');
var mm = String(today.getMonth() + 1). padStart(2, '0'); //January is 0!
var yyyy = today. getFullYear();
today = mm + '/' + dd + '/' + yyyy;
 
var yesterday = mm + '/' + dd + '/' + yyyy;

var tomorrow = mm + '/' + dd + '/' + yyyy;


return({
    today : today,
    yesterday : yesterday,
    tomorrow : tomorrow,

});
}
function yesterdate(){
var today = new Date();
    var yesterday = new Date(today);
    
    yesterday.setDate(today.getDate() - 1);
    console.log("Original Date : ",yesterday);

    const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    var month = today.getMonth() ;
    yesterday = yesterday.getDate() + ' ' + monthNames[month] + ' ' + yesterday.getFullYear()
   
   return yesterday;
}
