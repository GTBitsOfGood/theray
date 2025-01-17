import React from 'react';
import '../static/css/Partners.css';
import '../static/css/commons.css';
import PropTypes from 'prop-types';
import kia from '../static/images/kia-logo-png-transparent 1.png';
import gdot from '../static/images/DOT-GA-US-Logo-2018 1.png';
import facebook from '../static/images/facebook.png';
import twitter from '../static/images/twitter.png';
import linkedin from '../static/images/linked in.png';
import raylogo from '../static/images/ray-anderson-logo 1.png';
import instagram from '../static/images/instagram.png';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';
import hannahlogo from '../static/images/hannahlogo.png';

class Partners extends React.PureComponent {
  render() {
    const { hannahsolar, pageIndex } = this.props;
    return (
      <div className="partners-background">
        <div className="partners-body">
          <img className="kia" src={kia} alt="Kia logo" />
          <img className="gdot" src={gdot} alt="Dot logo" />
          <img className="ray" src={raylogo} alt="Ray C. Anderson logo" />
          {hannahsolar && <img className="hannah" src={hannahlogo} alt="Hannah logo" />}
          <ParallaxComponent
            pageIndex={pageIndex}
            transitionTime={1500}
            transitionDelay={0}
            styles={{ height: '100%' }}
          >
            <p className="partners-toptext">
              POWERED BY <br />
            </p>
            <div className="flex-col links-container">
              <p className="partners-drive">LET&apos;S DRIVE THE FUTURE</p>
              <div className="flex">
                <a href="https://www.facebook.com/TheRayHighway/">
                  <img className="logo" src={facebook} alt="facebook logo" />
                </a>
                <a href="https://twitter.com/therayhighway?lang=en">
                  <img className="logo" src={twitter} alt="twitter logo" />
                </a>
                <a href="https://www.linkedin.com/company/therayhighway/">
                  <img className="logo" src={linkedin} alt="linkedin logo" />
                </a>
                <a href="https://www.instagram.com/therayhighway/?hl=en">
                  <img className="logo" src={instagram} alt="instagram logo" />
                </a>
              </div>
            </div>
          </ParallaxComponent>
          <p className="return-start">click to return to start</p>
        </div>
      </div>
    );
  }
}

Partners.propTypes = {
  hannahsolar: PropTypes.bool,
  pageIndex: PropTypes.number,
};
Partners.defaultProps = {
  hannahsolar: false,
  pageIndex: -2,
};

export default Partners;
