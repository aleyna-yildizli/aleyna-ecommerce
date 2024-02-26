import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons"

export default function Clients() {
    return (
        <div className="flex flex-col sm:flex-row justify-between mx-auto py-5">
            <FontAwesomeIcon icon={faHooli} size="xl" className="vector" />
            <FontAwesomeIcon icon={faLyft} size="xl" className="vector" />
            <FontAwesomeIcon icon={faPiedPiperHat} size="xl" className="vector" />
            <FontAwesomeIcon icon={faStripe} size="xl" className="vector" />
            <FontAwesomeIcon icon={faAws} size="xl" className="vector" />
            <FontAwesomeIcon icon={faRedditAlien} size="xl" className="vector" />
        </div>
    )
}