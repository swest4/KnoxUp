import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Styles from './styled';
import toKebabCase from '../../utils/toKebabCase';

export default ({ projects = [] }) => {
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <Styles ref={ref} className={inView ? 'active' : ''}>
      {projects.length > 0 && (
        <motion.div
          className="inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transform={{ duration: 0.4 }}>
          <div className="wrapper">
            <table>
              <thead>
                <tr>
                  <td>Project Name</td>
                  <td>Project Address</td>
                  <td>Completion Year</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {projects.map(({ project_name, project_address, end_date }) => (
                  <tr>
                    <td>{project_name}</td>
                    <td>{project_address}</td>
                    <td>{end_date}</td>
                    <td>
                      <Link to={`/projects/${toKebabCase(project_name)}/`}>
                        Read more
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </Styles>
  );
};
