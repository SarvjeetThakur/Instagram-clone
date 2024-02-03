import { Link } from 'react-router-dom';
import Insagram from './assets/icons/Instagram'
import { appRoutes } from '../../routes/routes';
import Exprole from './assets/icons/Exprole';
import Home from './assets/icons/Home';
import Search from './assets/icons/Search';
import Reels from './assets/icons/Reels';
import Messages from './assets/icons/Messages';
import Notifications from './assets/icons/Notifications';
import Create from './assets/icons/Create';
import More from './assets/icons/More';

const sideBarData: { name: string, icon: React.ReactNode, to: string }[] = [
  {
    name: 'Home',
    icon: <Home />,
    to: appRoutes.home.path
  },
  {
    name: 'Search',
    icon: <Search />,
    to: appRoutes.home.path
  },
  {
    name: 'Explore',
    icon: <Exprole />,
    to: appRoutes.home.path
  },
  {
    name: 'Reels',
    icon: <Reels />,
    to: appRoutes.home.path
  },
  {
    name: 'Messages',
    icon: <Messages />,
    to: appRoutes.home.path
  },
  {
    name: 'Notifications',
    icon: <Notifications />,
    to: appRoutes.home.path
  },
  {
    name: 'Create',
    icon: <Create />,
    to: appRoutes.home.path
  },
  {
    name: 'Profile',
    icon: <Create />,
    to: appRoutes.home.path
  },
]
const Sidebar = () => {
  return (
    <>
      <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li className='w-full h-[92px] pt-3'>
              <Link to={appRoutes.home.path} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                {<Insagram />}
              </Link>
            </li>
            {
              sideBarData.map(({ name, to, icon }, index: number) => (
                <li key={index + '' + name}>
                  <Link to={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    {icon}
                    <span className="flex-1 ms-3 whitespace-nowrap">{name}</span>
                  </Link>
                </li>
              ))
            }
            <li className='pt-3'>
              <span className="flex cursor-pointer items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <More />
                <span className="flex-1 ms-3 whitespace-nowrap">More</span>
                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
