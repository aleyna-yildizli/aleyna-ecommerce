import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

export default function Clients() {
  return (
    <div className="flex flex-grow-1 basis-[250px] flex-wrap justify-center gap-[70px]  flex-row py-5">
      <FontAwesomeIcon icon={faHooli} size="6x" className="vector" />
      <FontAwesomeIcon icon={faLyft} size="6x" className="vector" />
      <FontAwesomeIcon icon={faPiedPiperHat} size="6x" className="vector" />
      <FontAwesomeIcon icon={faStripe} size="6x" className="vector" />
      <FontAwesomeIcon icon={faAws} size="6x" className="vector" />
      <FontAwesomeIcon icon={faRedditAlien} size="6x" className="vector" />
    </div>
  );
}