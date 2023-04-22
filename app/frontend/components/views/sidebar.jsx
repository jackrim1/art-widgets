import React from 'react';

import { HomeIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navigation = [
  { name: 'Apply grid', href: '#', icon: HomeIcon, count: false, current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  return (
    <div className="min-w-xs h-full flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col pt-4">
        <ul role="list" className="-mx-2 space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-50 text-gray-600'
                    : 'text-gray-700 hover:text-gray-600 hover:bg-gray-50',
                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold items-center'
                )}
              >
          
                <FontAwesomeIcon icon="fa-solid fa-table-cells" size="xl" className={classNames(item.current ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-600',
                    'h-4 w-4 shrink-0')} /> 
          
                <span className="truncate">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;