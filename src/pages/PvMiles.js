import React from 'react';
import '../static/css/PvMiles.css';
import PropTypes from 'prop-types';
import ParallaxComponent from '../components/Parallax/ParallaxComponent';

function PvMiles({ kwh, CO2, pageIndex }) {
  return (
    <div className="pv-miles-background">
      <ParallaxComponent pageIndex={pageIndex} transitionDelay={0} transitionTime={1500}>
        <div className="split pv-miles-textbox">
          <p className="pv-text pv-text-regular">
            The amount of clean, green energy generated by PV4EV <strong>THIS YEAR</strong>
          </p>

          <p className="pv-text">
            {kwh && 'is enough to drive a passenger vehicle'}
            {CO2 && 'is enough to substitute'}
          </p>
          <p className="pv-text-huge">
            {kwh && Math.round((kwh * 10) / 3)}
            {CO2 && (Math.round(CO2 / 100) / 10).toFixed(1)}
          </p>
          <p className="pv-text-big">
            {kwh && 'MILES'}
            {CO2 && (
              <span className="line-height">
                TONS OF CO<sub>2</sub>
              </span>
            )}
          </p>
          <p className="pv-text pv-text-regular">
            {kwh && Math.round((kwh * 10) / 3) >= 21000 && 'Almost all the way around the Earth!'}
            {kwh &&
              Math.round((kwh * 10) / 3) < 21000 &&
              Math.round((kwh * 10) / 3) >= 10000 &&
              'About 1/2 way around the Earth!'}
            {kwh && Math.round((kwh * 10) / 3) < 11000 && 'Thats a lot of miles!'}
            {CO2 && (
              <span>
                That&apos;s <b>{Math.round(CO2 / 8.9)}</b> gallons of gasoline!
              </span>
            )}
          </p>
        </div>
      </ParallaxComponent>
    </div>
  );
}

PvMiles.propTypes = {
  kwh: PropTypes.number.isRequired,
  CO2: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
};

export default PvMiles;
