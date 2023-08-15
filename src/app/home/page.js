'use client';
import { Grid } from '@/components/shared/Grid';
import { Navbar } from '@/components/shared/Navbar';
import { withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const Home = withTheme(({ theme, variant = 'default' }) => {
  return <Grid></Grid>;
});

export default withTheme(Home);
