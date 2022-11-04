// components:
import Drops from '../Drops/Drops';
import Shape from '../Shape/Shape';

// style:
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <div className="home__txt-wrap">
                <p className="home__small-txt">Junior Front-end dev</p>
                <p className="home__big-txt">Dorota</p>
                <p className="home__small-txt">&#8212; comming soon &#8212;</p>
            </div>
            <Shape />
            <Drops />
        </div>
    );
}

export default Home;
