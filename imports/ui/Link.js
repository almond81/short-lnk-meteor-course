import React from 'react';

import PrivateHeader from './PrivateHeader.js';
import AddLink from './AddLink.js';
import LinksList from './LinksList';
import LinksListFilters from './LinksListFilters';


export default () => {
  return (
    <div>
     <PrivateHeader title="Your links" />
     <div className="page-content">
       <LinksListFilters />
       <AddLink />
       <LinksList />
     </div>
    </div>
  );
};
