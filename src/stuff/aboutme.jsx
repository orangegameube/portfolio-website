

function About() {

    const bigbox = {
        margin: "3%"
    }

    const meirl = {
        fontSize: "70px",
        color: "DodgerBlue",
        fontWeight: "bold"
    }

    const abtp = {
        fontSize: "20px",
        padding: "2% 20% 2% 20%"
    }

    return (

        <div style={bigbox}>
            <h1 style={meirl}>Rory Sorola</h1>
            <p style={abtp}>I am a student with a passion for <b>programming</b>, <b>engineering</b>, and <b>scientific research</b>. 
                My specific areas of interest include quark interactions in high-energy physics, laser photonics and optics, and mathematical modelling.
                I am always looking for opportunities to expand both <b>my own</b> and <b>others' understanding of science.</b>
</p>
        </div>

    )

}

export default About;