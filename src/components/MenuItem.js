import './MenuItem.css';

function MenuItem({ href, icon, children }) {
    const iconPath = `/icons/${icon}.svg`;

    return (
        <li>
            <a href={ href } className="menu-link">
                <img src={ iconPath } width="16" alt=""/>
                { children }
            </a>
        </li>
    );
}

export default MenuItem;