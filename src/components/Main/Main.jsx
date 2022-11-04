// components:
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';
// import Shape from '../Shape/Shape';

// style:
import './Main.scss';

const Main = () => {
    return (
        <div className="main">
            <Menu />
            <Social />
            {/* <Shape /> */}
            <Home />
            {/* <h1>Dorota - junior front-end dev</h1> */}
        </div>
    );
}

export default Main;