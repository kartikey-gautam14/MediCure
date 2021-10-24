import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import DoctorcardComponent from '../Patientcomp/DoctorCardComponent';
import AvailableSlots from './AvailableSlots';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Profile() {
    var {id}  = useParams();
    console.log(id);
    const [doctor,setdoctor] = useState({});
    useEffect(() => {
        async function api_request(){
           let response = await axios.post("http://localhost:5000/doctorprofiles",{ id : id });
           setdoctor(response.data);
        }
        api_request();
        //axios.post("http://localhost:5000/doctorprofiles",{id : id}).then((res) => {setdoctor(res.data)
    },[id]);

    // },[]);
    console.log(doctor);
    return (
        <div>
            

            <Card className="card-h">
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {doctor.Name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {doctor.Specialization}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>



        </div>




    )
}

export default Profile
