import { Route, Routes } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Latout from './Layout/Latout';
import PageNotFound from './pages/404';

function App() {
   return (
      <>
         <Latout>
            <Routes>
               <Route index element={<Page1 />} />
               <Route path="/Katana" element={<Page2 />} />
               <Route path="/Wakizashi" element={<Page3 />} />
               <Route path="/Tanto" element={<Page4 />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </Latout>
      </>
   );
}

export default App;
