import type { PropsWithChildren } from 'react';
import Nav from './Nav';

const Layout = ({ children }: PropsWithChildren<{}>) => (
  <div>
    <Nav />
    <main>
      {children}
    </main>
  </div>
);

export default Layout;
