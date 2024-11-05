import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('ic-analytics'),
  },
  {
    title: 'Earnings',
    path: '/earnings',
    icon: icon('ic-banking'),
  },
  {
    title: 'News',
    path: '/news',
    icon: icon('ic-news'),
  },
];
