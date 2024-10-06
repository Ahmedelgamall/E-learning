import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS and Popper.js
import './how-it-work.scss';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { useTranslation } from 'react-i18next'; // Import useTranslation from react-i18next


const HowWork: React.FC = () => {
    const { t } = useTranslation(); // Call useTranslation hook to get t function


  return (
    <section className='how-it-work'>
        <div className="container">
            <div className="row">
        <h2>{t('how.h1')} <span>{t('how.h1span')}</span></h2>
                <div className="col-md-3">
                    <div className="box">
                        <IoMdSearch className='icon' />
                        <h3>{t('how.box1')}</h3>
                        <p>{t('how.box1s')}</p>
                    </div>
                </div>
                <div className="col-md-1 centering">
                <MdOutlineKeyboardDoubleArrowRight className='arrow-icon' />
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <IoDocumentTextOutline className='icon' />
                        <h3>{t('how.box2')}</h3>
                        <p>{t('how.box2s')}</p>
                    </div>
                </div>
                <div className="col-md-1 centering">
                <MdOutlineKeyboardDoubleArrowRight className='arrow-icon' />
                </div>
                <div className="col-md-3">
                    <div className="box">
                        <LiaCertificateSolid className='icon' />
                        <h3>{t('how.box3')}</h3>
                        <p>{t('how.box3s')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default HowWork;