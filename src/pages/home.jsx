import BootstrapNav from '../stuff/navbar.jsx';
import { DarkModeToggle } from '../stuff/togglenight.jsx';
import About from '../stuff/aboutme.jsx'
import Card from '../stuff/card';

export const Home = () => {

    return (
        <div>
            <BootstrapNav />
            <DarkModeToggle />
            <div>Homepage</div>
            <About />
            <Card />
        </div>
    );

}; 