import './pages/css/App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import elementImage from './Element.png';
import elementImage2 from './Element2.png';

import { Helmet } from 'react-helmet';

const TITLE = 'Home | Pascual Liner Inc.';

function App() {
  return (
    <div className="App">
      <Header />
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="image-container">
        <img className="element" alt="Element" src={elementImage} />
      </div>
      <div className="text-container">
        <h2>Be a part of the PLI Family!</h2>
        <div className="subtitle-home">Help Filipino communities reach their destination through our careers.</div>
        <a className="button" href="/careers">Learn More</a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
