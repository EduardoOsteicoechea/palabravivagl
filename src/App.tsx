import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout001 from './components/Layout/Layout001/Layout001';

const LazyHomePage001 = lazy(() => import("./pages/Inicio"));
const LazyBeliefsPage001 = lazy(() => import("./pages/Creencias"));
const LazyChurchesPage001 = lazy(() => import("./pages/Iglesias"));
const LazyLeadershipPage001 = lazy(() => import("./pages/Liderazgo"));
const LazyHistoryPage001 = lazy(() => import("./pages/Historia"));
const LazyProjectsPage001 = lazy(() => import("./pages/Proyectos"));
const LazyResourcesPage001 = lazy(() => import("./pages/Recursos"));
const LazyContanctPage001 = lazy(() => import("./pages/Contacto"));

function App()
{
   return (
      <Layout001>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route index path="/" element={<LazyHomePage001 />} />
               <Route path="/creencias" element={<LazyBeliefsPage001 />} />
               <Route path="/iglesias" element={<LazyChurchesPage001 />} />
               <Route path="/liderazgo" element={<LazyLeadershipPage001 />} />
               <Route path="/historia" element={<LazyHistoryPage001 />} />
               <Route path="/proyectos" element={<LazyProjectsPage001 />} />
               <Route path="/recursos" element={<LazyResourcesPage001 />} />
               <Route path="/contacto" element={<LazyContanctPage001 />} />
            </Routes>
         </Suspense>
      </Layout001>
   );
}

export default App;
