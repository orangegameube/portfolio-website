function Card() {


    const cardCont = {
      color: "black",
      padding: "10px",
      marginLeft: "15%",
      marginRight: "15%",
      fontFamily: "Segoe UI",
      display: "grid",
      gridTemplateColumns: "auto auto",
      columnGap: "3%",
      rowGap: "7%",
      borderRadius: "10%"
    };

    const cardit = {
        backgroundColor: "white",
        borderRadius: "15%",
        boxShadow: "5px 10px 18px #888888",
        padding: "40px",
        aspectRatio: "3.5/3"
    };

    const cardhead = {
        fontWeight: "bold",
        color: "DodgerBlue",
        fontSize: "36px"
    };

    const cardlist = {
        alignText: "center",
        margin: "auto"
    }

    const para = {
        fontSize: "20px",
        fontWeight: "medium"
    }

    const litem = {
        margin: "6px"
    }

    


    return (
        <div style={cardCont}>
            <div style={cardit} id="Software">
                <img alt="An image of a computer monitor." src="../assets/software.png"></img>
                <h2 style={cardhead}>Programming</h2>
                <p style={para}>Programming languages and software I'm proficient in.</p>
                <ul style={cardlist}>
                    <li style={litem}>HTML, CSS, JavaScript</li>
                    <li style={litem}>React.js, Tailwind CSS</li>
                    <li style={litem}>Python</li>
                    <li style={litem}>Matplotlib, Numpy, Pandas, Astropy</li>
                    <li style={litem}>QMK Firmware</li>
                    <li style={litem}>Qiskit</li>
                    <li style={litem}>Secure Shell</li>
                </ul>
            </div>
            <div style={cardit} id="Hardware">
                <img alt="An image of a wrench and a microcontroller." src="../assets/hardware.png"></img>
                <h2 style={cardhead}>Hardware Skills</h2>
                <p style={para}>Skills related to hardware and engineering I know well.</p>
                <ul style={cardlist}>
                    <li style={litem}>EasyEDA, KiCad</li>
                    <li style={litem}>Autodesk Fusion (Fusion 360)</li>
                    <li style={litem}>Soldering</li>
                    <li style={litem}>Machining, CNC</li>
                    <li style={litem}>Raspberry Pi, Arduino</li>
                </ul>
            </div>
            <div style={cardit} id="Research">
                <img alt="An image of a paper" src="../assets/research.png"></img>
                <h2 style={cardhead}>Research</h2>
                <p style={para}>Skills I've gained through research projects and experiences.</p>
                <ul style={cardlist}>
                    <li style={litem}>LaTeX</li>
                    <li style={litem}>Stellarium</li>
                    <li style={litem}>Siril</li>
                    <li style={litem}>AstroImageJ</li>
                    <li style={litem}>Zotero</li>
                </ul>
            </div>
            <div style={cardit} id="Certifications">
                <img alt="An image of a license." src="../assets/certs.png"></img>
                <h2 style={cardhead}>Certifications</h2>
                <p style={para}>My relevant licenses and certifications.</p>
                <ul style={cardlist}>
                    <li style={litem}>Private Pilot Certificate</li>
                    <li style={litem}>Part 107 Remote Pilot Certificate</li>
                </ul>
            </div>
        </div>
    );
}

export default Card;