import { Link } from 'react-router-dom'
import './menu.scss'
import { menu } from '../../data'


const Menu = () => {
    return (
        <div className='menu'>

            {menu.map((item, i) => (

                <div className="item" key={i}>
                    <span className='title'>{item.title}</span>
                    {item.listItems.map((items) => (
                        <Link to={items.url} className='listItem' key={items.id}>
                            <img src={items.icon} alt="" />
                            <span className='listItemTitle'>{items.title}</span>
                        </Link>
                    ))}

                </div>

            ))}

        </div>
    )
}

export default Menu