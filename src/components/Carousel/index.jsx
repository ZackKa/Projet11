import { useState } from "react";

function Carousel (props) {
    // Déclaration de l'état local 'open' avec sa fonction de mise à jour 'setOpen'
    const [open, setOpen] = useState(0);
    
    // Quand on est sur la premiere image (0) alors la fonction renvoie à l'image avec le dernier index
    function Precedent () {
        setOpen(open === 0 ? props.collapseImg.length - 1 : open - 1);
    };
    function Suivant () {
        setOpen(open === props.collapseImg.length - 1 ? 0 : open + 1);
    };

    return(
        <div className='carousel'>
            {props.collapseImg.map((picture, index) => (
                <div className="carousel__img" key={index}>
                    {/* Affichage de l'image correspondant à l'index 'open' */}
                    {index === open && (
                        <img src={picture} alt="photographie du logement" />
                    )}
                </div>
                
            ))}
            {/* On verifie si il y a plus qu'une image pour afficher les boutons ou non */}
            {props.collapseImg.length > 1 ? (
                <div className="carousel__btn">
                    <button onClick={Precedent}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button onClick={Suivant}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <span>{open + 1}/{props.collapseImg.length}</span>
                </div>
                
            ) : null}
        </div>
    )
}
export default Carousel