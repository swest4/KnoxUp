import React from 'react';
import { useInView, InView } from 'react-intersection-observer';
import Styles from './styled';
import CircleProgress from '../shared/circleProgress';
import toCurrency from '../../utils/toCurrency';

export default ({
  appraised_value_post_project,
  end_date,
  term,
  taxes_pre_project,
  taxes_post_project_city,
  taxes_post_project_county,
  taxes_post_project_combined,
  taxes_increase,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? 'active' : ''}>
      <div className="inner">
        <InView threshold={0.25} triggerOnce={true}>
          {({ ref, inView }) => (
            <section ref={ref} className={inView ? 'active' : ''}>
              <h3>Total Project Cost</h3>

              <div className="columns">
                <div className="column">
                  <h4>{toCurrency(appraised_value_post_project)}</h4>
                </div>
              </div>
            </section>
          )}
        </InView>

        <InView threshold={0.25} triggerOnce={true}>
          {({ ref, inView }) => (
            <section ref={ref} className={inView ? 'active' : ''}>
              <h3>Project Length</h3>

              <div className="columns">
                <div className="column">
                  <h4>{term}</h4>
                  <h6>Years</h6>
                </div>
                <div className="column">
                  <h4>{end_date}</h4>
                  <h6>Completion Date</h6>
                </div>
              </div>
            </section>
          )}
        </InView>

        <InView threshold={0.25} triggerOnce={true}>
          {({ ref, inView }) => (
            <section ref={ref} className={inView ? 'active' : ''}>
              <h3>Pre Project Taxes</h3>

              <div className="columns">
                <div className="column">
                  <CircleProgress>
                    <h4>{toCurrency(taxes_pre_project)}</h4>
                    <h6>Pre Project</h6>
                  </CircleProgress>
                </div>
                <div className="column">
                  <CircleProgress>
                    <h4>{toCurrency(taxes_increase)}</h4>
                    <h6>Increase</h6>
                  </CircleProgress>
                </div>
              </div>
            </section>
          )}
        </InView>

        <InView threshold={0.1} triggerOnce={true}>
          {({ ref, inView }) => (
            <section ref={ref} className={inView ? 'active' : ''}>
              <h3>Post Project Taxes</h3>

              <div className="columns">
                <div className="column">
                  <CircleProgress>
                    <h4>{toCurrency(taxes_post_project_city)}</h4>
                    <h6>City</h6>
                  </CircleProgress>
                </div>
                <div className="column">
                  <CircleProgress>
                    <h4>{toCurrency(taxes_post_project_county)}</h4>
                    <h6>County</h6>
                  </CircleProgress>
                </div>
                <div className="column">
                  <CircleProgress>
                    <h4>{toCurrency(taxes_post_project_combined)}</h4>
                    <h6>Combined</h6>
                  </CircleProgress>
                </div>
              </div>
            </section>
          )}
        </InView>
      </div>
    </Styles>
  );
};
