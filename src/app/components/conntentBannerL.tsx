import Image from "next/image"
import Bimage from "public/bannerCont.svg"
import carrow from "public/purple-triple-arrow.svg"

const ContentBannerL = () => {

    return (
        <div className="container mt-3 py-5">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <Image 
                        src={Bimage}
                        alt="Content Image"
                        width={600}
                        className="img-fluid"
                       
                    />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ">
                    <Image src={carrow} alt="Design lang" height={15}/>
                    <h3 className="text-secondary fw-bold text-start">UI/UX Design</h3>
                    <h1 className="display-4 fw-bold text-start">User-centric design with awe-inspiring aesthetics</h1>
                    <p className="text-white fs-4 text-start text-secondary-emphasis">Our lean UX/UI design methodology allows us to hyperfocus on our end-users, and identify what truly matters to them. We take it further by integrating data into our design process, synthesizing each data point to give us a clear picture of how the users behave. As a result, we create a masterpiece that is both beautiful and delightful to use.</p>
                </div>
            </div>
        </div>
    )

}


export default ContentBannerL;
