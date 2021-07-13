import React from 'react';
import { Consumer } from './App';
import Grandson from './grandson';

function Son(props){
    return (<Consumer>
        {( name )=>
           <div style={{border:'1px solid blue', width:'60%',margin:'20px auto', textAlign:'center'}}>
               <p>Son: my father's name is {name}</p>
               <Grandson/>
           </div>
        }
    </Consumer>
    );
}

export default Son;