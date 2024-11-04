import { useState } from 'react'

function Collapse (props) {
    const [open, setOpen] = useState(false);

    function Toggle () {
        setOpen(!open);
    };

    return(
        <div className='collapse'>
            <div className='collapse__header' onClick={Toggle}>
                <p>{props.label}</p>
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


            <div className={open ? "collapse__body" : "collapse__body__hidden"}>
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