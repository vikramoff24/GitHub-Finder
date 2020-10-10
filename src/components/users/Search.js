import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Search extends Component {
state={
    text:'',
};

static propTypes=
   {
    searchUsers: PropTypes.func.isRequired,
    clearUsers:  PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
   }
onChange= e=>this.setState({
        [e.target.name]:e.target.value
    })

onSubmit =e=>{
e.preventDefault();

if(this.state.text==='')
{
    this.props.setAlert("Please enter Something","light")
}
else{
this.props.searchUsers(this.state.text)//sending the value up to the App component.
this.setState({
    text:"",
})
}
}

render() {

    const {clearUsers,showClear} =this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
<input type="text" name="text" value={this.state.text} placeholder="Search Users..." onChange={this.onChange}/>
<input type="submit" value="Search" className="btn btn-dark btn-block"/>
</form>
{showClear&&(<button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>)}

            </div>
        )
    }
}

export default Search
