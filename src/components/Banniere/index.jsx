function Banniere (props) {
    return(
        <div className="banniere">
            <div className="banniere__filtreOpacite"></div>
            <div className="banniere__image">
                <img src={props.cover} alt="Couverture de page"/>
                <h1>{props.phrase}</h1>
            </div>
        </div>
    )
}
export default Banniere