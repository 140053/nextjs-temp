import "./styles/globals.css"

import Nav from './components/Nav';
import BannerTop from './components/banner-top';
import ContentBannerL  from './components/conntentBannerL'
import ContentBannerR  from './components/conntentBannerR'
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="container">
        <Nav />
        <BannerTop />
        <ContentBannerL />
        <ContentBannerR />
        <Footer />
      </div>
    </>
  )
}
