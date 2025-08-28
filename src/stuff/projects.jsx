import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stuff/projects.css";

import phys from '../assets/simimg.jpg';
import osc from '../assets/oscillart.webp';
import me from '../assets/mefr.png';
import cat from '../assets/sillyguy.jpg';

function Proj() {

    const sect = {
        paddingTop: '30px'
    }

    const skhead = {
        color: "DodgerBlue",
        fontSize: "40px",
        fontWeight: "bold",
        marginTop: "60px"
    }

    const sksub = {
        fontSize: "20px",
        padding: "10px",
    }

    const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return(
        <div onClick={onClick} className={`arrow ${className}`} >
          <AiOutlineArrowLeft class="arrows" style={{color:"white"}}/>
        </div>
      )
      }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return(
            <div onClick={onClick} className={`arrow ${className}`} >
            <AiOutlineArrowRight class="arrows" style={{color:"white"}}/>
            </div>
        )
        }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1
    }

    return (

        <div id="Projects" style={sect}>

            <div>
                <h2 style={skhead}>Projects</h2>
                <p style={sksub}>A list of technical projects I've made with GitHub links to the documentation.</p>
            </div>

            <div className=" m-8 mb-20">
                <div className="mt-10">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className="bg-white h-[450px] text-black rounded-xl">
                                <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                                    <img src={d.img} alt="" className="h-44 w-64 rounded-xl"/>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{d.name}</p>
                                    <p className="text-center">{d.text}</p>
                                    <a href={d.link}><button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-t-xl" >Github</button></a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        </div>

    );

}


const data = [
    {
        name: 'Physics Simulations',
        img: phys,
        text: 'A collection of astrophysics simulations made for users to better visualize orbital mechanics.',
        link: 'https://github.com/orangegameube/physics-simulations'
    },
    {
        name: 'Sine Art Site (Oscillart)',
        img: osc,
        text: 'A website that converts input musical notes into sine wave artwork. Created for the Hack Club Athena Award.',
        link: 'https://github.com/orangegameube/Sine-Art-Site'
    },
    {
        name: 'Portfolio Website',
        img: me,
        text: 'A website I made using React.js and Tailwind CSS to display my portfolio of skills!',
        link: 'https://github.com/orangegameube/portfolio-website'
    },
    {
        name: 'something new',
        img: cat,
        text: 'Coming soon for Athena Award!',
        link: 'https://github.com/orangegameube'
    }
];


export default Proj;