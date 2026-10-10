import React from 'react';
import { FeaturedMenu } from '../components/home/FeaturedMenu';
import { Hero } from '../components/home/Hero';
import { HighlightsBar } from '../components/home/HighlightsBar';
import { PromoHighlight } from '../components/home/PromoHighlight';
import { StoryTeaser } from '../components/home/StoryTeaser';
import { VisitSection } from '../components/outlet/VisitSection';
import { DeliveryOrder } from '../components/promo/DeliveryOrder';

export function Home() {
  return (
    <>
      <Hero />
      <HighlightsBar />
      <StoryTeaser />
      <FeaturedMenu />
      <PromoHighlight />
      <VisitSection background="mint" />
      <DeliveryOrder />
    </>);

}