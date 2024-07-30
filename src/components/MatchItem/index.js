import './index.css'
const MatchItem = props => {
  const {projectDetails, clickImage} = props
  const {id, thumbnailUrl} = projectDetails
  const onClickImage = () => {
    clickImage(id)
  }
  return (
    <li className="list-items">
      <button onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default MatchItem
