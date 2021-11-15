function Contact() {
    return (
        <div className="ui compact menu" style={{ fontSize: "1em" }}>
            <a className="item">
                <i className="icon mail"></i> <a href={"mailto:obiemunozjr@gmail.com"}>E-Mail Me!</a>
            </a>
            <a className="item">
                <i className="twitter icon"></i> <a href={"https://twitter.com/ObieMunoz"} target={"_blank"}>Twitter</a>
            </a>
            <a className="item">
                <i className="linkedin icon"></i> <a href={"https://www.linkedin.com/in/obedmunozjr/"} target={"_blank"}>LinkedIn</a>
            </a>
            <a className="item">
                <i className="github icon"></i> <a href={"https://www.github.com/ObieMunoz/pcpa-search-app"} target={"_blank"}>This Project on Github</a>
            </a>
        </div>
    )
}

export default Contact
