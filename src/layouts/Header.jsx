import data from '../data/data'
import { faPhone, faEnvelope, faInstagram, faYoutube, faFacebook } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    const { phone, mail, message, socialsURL, firmName } = data.header;


    return (
        <div>
            <FontAwesomeIcon icon={faPhone} size="sm" style={{color: "#ffffff",}} />
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} />
        </div>
    )
}