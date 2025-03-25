import MenuItem from "./MenuItem";
import "./Menu.css";

function Menu() {
    return (
        <nav>
            <ul className="menu">
                <MenuItem href="#main" icon="home">
                    Обо мне
                </MenuItem>
                <MenuItem href="#cases" icon="services">
                    Кейсы
                </MenuItem>
                <MenuItem href="#contacts" icon="pricing">
                    Связь
                </MenuItem>
            </ul>
        </nav>
    )
}

export default Menu;
