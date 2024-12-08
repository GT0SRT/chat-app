import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
// import { useState } from 'react';
import { toggleClick } from './redux/clickSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Dashboard from './components/sections/dashboard/Dashboard';
import Banner from './components/Banner';

import './index.css';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'About Developer', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const isLogin = false;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const App = () => {
  const isClicked = useSelector((state) => state.click_redux_slice.isClicked);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleClick()); 
  };

  return (
    <>
      <div className={isClicked ? 'min-h-full bg-gradient-to-l from-white to-slate-300' : 'min-h-full bg-gradient-to-l from-gray-900 to-black'}>
        <Disclosure as="nav" className={isClicked ? 'bg-white' : 'bg-black'}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <p className={isClicked ? 'text-black flex flex-col justify-center items-center text-xl h-8 w-fit font-bold' : 'text-white flex flex-col justify-center items-center text-xl h-8 w-fit font-bold'}>
                    React-Chat
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className='ml-auto cursor-pointer'>
                {isClicked ? <FaToggleOn size={32} onClick={handleToggle}/> : <FaToggleOff className='text-white' size={32} onClick={handleToggle}/>}
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                        </MenuButton>
                      </div>
                      <Menu.Items
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                      >
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            <a href={item.href} className="block px-4 py-2 text-sm text-gray-700">
                              {item.name}
                            </a>
                          </MenuItem>
                        ))}
                      </Menu.Items>
                    </Menu>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
        <Banner />
        <div className={isClicked ? 'mx-auto w-full pl-12 py-5 pb-2 bg-white' : 'mx-auto w-full pl-12 py-5 pb-2 bg-black'}>
          <h1 className={isClicked ? 'text-3xl font-semibold tracking-tight text-slate-700' : 'text-3xl font-semibold tracking-tight text-slate-200'}>Chat Dashboard</h1>
        </div>

        <main>
          <Dashboard />  
        </main>
      </div>
    </>
  );
};

export default App;
