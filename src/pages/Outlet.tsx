import React from 'react';
import { CtaBand } from '../components/common/CtaBand';
import { Facilities } from '../components/outlet/Facilities';
import { OutletIntro } from '../components/outlet/OutletIntro';
import { VisitSection } from '../components/outlet/VisitSection';
import { outletContent } from '../data/outletContent';

export function Outlet() {
  const r = outletContent.route;
  return (
    <>
      <OutletIntro />
      <VisitSection background="paper" />
      <Facilities />
      <CtaBand
        overline={r.overline}
        title={r.title}
        description={r.description} />
      
    </>);

}