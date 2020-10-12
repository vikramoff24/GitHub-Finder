import React, { Component,Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class User extends Component {
static propTypes={
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
}

componentDidMount()
{
    this.props.getUser(this.props.match.params.login);
}

    render() {
        const {name,avatar_url,location,bio,blog,login,html_url,followers,
            following,public_repos,public_gists,hireable}=this.props.user;

            const {loading}=this.props;

if(loading)
{
    return <Spinner/>
}
        return <Fragment> <Link to="/" className="btn btn-light" >Back to Search</Link>
        Hireable:{' '}{hireable?(<i className='fas fa-check text-success'/>):(<i className='fas fa-times-circle text-danger'/>)}</Fragment>
        
    }
}

export default User;

