import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Error() {
    return (
        <>
            <Header />
            <main>
                <div className="contenueError">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to="/">Retourner sur la page d'accueil</Link>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Error