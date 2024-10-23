import { Event } from '@/types/event';
import { EventItem } from '../EventItem';
import Link from 'next/link';
import React from 'react';

interface EventsListProps {
  events: Event[]; // List of events
  showAllLink?: boolean; // Optional "Show All" link
}

export const EventsList: React.FC<EventsListProps> = ({
  events,
  showAllLink = false,
}) => {
  return (
    <div className="rounded-lg bg-gray-50 p-4 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Events</h2>
      {events.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          date={event.date}
          time={event.time}
          attendees={event.attendees}
        />
      ))}
      {showAllLink && (
        <Link
          href="/events"
          className="mt-4 block text-blue-600 hover:underline"
        >
          Show All
        </Link>
      )}
    </div>
  );
};
