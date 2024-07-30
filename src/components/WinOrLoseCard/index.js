import './index.css'
const WinOrLoseCard = props => {
  const {score, resetGame} = props
  return (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="heading">Your Score</p>
      <p className="score">{score}</p>
      <button className="button" onClick={resetGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p className="text">Play Again</p>
      </button>
    </div>
  )
}
export default WinOrLoseCard
