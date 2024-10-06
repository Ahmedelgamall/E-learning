"use client";

import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto'; // Import the font
import '../app/styles/componentsStyle.scss';
import MainSec from './components/mainsec/MainSec';
import Courses from './components/courses/Courses';
import Features from './components/Features/Features';
import HowWork from './components/how-it-work/how-it-work';
import Contact from './components/contact/contact';
import Teachers from './components/teachers/teachers';
import Link from "next/link";
import './i18n'; // Import the i18n configuration
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Home = () => {
    const { t, i18n } = useTranslation();

    // Function to change language
    const changeLanguage = (lang) => {
        console.log(`Changing language to: ${lang}`); // Debug log
        i18n.changeLanguage(lang);
    };

    return (
        <main style={{ fontFamily: 'Roboto, sans-serif' }}>
            <MainSec />
            <Courses />
            <Features />
            <Teachers />
            <HowWork />
            <Contact />
        </main>
    );
};

export default Home;
