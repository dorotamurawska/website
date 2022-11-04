// components:
import MenuItem from '../MenuItem/MenuItem';

// style:
import './Menu.scss';

const Menu = () => {
    const labelForMenu = ['About', 'Experience', 'Project', 'Contact'];

    const renderMenu = labelForMenu.map(label => <MenuItem key={label} label={label} />);

    return (
        <div className="menu">
            <ul className="menu__ul">
                {renderMenu}
            </ul>
        </div>
    );
}

export default Menu;