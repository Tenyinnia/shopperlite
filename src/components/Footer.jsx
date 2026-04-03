import { Link } from "react-router-dom"
export default function Footer(){
    return(
        <>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="about-company">
                        <div className="about-company rows">
                            <Link to='/' className="company-logo">ShopperLite</Link>
                            <p>Fashion, electronics and lifestyle — delivered to your door.</p>
                        </div>
                        <div className="about-company company">
                            <span>Company</span>
                            <ol>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Privacy Policy</li>
                            </ol>
                        </div>
                    </div>
                    <div className="footer-cols">
                        <div className="footer-col">
                            <span>Shop</span>
                            <ol>
                                <li><Link to='/shop' className="footer-link">All Products</Link></li>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Kids</li>
                                <li>Electronics</li>
                                <li>Footwear</li>
                            </ol>
                        </div>
                        <div className="footer-col">
                            <span>Help</span>
                            <ol>
                                <li>Returns</li>
                                <li>Shipping info</li>
                                <li>Size guide</li>
                                <li><Link to='https://tenyinnia.github.io/' className="footer-link">Contact us</Link></li>
                            </ol>
                        </div>
                        <div className="footer-col">
                            <span>Journal</span> 
                            <ol>
                                <li><Link to='/blog' className="footer-link">All Posts</Link></li>
                            </ol>
                        </div>
                    </div>
                    
                </div>
                <div className="line"></div>
                
            </div>
        </>
    )
}