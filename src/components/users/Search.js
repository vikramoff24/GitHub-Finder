import React, { Component } from 'react'

export class Search extends Component {
state={
    text:'',
};

onChange= e=>this.setState({
        [e.target.name]:e.target.value
    })

onSubmit =e=>{e.preventDefault();
this.props.searchUsers(this.state.text)//sending the value up to the App component.
this.setState({
    text:"",
})
}

render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
<input type="text" name="text" value={this.state.text} placeholder="Search Users..." onChange={this.onChange}/>
<input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
