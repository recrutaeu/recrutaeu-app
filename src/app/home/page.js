'use client';
import { Navbar } from '@/components/shared/Navbar';
import { withTheme } from '@/contexts/ThemeContext';
import { commons } from '@/locales';

const Home = () => (
  <>
    <Navbar.Root>
      <Navbar.Link link="/">{commons.navbar.home}</Navbar.Link>
      <Navbar.Link link="/">{commons.navbar.candidate}</Navbar.Link>
      <Navbar.Link link="/">{commons.navbar.company}</Navbar.Link>
    </Navbar.Root>
  </>
);

export default withTheme(Home);
