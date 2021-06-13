import styles from 'styles/Home.module.css';

import Header from 'components/Header';
import Map from 'components/MapContents';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
