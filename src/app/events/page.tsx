import { EventsList } from '@/components/EventList';
import React from 'react';
import { eventData } from '@/data/eventData';

const Events = () => {
  return (
    <div>
      <EventsList events={eventData} showAllLink />
    </div>
  );
};

export default Events;
