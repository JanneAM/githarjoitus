import './ColorMenu.css'

const ColorMenu = ({onClick}) => {
    return (
        <ul className='color-menu'>
            <li>
                <div onClick={onClick} className="color-item white"></div>
                <div onClick={onClick} className="color-item yellow"></div>
                <div onClick={onClick} className="color-item green"></div>
            </li>
        </ul>
    );
};

export default ColorMenu;