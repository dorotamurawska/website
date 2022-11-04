// style:
import './MenuItem.scss';

const MenuItem = (props) => {
    return (
        <li className="menu-item">
            <a
                className="menu-item__link"
                href="/#"
            >{props.label}</a>
        </li>
    );
}

export default MenuItem;