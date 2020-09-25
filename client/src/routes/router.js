import { Company, Office } from '../pages';

const router = [
  {
    name: 'Company',
    component: Company,
    exact: true,
    path: '/'
  },
  {
    name: 'Office',
    component: Office,
    exact: true,
    path: '/office/:companyName'
  },
];

export default router;