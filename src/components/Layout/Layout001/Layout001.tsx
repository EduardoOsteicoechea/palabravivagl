import React, { ReactNode } from 'react';
import './Layout001.css';
import Header001 from '../../Header/Header001/Header001';
import Sidebar001 from '../../Sidebar/Sidebar001/Sidebar001';
import Footer001 from '../../Footer/Footer001/Footer001';
import Main001 from '../../Main/Main001/Main001';

interface LayoutProps
{
   children: ReactNode;
}

const Layout001: React.FC<LayoutProps> = ({ children }) =>
{
   return (
      <div className="Layout001">
         <Header001 />
         <Sidebar001 />
         <Main001 children={children} />
         <Footer001 />
      </div>
   );
};

export default Layout001;