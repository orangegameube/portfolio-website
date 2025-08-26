

function Contact() {


    const skhead = {
        marginTop: "8%",
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


    return (
        <div>
            <h2 style={skhead}>Contact</h2>
            <p style={sksub}>Feel free to send a message through the contact from below or connect with me on social media!</p>
            <div>
                


                <div style={expcard}>
                    <h4>Linkedin</h4>
                    <h4>GitHub</h4>
                </div>

            </div>
        </div>
    );

}

export default Contact