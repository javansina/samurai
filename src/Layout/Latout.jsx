import Footer from './Footer';
import Header from './Header';

function Latout({ children }) {
   return (
      <>
         <div className="px-3 my-5 sm:px-5 xl:container lg:containerLg h-screen flex flex-col justify-between">
            <div>
               <Header />
               {children}
            </div>
            <Footer />
         </div>
      </>
   );
}

export default Latout;
