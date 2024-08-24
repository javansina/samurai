import { useEffect, useState } from 'react';
import { GiPointySword } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Header() {
   const [style, setStyle] = useState(localStorage.getItem('savepath') || '/');

   const pathHandler = (e) => {
      setStyle(e.target.dataset.savepath);
      localStorage.setItem('savepath', `${e.target.dataset.savepath}`);
   };

   useEffect(() => {
      const path = localStorage.getItem('savepath');
      if (path && path !== window.location.pathname) {
         window.location.pathname = path;
         setStyle('path');
      }
   }, []);

   return (
      <div className="flex md:flex-row flex-col md:justify-around md:items-center rounded-2xl bg-myBlue-100">
         <div className="flex items-center justify-between pr-10">
            <h1 className="text-3xl font-mono font-bold text-myBrown-200 p-5">
               Samurai swords
            </h1>
            <GiPointySword size={40} color="#1c39bb" />
         </div>
         <div className="flex gap-x-5 pb-3 pl-5 md:p-5 text-myBrown-200 lg:text-xl font-medium">
            <Link
               className={`${style !== '/' && 'hover:text-myBlue-300'} ${
                  style === '/' && 'text-myBlue-200'
               }`}
               onClick={(e) => pathHandler(e)}
               data-savepath="/"
               to={'/'}
            >
               Home
            </Link>
            <Link
               className={`${style !== '/katana' && 'hover:text-myBlue-300'} ${
                  style === '/katana' && 'text-myBlue-200'
               }`}
               onClick={(e) => pathHandler(e)}
               data-savepath="/katana"
               to={'katana'}
            >
               Katana
            </Link>
            <Link
               className={`${
                  style !== '/wakizashi' && 'hover:text-myBlue-300'
               } ${style === '/wakizashi' && 'text-myBlue-200'}`}
               onClick={(e) => pathHandler(e)}
               data-savepath="/wakizashi"
               to={'/wakizashi'}
            >
               Wakizashi
            </Link>
            <Link
               className={`${style !== '/tanto' && 'hover:text-myBlue-300'} ${
                  style === '/tanto' && 'text-myBlue-200'
               }`}
               onClick={(e) => pathHandler(e)}
               data-savepath="/tanto"
               to={'/tanto'}
            >
               Tanto
            </Link>
         </div>
      </div>
   );
}

export default Header;
