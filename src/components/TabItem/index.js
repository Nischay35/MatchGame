import './index.css'
const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    clickTabItem(tabId)
  }
  const activeTabBtn = isActive ? 'styling' : ''
  return (
    <li className="list-items">
      <button className={`button ${activeTabBtn}`} onClick={onClickTab}>
        <p className="tabText">{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
