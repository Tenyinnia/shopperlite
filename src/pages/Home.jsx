import HeroSection from '../components/Hero'
import ShopByCategory from '../components/ShopByCategory'
import TopRatedProducts from '../components/TopRatedSection'
import HomeServiceInfo from '../components/HomeServiceInfo'
import FreeShippingBanner from '../components/FreeShippingBanner'
import JournalSection from '../components/JournalSection'

export default function Home(){
    return(
        <>
            <HeroSection />
            <ShopByCategory />
            <TopRatedProducts />
            <HomeServiceInfo />
            <FreeShippingBanner />
            <JournalSection />
        </>
    )
    
}