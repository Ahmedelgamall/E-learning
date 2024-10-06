import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS and Popper.js
import './contact.scss';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { useTranslation } from 'react-i18next'; // Import useTranslation from react-i18next


const Contact: React.FC = () => {
    const { t } = useTranslation(); // Call useTranslation hook to get t function

    
    return (
        <section id='contact' className='contact'>
            <div className="container">
                <div className="heading">
                    <h2><span>{t('contact.h1')}</span> {t('contact.h1span')} </h2>
                    <p>{t('contact.p')}</p>
                </div>
                <div className="row">
                    <div className="col-md-5 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37809421921!2d31.217264609247117!3d30.059482028205437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1728130819732!5m2!1sen!2seg" loading="lazy"></iframe>
                    </div>
                    <div className="col-md-7 col-12">
                        <form action="post">
                            <input type="text" placeholder= {t('contact.name')}/>
                            <input type="email" placeholder= {t('contact.mail')}/>
                            <textarea name="message" placeholder={t('contact.message')} id="message"></textarea>
                            <button>{t('contact.btn')}</button>
                        </form>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default Contact;