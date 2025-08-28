import '../stuff/footer.css';
import gitimg from '../assets/gitlogo.png'
import linkimg from '../assets/linkedinlogo.png'

function Footer() {

    return (
        <div className='bg-black h-20'>
            <div id='footercont'>
                <a id='thing' href='https://github.com/orangegameube'><img src={gitimg} className='h-10'></img></a>
                <a id='thing' href='https://www.linkedin.com/in/rory-sorola-a64b6731a/'><img src={linkimg} className='h-10'></img></a>
            </div>
        </div>
    )

}

export default Footer;
