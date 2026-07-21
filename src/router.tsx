import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './screens/RootLayout';
import Home from './screens/Home';
import Stylesheet from './screens/Stylesheet';
import ContactUs from './screens/ContactUs';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/',           element: <Home /> },
      { path: '/stylesheet', element: <Stylesheet /> },
      { path: '/contact', element: <ContactUs /> },
    ],
  },
]);
