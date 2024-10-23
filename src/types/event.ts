export interface EventItemProps {
  title: string;
  date: string;
  time: string;
  attendees: string;
  onClickSettings?: () => void; // Optional callback for the settings icon
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  attendees: string;
}
