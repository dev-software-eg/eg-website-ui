import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { type NavLink } from '../api/models';

const NAV_LINKS: NavLink[] = [
  { label: 'Home',       href: '/' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
  { label: 'StyleSheet', href: '/stylesheet' },
];

export default function RootLayout() {
  return (
    <>
      <Navigation links={NAV_LINKS} />
      <Outlet />
    </>
  );
}
