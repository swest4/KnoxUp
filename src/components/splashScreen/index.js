import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../svgs/Logo';

export default ({ visible = true }) => (
  <motion.section
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, #060321, #2d224f)',
      zIndex: '999',
    }}
    transform={{
      duration: 2,
    }}>
    <motion.section
      initial={{
        opacity: 0,
        scale: 1.1,
        x: '-50%',
        y: '-50%',
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: '-50%',
        y: '-50%',
      }}
      style={{
        position: 'absolute',
        top: '33%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      transition={{
        duration: 0.4,
      }}>
      <Logo />
      <motion.h1
        initial={{
          opacity: 0,
          y: '10px',
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        style={{
          margin: 0,
        }}>
        KnoxUp
      </motion.h1>
    </motion.section>
  </motion.section>
);
