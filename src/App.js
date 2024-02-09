import './pages/css/About.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import elementImage from './Element.png';
import { Helmet } from 'react-helmet';


const TITLE = 'Pascual Liner Inc.';

function App() {
  return (
    <div className="App">
      <Header />
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <div className="image">
        <img className="element" alt="Element" src={elementImage} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
