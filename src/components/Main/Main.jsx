import { useState } from 'react';

// components:
import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Projects from '../Projects/Projects';
import Social from '../Social/Social';

// style:
import './Main.scss';

const Main = () => {
    const [numberOfContent, setNumberOfContent] = useState(0);

    const renderContent = () => {
        if (numberOfContent === 0) return <Home />
        else if (numberOfContent === 1) return <Projects />
    }
    return (
        <div className="main">
            <Menu />
            <Social />
            {renderContent()}
        </div>
    );
}

export default Main;
