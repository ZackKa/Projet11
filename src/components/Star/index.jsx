function Star (props){
    const range = [1, 2, 3, 4, 5]

    return(
        <>
            {/* <div className="star">
            {range.map((rangeElem) => 
            props.valeur >= rangeElem ? (
                <i className="fa-solid fa-star plein" key={`${rangeElem}`}></i>
            ) : (
                <i className="fa-solid fa-star vide" key={`${rangeElem}`}></i>)
            )}
            </div> */}

            <div className="star">
                {range.map((rangeElem) => 
                    <i className={props.valeur >= rangeElem ? 'fa-solid fa-star plein':'fa-solid fa-star vide'} 
                    key={`${rangeElem}`}></i>
                )}
            </div>
        </>
    )
}
export default Star