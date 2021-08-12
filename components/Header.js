import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/800px-Airbnb_Logo_Bélo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle section */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-md">
        <input
          className="flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right section */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer hidden sm:inline-flex" />
        <div className="flex sm:border-2 p-2  rounded-full cursor-pointer space-x-2 items-center">
          <MenuIcon className="h-6 hidden sm:inline-flex" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
