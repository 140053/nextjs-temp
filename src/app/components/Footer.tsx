
import "../styles/footer.css"
import Image  from "next/image";
import champ from "public/contact-champion.svg"


const Footer = () => {

    return(
        <div className="sticky-bottom container-fluid d-flex justify-content-center foot">
            <div className="row ">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                    <Image className="img-fluid mt-5" src={champ} alt="champ" />
                    <h3 className="display-5 fw-bold text-white">LET&apos;S CREATE SOMETHING </h3>
                    <h2 className="display-4 fw-bold text-white">AMAZING TOGETHER</h2>
                    <p className="display-5 fs-4 fw-strong text-white">For general inquiries, drop us a line and we&apos;ll get a representative
reach out to you within 24 hours.</p>

                    <button type="button" className="btn btn-secondary btn-lg">Large button</button>
                </div>
                <hr className="border border-secondary border-1 opacity-75 mt-4"></hr>
                
                
            </div>
        </div>
    )
}


export default Footer;