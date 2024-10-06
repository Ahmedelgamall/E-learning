import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS and Popper.js
import './Footer.scss'; // Import your custom CSS

const Footer: React.FC = () => {



  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-6">
                    <h3>Educate</h3>
                    <p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
                </div>
                {/* <div className="col-lg-3 col-md-4 col-6">
                    <h3>Latest News</h3>
                    <p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <h3>Useful Links</h3>
                    <p>Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home</p>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                    <h3>Flexible learning</h3>
                    <img src="../../assets/images/flex.png" alt="" />
                </div> */}
            </div>
        </div>
    </footer>
  );
}

export default Footer;
