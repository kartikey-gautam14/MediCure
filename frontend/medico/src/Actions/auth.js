import axios from 'axios';
const register = (formData) => async dispatch => {
  var user = {
    name : formData.name,
    username : formData.email,
    password :formData.password
  }
    try {
       await axios.post('http://localhost:5000/registration', user)
       .then((res)=>{
         console.log(res);
       });

      // dispatch({
      //   type: "REGISTER_SUCCESS",
      //   payload: res.data
        
      // });
      //dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
  
      if (errors) {
        // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        console.log(errors);
      }
  
      dispatch({
        type: "REGISTER_FAIL"
      });
    }
  };
  export default register;