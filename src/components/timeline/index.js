import React from 'react';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import Styles from './styled';
import toKebabCase from '../../utils/toKebabCase';

export default ({ projects = [] }) => {
  const projectsByYear = projects.reduce((years, { end_date, ...rest }) => {
    if (years[end_date]) {
      return {
        ...years,
        [end_date]: [
          ...years[end_date],
          {
            end_date,
            ...rest,
          },
        ],
      };
    } else {
      return {
        ...years,
        [end_date]: [
          {
            end_date,
            ...rest,
          },
        ],
      };
    }
  }, {});
  const orderedProjects = Object.keys(projectsByYear).reduce(
    (projects, year) => {
      const projectsForYear = projectsByYear[year];

      return [...projects, { year, projects: projectsForYear }];
    },
    []
  );

  return (
    <Styles>
      <section className="inner">
        {orderedProjects.map(({ year, projects: projectsByYear }) => (
          <div className="timeline_year">
            <h4>{year}</h4>

            <ul>
              {projectsByYear.map(
                ({ project_name, project_address, end_date }) => (
                  <InView key={project_name} threshold="1">
                    {({ inView, ref }) => (
                      <li
                        className={inView ? 'active' : ''}
                        ref={ref}
                        key={project_name}>
                        <Link to={`/projects/${toKebabCase(project_name)}`}>
                          <h2>{project_name}</h2>
                          <h4>{project_address}</h4>
                        </Link>
                      </li>
                    )}
                  </InView>
                )
              )}
            </ul>
          </div>
        ))}
      </section>
    </Styles>
  );
};
