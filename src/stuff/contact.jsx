import './contact.css'

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "731875b0-b687-4a7c-9502-65a92d5021f5");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
        console.log("Success", res);
        }
    };



    return(
        <section className="contactbox">
            <form onSubmit={onSubmit}>
                <h2 className="conthead">Contact Me</h2>
                <div className="inputbox">
                    <label className="labellab">Name</label>
                    <input type="text" className="field" placeholder="Enter your name" name="name" required />
                </div>
                <div className="inputbox">
                    <label className="labellab">Email Address</label>
                    <input type="email" className="field" placeholder="Enter your email" name="email" required />
                </div>
                <div className="inputbox">
                    <label className="labellab">Your Message</label>
                    <textarea name="message" className="field mess" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
  
};

export default Contact;