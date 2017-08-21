/**
 * Component of josephmorse.me
 *
 * @author Joseph Morse <tamed.lionheart@gmail.com>
 * @version 0.1.0
 * @license https://github.com/jnmorse/react-webpack/blob/master/LICENSE MIT
 */

import React from 'react';

const Footer = props =>
  <footer className="container-fluid" style={{ marginTop: 10 }}>
    {props.children}
  </footer>;

export default Footer;
