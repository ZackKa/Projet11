import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageAbout from '../../assets/IMGAbout.png'
import Banniere from '../../components/Banniere'
import Collapse from '../../components/Collapse'

function About () {
    return (
        <>
            <Header />
            <main>
                <div className="banniereAbout">
                    <Banniere cover={ImageAbout} />
                </div>
                <div className='collapsible'>
                    <Collapse label="Fiabilite">
                        <p className='contenue__fiabilite'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </Collapse>
                    <Collapse label="Respect">
                        <p className='contenue__respect'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Collapse>
                    <Collapse label="Service">
                        <p className='contenue__service'>La qualité de service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
                    </Collapse>
                    <Collapse label="Securite">
                        <p className='contenue__securite'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Collapse>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default About