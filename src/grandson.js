import React from 'react';
import { Consumer } from "./App.js";
function Grandson(props) {
    return (
        <Consumer>
            {(name ) =>
                   <div style={{border:'1px solid green',width:'60%',margin:'50px auto',textAlign:'center'}}>
                   <p>grandson:my grandfather's name is :{name}</p>
               </div>
            }
        </Consumer>
    );
}
export default Grandson;