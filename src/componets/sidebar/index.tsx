import  { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed h-full w-64 bg-gray-400 text-white transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className=' flex justify-end mr-[5px]'>
           <span className=" cursor-pointer text-[15px]" onClick={closeNav}>
          &times;
        </span> 
        </div>
        
        <ul className=' flex flex-col'>
            <li> <a href="#">About</a></li>
            
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        </ul>
    
      </div>
      <span
        className="text-3xl cursor-pointer"
        onClick={isOpen ? closeNav : openNav}
      >
        &#9776;
      </span>
    </>
  );
};

export default Sidebar;
