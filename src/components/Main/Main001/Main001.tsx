import React, { ReactNode } from 'react';
import './Main001.css';

interface LayoutProps
{
   children: ReactNode;
}

const Main001: React.FC<LayoutProps> = ({ children }) =>
{
   return (
      <main className="Main001-OuterContainer">
         {children}
      </main>
   );
};

export default Main001;