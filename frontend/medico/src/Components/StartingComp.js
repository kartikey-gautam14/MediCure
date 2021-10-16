import React from 'react';
import {Link,Route} from 'react-router-dom';

function StartingComp() {
    return (
        <div>
             USE THE MEDICURE APP AS A  <br/>

<Link to = "/doctorauth">   
 <button> DOCTOR </button>
</Link>
<br/>
<Link to = "/patientauth">  

<button> PATIENT </button>  
</Link>


        </div>
    )
}

export default StartingComp
