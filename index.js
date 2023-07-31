import React from 'react';
import ReactDOM  from 'react-dom';
import './App.css'
// import App from './App';
// import Fruit from './fruit';
//import Reactstyle from './krish';

//ReactDOM.render(<App/>,document.getElementById("root"));
class Reactform extends React.Component{
    constructor(){
        super();
        this.state={username:""}
        this.state={age:null,errmsg:""};
    }
    uservalue=(event) =>
    {
       let n=event.target.name;
       let v=event.target.value;
       let err="";
       if(n=="age"){
        if(v!=""&&!Number(v))
        {
            err=<strong>invalid,age must be number</strong>
        }
       }
       this.setState({errmsg:err});
       this.setState({[n]:v});
       this.setState({errmsg1:err});
       this.setState({[n]:v});
       this.setState({errmsg2:err});
       this.setState({[n]:v});
       this.setState({errmsg3:err});
       this.setState({[n]:v});
    }
    formSubmit=(event)=>{
        event.preventDefault();
        alert("Success.");
    }
    render()
    {
        return(
            <form onSubmit={this.formSubmit}>
                sports: <select>
                    <option value="Football">Football</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Volley ball">Volley ball</option>

                </select><br/><br/>
                Enter your name: <input type='text' name='username' onChange={this.uservalue}/><br/><br/>
                Phone Number: <input type='text' name='number'/>{this.state.errmsg}<br/><br/>
                Address: <input type='text' name='Address'/><br/><br/>
                Fees: <input type='text' name='Fees'/>{this.state.errmsg1}<br/><br/>
                References: <input type='text' name='Ref.no'/>{this.state.errmsg2}<br/><br/>
                Total amount to be paid: <input type='text' name='paid'/>{this.state.errmsg3}<br/><br/>

                <input type='submit'/>
            </form>
        );

    }
}
ReactDOM.render(<Reactform />,document.getElementById("root"));
