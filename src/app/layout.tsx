"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto';
import './globals.css';
import '../app/styles/componentsStyle.scss';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux'; // Import Redux Provider
import store from './redux/store'; // Import your Redux store

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const currentLang = i18n?.language || 'en';
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={currentLang} dir={dir}>
      <head>
        {/* Meta tags, title, etc. */}
      </head>
      <body>
        <Provider store={store}> {/* Wrap your app in Provider */}
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
