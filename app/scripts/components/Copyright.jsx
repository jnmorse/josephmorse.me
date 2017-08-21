import React from 'react';
import Person from '../models/Person';

const Copyright = () =>
  <div itemScope itemType="https://schema.org/WebSite">
    <p>
      &copy;<span itemProp="copyrightYear">2016</span>
      <span
        itemProp="copyrightHolder"
        style={{ marginLeft: 10 }}
        itemScope
        itemType="http://schema.org/Person"
      >
        <a itemProp="url" href="https://github.com/jnmorse">
          <span itemProp="givenName">Joseph</span>
          <span itemProp="familyName">Morse</span>.me
        </a>
      </span>;&nbsp;
      <span>
        Licensed under{' '}
        <a
          itemProp="license"
          href="https://github.com/jnmorse/react-webpack/blob/master/LICENSE"
        >
          MIT
        </a>;
      </span>
    </p>
  </div>;

export default Copyright;
