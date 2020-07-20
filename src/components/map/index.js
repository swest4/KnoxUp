import React, { useState } from 'react';
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import ReactSlider from 'react-slider';
import { css } from 'emotion';

import { Link } from 'react-router-dom';
import Embassy from '../../svgs/Embassy';

import toKebabCase from '../../utils/toKebabCase';
import useRdsData from '../../hooks/useRdsData';

import styled from '@emotion/styled';

const StyledSlider = styled(ReactSlider)`
  width: calc(100% - 2rem);
  height: 25px;
  margin: 1rem;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 50px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 1rem;
  cursor: grab;
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
const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 110px)',
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
    vis = (term - (endyear - currentYear)) / term;
  }
  if (start > currentYear) {
    vis = 0;
  }
  return vis;
};

export default () => {
  const [year, setYear] = useState(2020);
  const sites = useRdsData();

  return sites ? (
    <div className={css``}>
      <StyledSlider
        min={2003}
        max={2030}
        defaultValue={[2020]}
        renderTrack={Track}
        renderThumb={Thumb}
        onChange={(value) => setYear(value)}
      />
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          {sites.map((site) => (
            <InfoWindow
              key={site.project_name}
              position={{ lat: site.lat, lng: site.lng }}>
              <Link to={`/projects/${toKebabCase(site.project_name)}`}>
                <Embassy
                  width="30px"
                  style={{
                    opacity: visibility(year, site.end_date, site.term),
                  }}
                  className={css`
                    position: relative;
                    z-index: 500;
                    &:hover {
                      + p {
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
                    color: #000;
                    background: #fff;
                    border-radius: 1rem;
                    border: 1px #fff solid;
                    padding: 0.5rem;
                    transform: translateX(-50%);
                  `}>
                  {site.project_name}
                </p>
              </Link>
            </InfoWindow>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  ) : null;
};
