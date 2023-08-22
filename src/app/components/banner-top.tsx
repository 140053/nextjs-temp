import "../styles/banner-top.css"
import Image from "next/image"
import bannerIMG  from 'public/fold-two-right-champion.svg'

const BannerTop = () => {

    return (
        <div className="container-fluid banner-top mt-3 ">
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <h1 className="display-3 fs-1 fw-bold text-white  ">Empowering Innovation through Custom Software Development and IT Augmentation Services</h1>
                    <p className="text-white fs-5">Whitecloak delivers exceptional software solutions that are intuitive, seamless, and tailored to users' specific needs - making them feel valued. With a commitment to innovation and user-centric design, we bring ideas to life and empower our clients' success in the digital landscape.</p>
                </div>
                <div className="col-xl-4 col-lg-4  d-none d-md-block d-sm-block">
                    <Image
                        src={bannerIMG}
                        alt="banner image"
                    />
                </div>
            </div>
        </div>
    )

}


export default BannerTop;
