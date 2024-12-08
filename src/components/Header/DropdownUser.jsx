import { useState } from 'react'
import { Link } from 'react-router-dom'
import ClickOutside from '../ClickOutside'
import { FaUser, FaAddressBook, FaCog, FaChevronDown } from 'react-icons/fa' // Importing icons from react-icons
import UserOne from '../../images/user/user-01.png'

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Junaid Ali Shah
          </span>
          <span className="block text-xs">Full-Stack Developer</span>
        </span>

        <span className="h-12 w-12 rounded-full overflow-hidden">
          <img
            src={UserOne}
            alt="User"
            className="h-full w-full object-cover rounded-full"
          />
        </span>

        {/* Using the Chevron Down Icon for dropdown indicator */}
        <FaChevronDown className="hidden sm:block fill-current" size={12} />
      </Link>

      {/* Dropdown Start */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                {/* Using the User Icon */}
                <FaUser className="fill-current" size={22} />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                {/* Using the Address Book Icon */}
                <FaAddressBook className="fill-current" size={22} />
                My Contacts
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                {/* Using the Settings Icon */}
                <FaCog className="fill-current" size={22} />
                Settings
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* Dropdown End */}
    </ClickOutside>
  )
}

export default DropdownUser
