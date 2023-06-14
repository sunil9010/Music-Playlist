import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const TrackList = props => {
  const {tracks, removeTrack} = props
  const {imageUrl, genre, duration, name, id} = tracks
  const deleteTrack = () => {
    removeTrack(id)
  }
  return (
    <>
      <li className="track-items">
        <div className="delete">
          <img src={imageUrl} alt="track" className="image" />
          <div className="paragraph">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="delete">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="button"
            onClick={deleteTrack}
            data-testid="delete"
          >
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </li>
    </>
  )
}
export default TrackList
