import React, {Fragment,useEffect,useContext} from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../context/github/githubContext'

const User =({match})=> { //here props is an object so we can destructure its objects

    const githubContext=useContext(GithubContext);

    const {getUserRepos,getUser,user,loading}=githubContext;
    
useEffect(()=>
{
    getUser(match.params.login); //from{...props}
    getUserRepos(match.params.login); // next line is used for avoiding the warning 
    // eslint-disable-next-line  
  },[]);
    //useEffect is used for constly updating the things - like replacement for componentDidupdate(), to stop that we use [] as a params.which is replacement for componentDidMount()
    //we can also give [some value here] - for updating only when particular thing changes. [repos] repos if it changes - it will run. 

const {name,avatar_url,location,bio,blog,login,html_url,followers,
            following,public_repos,public_gists,hireable,company}=user;
//this can be destructured in the function parameter itself. like -- (user:{name,avatar_url,location,bio,blog,login,html_url,followers,
         //   following,public_repos,public_gists,hireable,company})

if(loading)
{
    return <Spinner/>
} 
        return <Fragment> <Link to="/" className="btn btn-light" >Back to Search</Link>
        Hireable:{' '}{hireable?(<i className='fas fa-check text-success'/>):(<i className='fas fa-times-circle text-danger'/>)}
        <div className="card grid-2">
<div className="all-center">
<img src={avatar_url}
className='round-img'
alt=''
style={{width:'150px'}}
/>
<h1>{name}</h1>
<p>Location: {location}</p>
</div>
<div>
    {bio&&(<Fragment>
        <h3>Bio</h3>
        <p>{bio}</p>
    </Fragment>)}
    <a href={html_url} className='btn btn-dark my-1'>
        <i className="fab fa-github"/>{'   '}Visit Github Profile
    </a>
    <ul>
       <li>{login&&(<Fragment>
<b>Username:</b> {login}
           </Fragment>)}
       </li>
       <li>{company&&(<Fragment>
<b>Company:</b> {company}
           </Fragment>)}</li> 
       <li>{blog&&(<Fragment>
<b>Website:</b> {blog}
           </Fragment>)}</li>
    </ul>
</div>
</div>
<div className="card text-center">
    <div className="badge badge-primary">Followers:{followers}</div>
    <div className="badge badge-success">Following:{following}</div>
    <div className="badge badge-light">Public Repos:{public_repos}</div>
    <div className="badge badge-dark">Public Gists:{public_gists}</div>

</div>
<Repos/>
          </Fragment>
        
    }
export default User;

