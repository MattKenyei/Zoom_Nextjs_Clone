export interface IElements  {
    imgUrl: string,
    route: string,
    label: string

} 
export const sidebarElements: IElements[] = [
  {
    route: '/',
    label: 'Home',
    imgUrl: "/icons/Home.svg",
  },
  {
    route: '/upcoming',
    label: 'Upcoming',
    imgUrl: "/icons/upcoming.svg",
  },
  {
    route: '/previous',
    label: 'Previous',
    imgUrl: "/icons/previous.svg",
  },
  {
    route: '/recordings',
    label: 'Recordings',
    imgUrl: "/icons/Video.svg",
  },
  {
    route: '/personal-room',
    label: 'Personal room',
    imgUrl: "/icons/add-personal.svg",
  },
];
