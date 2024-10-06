import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS and Popper.js
import './Features.scss';
import { GiFlexibleStar } from "react-icons/gi";
import { FaDownload } from "react-icons/fa6";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { setLanguage } from '../../redux/languageSlice';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();


  return (
    <section className='Features'>
        <div className="row">
            <div className="col-md-6 col-12 left">
                <h4>{t('features.h1')}</h4>
                <h2>{t('features.h2')}</h2>
                <h4>{t('features.h3')}</h4>
                <a href="#register"><button className='mainBtn'>{t('features.btn')}</button></a>
            </div>
            <div className="col-md-6 col-12 right">
              <div className="boxes">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="box">
                    <GiFlexibleStar className="icon greenIcon" />
                    <div className="cont">
                      <h3>{t('features.box1')}</h3>
                      <h4>{t('features.box1s')}</h4>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="box">
                      <FaDownload className="icon blueIcon"  />
                      <div className="cont">
                        <h3>{t('features.box2')}</h3>
                        <h4>{t('features.box2s')}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="box">
                    <MdOutlinePauseCircleFilled className="icon redIcon"  />
                    <div className="cont">
                      <h3>{t('features.box3s')}</h3>
                      <h4>{t('features.box3s')}</h4>
                    </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="box">
                    <MdSupportAgent className="icon yellowIcon"  />
                    <div className="cont">
                      <h3>{t('features.box4')}</h3>
                      <h4>{t('features.box4s')}</h4>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Features;
