import React ,{useState,useEffect} from 'react';

// class AddCount extends React.PureComponent{
//     constructor (props){
//         super(props)
//         this.state ={
//             count: 0
//         }
//     }

//     addcount = () =>{
//        let newCount = this.state.count
//        this.setState({
//            count:newCount +=1
//        })
//     }
//     render(){
//         return (
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.addcount}>increase</button>
//             </div>
//         )
//     }
// }

// useState

const AddCount =()=>{
    const [count, setCount] = useState(0)
    const addcount =()=>{
        let newCount = count
        setCount(newCount+=1)
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });

    return (
        <div>
            <p>{count}</p>
            <button onClick={addcount}>increasement</button>
        </div>
    )
}

export default AddCount;