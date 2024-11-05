import { useState } from 'react'

function Collapse (props) {
    const [open, setOpen] = useState(false);

    // Fonction pour basculer l'état ouvert/fermé
    function Toggle () {
        setOpen(!open);
    };

    return(
        <div className='collapse'>
            <div className='collapse__header' onClick={Toggle}>
                <p>{props.label}</p>
                {/* Affiche la flèche vers le haut ou vers le bas en fonction de l'état ouvert/fermé */}
                {open ? (
                            <i className="fa-solid fa-chevron-up chevron chevron__up"></i>
                    ) : (
                            <i className="fa-solid fa-chevron-up chevron chevron__down"></i>
                    )}
            </div>
            
            {/* {Array.isArray(props.type) ? (
                <ul className={open ? "collapse__body" : "collapse__body__hidden"}>
                {props.type.map((equipement, index) => (
                    <li key={`${equipement}-${index}`}>{equipement}</li>
                ))}
            </ul>) : (
                <div className={open ? "collapse__body" : "collapse__body__hidden"}>{props.children}</div>
            )} */}

            {/* Affiche le contenu en fonction du type de props passé */}
            <div className={open ? "collapse__body" : "collapse__body__hidden"}>
                {/* On verifie avec isArray si props.type est un tableau puis on affiche chaque élément en tant que li */}
                {Array.isArray(props.type) ? (
                    <ul>
                        {props.type.map((equipement, index) => (
                            <li key={`${index}`}>{equipement}</li>
                        ))}
                    </ul>) : (
                    props.children
                )}
            </div>
        </div>
    )
}
export default Collapse;