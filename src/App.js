import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Header from './components/Header';
import Why from './components/Why';
import User from './components/User';
import Feedback from './components/Feedback';
import Newstletter from './components/Newsletter';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App bg-blue-50">
      <Navbar />
      <Hero />
      <Cards />
      <Header />
      <Why />
      <User />
      <Feedback />
      <Newstletter />
      <Footer />
    </div>
  );
}

export default App;
