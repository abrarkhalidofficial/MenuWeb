import { Head } from '@router';
import { Outlet } from 'react-router-dom';

export default () => {
  return (
    <>
      <Head
        title="Menu"
        image="/favicon.ico"
        url="https://vitefilerouter.com"
        description="Menu"
      />
      <Outlet />
    </>
  );
};
