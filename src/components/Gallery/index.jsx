import { Link } from 'react-router-dom'
import logementsList from "../../datas/logementsList";

function Gallery () {
    return(
        <div className="gallery">
          {logementsList.map((logement) => (
            <div className='gallery__annonce' key={logement.id} >
                <Link to={`/Logements/${logement.id}`}>
                    <div className="gallery__annonce__paragraphe"><h2>{logement.title}</h2></div>
                    <img src={logement.cover} alt="Logement" />
                </Link>
            </div>
          ))}
        </div>
    )
}

export default Gallery