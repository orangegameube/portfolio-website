import BootstrapNav from '../stuff/navbar.jsx';
import { DarkModeToggle } from '../stuff/togglenight.jsx';
import { Skillset } from '../pages/skillset.jsx'
import Card from '../stuff/card';

export const Home = () => {

    return (
        <div>
            <BootstrapNav />
            <DarkModeToggle />
            <div>Homepage</div>
            <Card />
            <Skillset />
        </div>
    );

}; 