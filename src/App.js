import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter';
import Nav from './components/Nav';

// import Corousel from './components/Corousel';
import Header from './components/Header';
// import Become from './components/Become';
// import Trendingcourses from './components/Trendingcourses';
// import Recentadditions from './components/Recentadditions';
// import Discover from './components/Discover';
// import Review from './components/Review';
// import Enroll from './components/Enroll';
// import Acheivers from './components/Acheivers';
// import Whyweare from './components/whyweare';
// import Ourtrainers from './components/Ourtrainers';
// import Latestjobs from './components/Latestjobs';
// import Ourclients from './components/Ourclients';
import Footer from './components/Footer';
import Contact from './components/Contact';
// import Uidevelopment from './components/Uidevelopment';
// import {Switch,Route, Router} from 'react-router-dom'
import Router from './components/Router';
function App() {
  return (
    <div className="App">
      
     
     
     <Header/>
    <Nav/>
     <Router/> 
<Footer/>
<Contact/>
    </div>
  );
}

export default App;
