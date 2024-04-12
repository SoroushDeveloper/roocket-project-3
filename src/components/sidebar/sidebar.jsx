import SidebarButton from "../buttons/sidebarButton.jsx";
import HomeIcon from "../icons/homeIcon.jsx";
import Paper from "../icons/paper.jsx";
import SidebarItem from "./sidebarItem.jsx";
import Close from "../buttons/close.jsx";
import {useSelector, useDispatch} from 'react-redux';
import {showSidebar, hideSidebar} from '../../features/sidebarSlice.js';
import H3 from "../headings/h3.jsx";
import Hr from "../partial/hr.jsx";
import HomeButton from "../buttons/homeButton.jsx";

export default function Sidebar() {
    const visible = useSelector((state) => state.sidebar.visible);
    const dispatch = useDispatch();
    const collapse = () => dispatch(hideSidebar());
    const expand = () => dispatch(showSidebar());
    const pathName = window.location.pathname;
    const items = [
        {
            id: 1,
            name: 'Dashboard',
            link: '/',
            icon: <HomeIcon/>,
            active: pathName === '/'
        },
        {
            id: 2,
            name: 'Posts',
            link: '/posts',
            icon: <Paper/>,
            active: pathName === '/posts'
        },
    ]

    return (
        <>
            <SidebarButton onClickHandler={expand}/>
            <aside id="default-sidebar"
                   className={`fixed top-0 left-0 z-40 w-64 h-screen ${!visible ? 'hidden' : ''}`}
                   aria-label="SidebarButton">
                <div className="h-full px-5 py-5 overflow-y-auto bg-gray-100 dark:bg-gray-900">
                    <div className="flex justify-between items-center">
                        <H3 text={'Menu'}/>
                        <Close onClickHandler={collapse}/>
                    </div>
                    <Hr/>
                    <ul className="space-y-2 font-medium">
                        {
                            items && items.map((item) => {
                                return (<SidebarItem key={item?.id} item={item}/>);
                            })
                        }
                    </ul>
                </div>
            </aside>
            {
                pathName === '/' ? null : <HomeButton/>
            }
        </>
    )
}