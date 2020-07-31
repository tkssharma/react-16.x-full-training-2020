import React from 'react';


const Repo = function (props) {
  const Repos = props.repos.map((repo, index) => {
    return (
      <div key={index} className="card bg-light">
        <h4 className="header-lg center-text"># {index}</h4>
        <img className="avatar" src={repo.owner.avatar_url} alt="Avatar for freeCodeCamp" />
        <h2 className="center-text">
          <a className="link" href={repo.owner.html_url}>{repo.owner.login}</a></h2>
      </div>
    )
  });
  return (
    <ul className="grid space-around">
      {Repos}
    </ul>
  )
}

export default Repo;