import BootstrapNav from '../stuff/navbar.jsx';
import { DarkModeToggle } from '../stuff/togglenight.jsx';
import About from '../stuff/aboutme.jsx'
import Card from '../stuff/card';
import Exper from '../stuff/experience.jsx'
import Projs from '../stuff/projects.jsx'

export const Home = () => {

    return (
        <div>
            <BootstrapNav />
            <About />
            <Card />
            <Exper />
            <Projs />
        </div>
    );

}; 