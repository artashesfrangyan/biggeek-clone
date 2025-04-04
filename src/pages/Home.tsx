import { Layout } from '../components/Layout';
import { HeroBanner } from '../components/HeroBanner';
import { Categories } from '../components/Categories';

export const Home = () => {
  return (
    <Layout>
      <HeroBanner />
      <Categories />
    </Layout>
  );
};