import React from "react";
import { NavLink } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import GithubBattlePage from './GithubBattlePage';

class BattlePageComponent extends React.Component {

  render() {
    return (
      <div className="instructions-container">
        <h1 className="center-text header-lg">Instructions</h1>
        <ol className="container-sm grid center-text battle-instructions">
          <li>
            <div className="battle-grid"><i aria-label="icon: thunderbolt" className="anticon anticon-thunderbolt"><svg viewBox="64 64 896 896" className="" data-icon="thunderbolt" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path fill="#ffffff" d="M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241 319.8-305.1h-211z"></path><path fill="#FFEB3B" d="M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211L378.3 732.5z"></path></svg></i></div>
            <NavLink className="btn-clear nav-link " to="/compare">Compare Two Git Profile</NavLink>
          </li>
          <li>
            <div className="battle-grid"><i aria-label="icon: profile" className="anticon anticon-profile"><svg viewBox="64 64 896 896" className="" data-icon="profile" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path fill="#ffffff" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path><path fill="#FFEB3B" d="M184 840h656V184H184v656zm300-496c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48zM380 328c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z"></path><path fill="#ffffff" d="M340 656a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0-144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm152 320h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path></svg></i></div>
            <NavLink className="btn-clear nav-link " to="/compare"> Get Git Profile</NavLink>
          </li>
          <li>
            <div className="battle-grid">
              <div className="battle-grid"><i aria-label="icon: trophy" className="anticon anticon-trophy"><svg viewBox="64 64 896 896" className="" data-icon="trophy" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path fill="#ffffff" d="M320 480c0 49.1 19.1 95.3 53.9 130.1 34.7 34.8 81 53.9 130.1 53.9h16c49.1 0 95.3-19.1 130.1-53.9 34.8-34.7 53.9-81 53.9-130.1V184H320v296zM184 352c0 41 26.9 75.8 64 87.6-37.1-11.9-64-46.7-64-87.6zm364 382.5C665 721.8 758.4 630.2 773.8 514 758.3 630.2 665 721.7 548 734.5zM250.2 514C265.6 630.2 359 721.8 476 734.5 359 721.7 265.7 630.2 250.2 514z"></path><path fill="#FFEB3B" d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44zM248 439.6a91.99 91.99 0 0 1-64-87.6V232h64v207.6zM704 480c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"></path></svg></i></div>
            </div>
            <NavLink className="btn-clear nav-link " to="/compare"> See Winner</NavLink>
          </li>
        </ol>
      </div>)
  }
}


export default BattlePageComponent;
