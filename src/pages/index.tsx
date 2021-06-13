import styles from 'styles/Home.module.css';

import Header from 'components/Header';
import Map from 'components/MapContents';
import Footer from 'components/Footer';
import { db } from 'firebase/firebase';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Map />
      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const ref = db.collection('lalaport');
  const allData = ref;
  console.log(allData);

  return {
    props: {
      allData
    }
  };
};

export default Home;
