import image from "../images/logo.png"

function Header() {
    return (
        <header>
            <img src={image} alt="logo" />
            <p>This application will conduct a street search at the Pasco County, Florida, Property Appraiser and return a clean table of results. <br />The PCPA is located at: <a href={"https://search.pascopa.com/"}>Pasco County Property Appraiser</a> and this is an unofficial project <strong>not affiliated</strong> with their website.</p>
        </header >
    )
}

export default Header
