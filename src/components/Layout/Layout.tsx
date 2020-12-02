import React, { ReactElement } from 'react';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import classes from './Layout.module.scss';

interface Props {
   children: ReactElement;
}

const Layout = ({ children }: Props) => {
   return (
      <div className={classes.Layout}>
         <NavBar />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
