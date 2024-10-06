import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS and Popper.js
import './teachers.scss';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { useTranslation } from 'react-i18next'; // Import useTranslation from react-i18next


const Contact: React.FC = () => {
    const { t } = useTranslation(); // Call useTranslation hook to get t function

    
    return (
        <section id='teachers' className='teachers'>
            <div className="container">
                <div className="heading">
                    <h2><span>{t('teachers.h1')}</span> {t('teachers.h1span')} </h2>
                    <p>{t('teachers.p')}</p>
                </div>
            </div>
    </section>
  );
}

export default Contact;