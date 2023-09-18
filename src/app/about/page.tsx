import "../styles/globals.css"

import Nav from '../components/Nav';

import Footer from '../components/Footer';

import Image from 'next/image'
import about1  from "public/about-1.svg"


export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7">
              <div className="content">
                <p className="m-0 p-0"><span className="fs-1 fw-bold ">ALWAYS</span>&nbsp;<span className="fs-1 fw-bold text-secondary">INNOVATING,</span> </p>
                <p className="m-0 p-0"><span className="fs-1 fw-bold ">ALWAYS</span>&nbsp;<span className="fs-1 fw-bold text-secondary">MOVING FORWARD</span> </p>
                <p className="fs-4 text-secondary fw-bold">Homegrown to the Philippines, White Cloak is one of the country's leading software development companies that has worked on globally recognized projects and technologies.</p>
                <p className="fs-5 font-monospace" >White Cloak started as a home-grown development company from Central Luzon. Initially having created a proprietary POS system, the founding team discovered 
                  that there was a need in the market for a reliable technology partner that was not just after money but that had the rigor and discipline to do things right the
                   first time around.Founded in 2014, White Cloak continues to be the innovation partner of choice for many major corporations, leveraging technology to take its
                    client's business to the next level. This technical superiority and commitment to our clients have brought numerous recognition and awards to White Cloak.</p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5">
              <Image className="img-fluid" src={about1} alt="about logo" />
            </div>
          </div>

          <div className="col-md-12">
            
          </div>
        </div>
        


        <Footer />
      </div>
    </>
  )
}
