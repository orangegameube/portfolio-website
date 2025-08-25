function Card() {


    const cardCont = {
      color: "black",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      margin: "50px",
      fontFamily: "Segoe UI",
      display: "grid",
      gridTemplateColumns: "auto auto",
      columnGap: "3%",
      rowGap: "10%",
    };

    const cardit = {
        backgroundColor: "white",
        borderRadius: "15%"
    };

    const cardhead = {
        fontWeight: "bold",
        color: "DodgerBlue"
    };

    


    return (
        <div style={cardCont}>
            <div style={cardit} id="Software">
                <img alt="An image of a computer monitor."></img>
                <h2 style={cardhead}>Programming</h2>
                <p>Programming languages and software I'm proficient in.</p>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js, Tailwind CSS</li>
                    <li>Python</li>
                    <li>Matplotlib, Numpy, Pandas, Astropy</li>
                    <li>QMK Firmware</li>
                    <li>Qiskit</li>
                    <li>Secure Shell</li>
                </ul>
            </div>
            <div style={cardit} id="Hardware">
                <img alt="An image of a socket wrench."></img>
                <h2 style={cardhead}>Hardware Skills</h2>
                <p>Skills related to hardware and engineering I know well.</p>
                <ul>
                    <li>EasyEDA, KiCad</li>
                    <li>Autodesk Fusion (Fusion 360)</li>
                    <li>Soldering</li>
                    <li>Machining, CNC</li>
                    <li>Raspberry Pi, Arduino</li>
                </ul>
            </div>
            <div style={cardit} id="Research">
                <img alt="An image of a paper"></img>
                <h2 style={cardhead}>Research</h2>
                <p>Skills I've gained through research projects and experiences.</p>
                <ul>
                    <li>LaTeX</li>
                    <li>Stellarium</li>
                    <li>Siril</li>
                    <li>AstroImageJ</li>
                </ul>
            </div>
            <div style={cardit} id="Certifications">
                <img alt="An image of a license."></img>
                <h2 style={cardhead}>Certifications</h2>
                <p>My relevant licenses and certifications.</p>
                <ul>
                    <li>Private Pilot Certificate</li>
                    <li>Part 107 Remote Pilot Certificate</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;