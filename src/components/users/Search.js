import React,{useState,useContext} from 'react'
import PropTypes from 'prop-types'
//Importing Github Context.
import GithubContext from '../context/github/githubContext'

const Search =({showClear,clearUsers,setAlert})=> {
    //intialing hooks
const githubContext =useContext(GithubContext);
    const [text,setText]=useState('');


const onChange= e=>setText(e.target.value);

const onSubmit =e=>{
e.preventDefault();

if(text==='')
{
    setAlert("Please enter Something","light")
}
else{
githubContext.searchUsers(text) //this text parameter is send to the function inside the github state file.
setText('');
}
}

return (
            <div>
                <form className="form" onSubmit={onSubmit}>
<input type="text" name="text" value={text} placeholder="Search Users..." onChange={onChange}/>
<input type="submit" value="Search" className="btn btn-dark btn-block"/>
</form>
{showClear&&(<button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>)}

            </div>
        )
    }


Search.propTypes=
   {
    clearUsers:  PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
   }

export default Search
