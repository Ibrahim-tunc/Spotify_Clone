import home from './images/home.svg'
import search from './images/search.svg'
import library from './images/library.svg'
import create from './images/create.svg'
import like from './images/like.svg'
import install from './images/install.svg'
import Logo from './logo'
import SideElement from './SideElement'

const logos = [
    {
        name:"Home",
        src:home,
    },
    {
        name:"Search",
        src:search
    },
    {
        name:"Your Library",
        src:library
    },
    {
        name:"Create Playlist",
        src:create
    },
    {
        name:"Liked Songs",
        src:like
    },
    {
        name:"Install App",
        src:install
    }
]

const Sidebar = () => {
    return (
        <div className="sidebar">
        <Logo />
        <ul className='side__list'>
        {
            logos.map(e => {
               return <SideElement name={e.name} src={e.src} key={e.name} />
            })
        }
        </ul>
        

        </div>
    )
}

export default Sidebar

