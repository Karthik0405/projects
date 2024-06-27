// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageItem, displayImage, isState} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageItem

  const removeOpacity = isState ? '' : 'thumbnail-opacity'

  const changeImage = () => {
    displayImage(id)
  }

  return (
    <li className="listItem ">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${removeOpacity}`}
          onClick={changeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
