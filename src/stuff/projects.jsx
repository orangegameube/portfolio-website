import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Proj() {

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1
    }

    return (

        <div id="Projects">

            <div>
                <h2 style={skhead}>Projects</h2>
                <p style={sksub}>A list of technical projects I've made with GitHub links to the documentation.</p>
            </div>

            <div className=" m-8">
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
        img: 'public/assets/simimg.jpg',
        text: 'A collection of astrophysics simulations made for users to better visualize orbital mechanics.',
        link: 'https://github.com/orangegameube/physics-simulations'
    },
    {
        name: 'Sine Art Site (Oscillart)',
        img: 'public/assets/oscillart.webp',
        text: 'A website that converts input musical notes into sine wave artwork. Created for the Hack Club Athena Award.',
        link: 'https://github.com/orangegameube/Sine-Art-Site'
    },
    {
        name: 'Portfolio Website',
        img: 'public/assets/mefr.png',
        text: 'A website I made using React.js and Tailwind CSS to display my portfolio of skills!',
        link: 'https://github.com/orangegameube/portfolio-website'
    },
    {
        name: 'something new',
        img: 'public/assets/sillyguy.jpg',
        text: 'Coming soon for Athena Award!',
        link: 'https://github.com/orangegameube'
    }
];


export default Proj;