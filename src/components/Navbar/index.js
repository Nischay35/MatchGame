import './index.css'
const Navbar = props => {
  const {score, timeInSeconds} = props
  return (
    <li className="list-items">
      <div className="container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />
        </div>
        <p className="score">
          Score: <span className="styling">{score}</span>
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />
        <p className="timer">{timeInSeconds} sec</p>
      </div>
    </li>
  )
}
export default Navbar
