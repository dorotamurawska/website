// components:
// import Home from '../Home/Home';
// import Menu from '../Menu/Menu';
// import Social from '../Social/Social';

// img: 
// import multistep from '../../svg/multi_step.png';

// style:
import './Projects.scss';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__wrap">
                <div className="projects__img">
                    <div className="projects__shape"></div>
                </div>
                <div className="projects__img">
                    <div className="projects__shape projects__circle"></div>
                </div>
                <div className="projects__img">
                    <div className="projects__shape"></div>
                </div>
                <div className="projects__img">
                    <div className="projects__shape projects__circle"></div>
                </div>
                <div className="projects__img">
                    <div className="projects__shape"></div>
                </div>
                <div className="projects__img">
                    <div className="projects__shape projects__circle"></div>
                </div>
                <div className="projects__img">
                    <div className="projects__shape"></div>
                </div>
                <div className="projects__img">
                    <div className="projects__shape projects__circle"></div>
                </div>
            </div>
        </div>
    );
}

export default Projects;