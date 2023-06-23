import { SideMenuItemLabelEnum } from 'enums';
import { Layout } from '../components';

const HomeScreen = () => {
  return (
    <Layout currentPage={SideMenuItemLabelEnum.SONGS}>
      <span>Hi</span>
    </Layout>
  );
};

export default HomeScreen;
