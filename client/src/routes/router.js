import { Overview, Offices } from '../pages';

const router = [
  {
    name: 'Overview',
    component: Overview,
    exact: true,
    path: '/'
  },
  {
    name: 'Offices',
    component: Offices,
    exact: true,
    path: '/offices/:id'
  },
];

export default router;