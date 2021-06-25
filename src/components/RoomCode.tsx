import copy from "../assets/images/copy.svg"
import '../styles/room-code.scss'

export function RoomCode() {
  return (
    <button className="room-code">
      <div>
        <img src={copy} alt="Copy room code"/>
      </div>

      <span>Sala uhsuiahuishaiuha</span>
    </button>
  )
}