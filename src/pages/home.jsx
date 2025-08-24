import BootstrapNav from '../stuff/navbar.jsx';
import { DarkModeToggle } from '../stuff/togglenight.jsx';

export const Home = () => {

    return (
        <div>
            <BootstrapNav />
            <DarkModeToggle />
            <div>Homepage</div>
        </div>
    );

};