import NewNav from '../stuff/navbar.jsx';
import About from '../stuff/aboutme.jsx'
import Card from '../stuff/card';
import Exper from '../stuff/experience.jsx'
import Projs from '../stuff/projects.jsx'
import Contact from '../stuff/contact.jsx'
import Footer from '../stuff/footer.jsx'

export const Home = () => {

    return (
        <div>
            <NewNav />
            <About />
            <Card />
            <Exper />
            <Projs />
            <Contact />
            <Footer />
        </div>
    );

}; 