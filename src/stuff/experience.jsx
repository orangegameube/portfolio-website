

function Exper() {

    const sect = {
        paddingTop: '50px'
    }

    const skhead = {
        color: "DodgerBlue",
        fontSize: "40px",
        fontWeight: "bold",
    }

    const sksub = {
        fontSize: "20px",
        padding: "15px"
    }

    const expcard = {
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "5px 10px 18px #888888",
        margin: "2.5% 7% 2.5% 7%",
        padding: "30px 40px 10px 40px",
        textAlign: "left"
    }

    const exphead = {
        fontSize: "30px",
        textAlign: "left",
        padding: "40px 0px 0px 40px"
    }

    return (

        <div id="Experience" style={sect}>
            <h2 style={skhead}>Experience</h2>
            <p style={sksub}>A list of all of the programs and academic societies I've participated in.</p>
            <div>

                <h3 style={exphead}>Educational Programs</h3>

                <div style={expcard}>
                    <h4>Yale Summer Program in Astrophysics (YSPA, Yale University)</h4>
                    <h6>Jun - Aug 2025</h6>
                    <p>Created photometric light curve model for the supernova 2025nou. Programmed a python pipeline to automate 
                        flux and instrumental magnitude calculations of captured data of the Wild Duck Cluster (Messier 11). 
                        Took classes in physics, astronomy, photometry, and scientific programming for 6 weeks. 
                        Created research paper to be published and presented research to Yale faculty and staff.</p>
                </div>
                <div style={expcard}>
                    <h4>BeyondQuantum Research Scholar (ThinkingBeyond Education)</h4>
                    <h6>Jan - Jun 2025</h6>
                    <p>Studied linear algebra, theoretical physics, and Qiskit over the course of 5 months. Completed a
                        research project in variational quantum eigensolver algorithms and presented work to international
                        quantum startups. 
                    </p>
                </div>
                <div style={expcard}>
                    <h4>NASA High School Aerospace Scholars (HAS) Program</h4>
                    <h6>Oct 2024 - Jun 2025</h6>
                    <p>Took an online course designed by NASA about aerospace engineering. Applied knowledge to create tools and 
                        habitats with computer aided design (CAD) in Fusion360, created research proposals for Martian exploration, 
                        and applied knowledge to solve questions in astrobiology and astrophysics problem sets.
                        Finished with a final grade of ~98% and was invited to summer virtual experience in 
                        space mission design and research. 
                    </p>
                </div>
                <div style={expcard}>
                    <h4>US Air Force Aim High Flight Academy</h4>
                    <h6>May 2024 - Jun 2024</h6>
                    <p>Selected for 15% acceptance rate prestigious fully paid summer program for United States high schoolers
                        to obtain ~15 hours of flight training. Studied weather theory, aerodynamics, and FAA regulations 
                        at California Aeronautical University.</p>
                </div>

                <h3 style={exphead}>Organizations</h3>

                <div style={expcard}>
                    <h4>AIAA High School Subcommittee International Board, Internal Communications Manager</h4>
                    <h6>Aug 2025 - Aug 2026</h6>
                    <p>One of three board members supervising an international community of 200+ high school students interested in aerospace.
                        Working with AIAA staff to implement handbooks for aerospace clubs across the nation and design challenges.
                    </p>
                </div>
                <div style={expcard}>
                    <h4>STEM Next Flight Crew 2025</h4>
                    <h6>Mar 2025 - Jun 2026</h6>
                    <p>Nationally selected to represent the state of Texas in STEM education and pursue a project to spread STEM to communities
                        with a lack of support for afterschool programs.
                    </p>
                </div>

                <h3 style={exphead}>Education</h3>

                <div style={expcard}>
                    <h4>Incarnate Word High School</h4>
                    <h6>Aug 2022 - Jun 2026</h6>
                    <p>Activities and societies: Dynamic Eclipse Broadcast (DEB) Initiative team leader, Shamrock Racing (Alamo City Electrathon
                        team) Founder & Team Lead, National Honor Society, Mu Alpha Theta, Science National Honor Society
                    </p>
                </div>
                <div style={expcard}>
                    <h4>Jetstream Aeronautics Flight School</h4>
                    <h6>Jul 2024 - Feb 2025</h6>
                    <p>Completed ~40 hours of flight training at Jetstream Aeronautics. Studied aircraft maneuvers, navigation, 
                        aerodynamics, and airport procedures.
                    </p>
                </div>
            </div>
        </div>

    )

}




export default Exper;