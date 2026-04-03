import { Link } from 'react-router-dom';

export default function ExploreProducts(){
    return(
        <>
        <div className="explore-link-container">
          <Link
              to="/shop"
              className="explore-link"
            >
              Explore Collection →
            </Link>
          </div>
        </>
    )
}