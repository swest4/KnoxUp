import React, { useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import ReactSlider from 'react-slider';
import { css } from 'emotion';
import { motion, useAnimation } from 'framer-motion';

import { Link } from 'react-router-dom';
import Embassy from '../../svgs/Embassy';

import toKebabCase from '../../utils/toKebabCase';
import useRdsData from '../../hooks/useRdsData';

import styled from '@emotion/styled';
import darkTheme from './darkTheme';
import theme from '../../theme';

const StyledSlider = styled(ReactSlider)`
  width: calc(100% - 2rem);
  height: 1.1625rem;
  margin: 1.2rem;
`;

const StyledThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  line-height: 25px;
  width: 3.5rem;
  text-align: center;
  background-color: ${(props) => props.theme.color.purple};
  color: #fff;
  border-radius: 0.5rem;
  transform: translateY(-22%);
  cursor: grab;

  &:focus{
    outline: none;
    box-shadow: 0px 0px 6px #0066ff;
  }
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: #dddddd;
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

// TODO: Add resize-watcher to change this. Might have to change via maps api call.
const containerStyle = {
  width: '100%',
  height: `calc(100vh - ${window.innerWidth > parseInt(theme.breakpoints.desktop.slice(0, -2)) ? 110 : 191}px)`,
};

const center = {
  lat: 35.9606,
  lng: -83.9207,
};

const visibility = (currentYear, endyear, term) => {
  let vis = 1;
  const start = endyear - term;
  if (currentYear >= endyear) {
    return 1;
  }

  if (endyear > currentYear && start <= currentYear) {
    vis = 0.3 + ((term - (endyear - currentYear)) / term / 0.3);
  }
  if (start > currentYear) {
    vis = 0;
  }
  return vis;
};

// const marginCrop = (currentYear, endyear, term) => {
//   let crop = 0;
//   const start = endyear - term;
//   if (currentYear >= endyear) {
//     return 0;
//   }
//
//   if (endyear > currentYear && start <= currentYear) {
//     crop = (1 - (term - (endyear - currentYear)) / term) * 85;
//   }
//   if (start > currentYear) {
//     crop = 85;
//   }
//   return crop;
// }


export default () => {
  const [year, setYear] = useState(2020);
  const sites = useRdsData();
  const controls = useAnimation();

  const onIdle = (map) => {
    console.log('idle now')
    controls.start({
      opacity: 1,
      transition: { duration: 2 },
    });
  };

  return sites ? (
    <div>
      <StyledSlider
        min={2003}
        max={2030}
        defaultValue={[2020]}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(value) => setYear(value)}
      />
      <motion.div animate={controls} initial={{ opacity: 0 }}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16} onIdle={onIdle} options={{styles: darkTheme}}>
            {sites.map((site) => (
              <InfoWindow
                key={site.project_name}
                position={{ lat: site.lat, lng: site.lng }}>
                <Link
                  to={`/projects/${toKebabCase(site.project_name)}`}
                >
                  <Embassy
                    width="30px"
                    style={{
                      opacity: visibility(year, site.end_date, site.term),
                      // clipPath: `inset(${marginCrop(year, site.end_date, site.term)}px 0 0 0)`,
                    }}
                    className={css`
                      position: relative;
                      overflow: hidden;
                      z-index: 1;
                      &:hover {
                         ~ p {
                          opacity: 1;
                        }
                      }
                    `}
                  />
                  <p
                    className={css`
                      position: relative;
                      z-index: 1000;
                      opacity: 0;
                      margin-top: 0;
                      color: #fff;
                      background: #8D6AF6;
                      border-radius: 0.5rem;
                      border: 1px #fff solid;
                      padding: 0.5rem;
                      transform: translateY(20%) translateX(-35%);
                    `}>
                    {site.project_name}
                  </p>
                </Link>
              </InfoWindow>
            ))}
          </GoogleMap>
        </LoadScript>
      </motion.div>
    </div>
  ) : null;
};
