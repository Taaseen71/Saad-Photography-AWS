import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div className="Navigation">
          <nav>
            <ul style={{listStyle: "none"}}>
              <li>
                <Link to="/">Home</Link>
                <span>&nbsp;|&nbsp;</span>
                <Link to="/track-day">TrackDay</Link>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Nav