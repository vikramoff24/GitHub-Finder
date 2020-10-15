import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'
import GithubContext from '../context/github/githubContext'
const Repos = ({repos}) => {
    return repos.map(repo=> <RepoItem repo={repo} key={repo.id}/>)
}

Repos.prototype=
{
repos:PropTypes.array.isRequired,
}

export default Repos
