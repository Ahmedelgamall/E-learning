import React, { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation from react-i18next
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS and Popper.js
import './MainSec.scss'; // Import your custom CSS
import '../../styles/componentsStyle.scss'; // Import your custom CSS

const MainSec: React.FC = () => {
  const { t } = useTranslation(); // Call useTranslation hook to get t function

  return (
    <div className="main-sec">
      <div className="container">
        <div className="row">
          {/* Main content */}
          <div className="abs-sec">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 col-12">
                  <div className="abd-q">
                    <h1>{t('st-homeBanner')}</h1> {/* Translated text */}
                    <p>{t('sec-homeBanner')}</p>
                    <a href="#courses">{t('third-homeBanner')}</a>
                  </div>
                </div>
                {/* Form Section */}
                <div className="col-lg-5 col-12">
                  <form id="register" action="post">
                    <h2> {t('homeForm.title')}</h2>
                    <h5> {t('homeForm.small-title')}</h5>
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <input type="text" placeholder= {t('homeForm.first')} />
                      </div>
                      <div className="col-md-6 col-12">
                        <input type="text" placeholder= {t('homeForm.last')} />
                      </div>
                      <div className="col-12">
                        <input type="email" placeholder= {t('homeForm.email')} />
                      </div>
                      <div className="col-12">
                        <select className="form-select language-select-custom">
                          <option value="1">{t('homeForm.program')} 1</option>
                          <option value="2">{t('homeForm.program')} 2</option>
                          <option value="3">{t('homeForm.program')} 3</option>
                        </select>
                        <div className="col-12">
                          <textarea name="details" placeholder={t('homeForm.details')} id="details"></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button>{t('homeForm.btn')}</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSec;
