
import './App.css'
import PageHeader from "./components/Pageheader/PageHeader.jsx";
import Contents from './components/content/contents.jsx';
import Pagecontents from './components/Pagecontent/Pagecontents.jsx';
import Pagecontents2 from './components/pagecontents2/pagecontents2.jsx';
import Details from './components/details/details.jsx';
import Footer from './components/footers/footer.jsx';
function App() {
 return(
  <div className='bg'>
  <div className='page'>
  <PageHeader />
  <Contents />
  </div>
  <div className='pagecon'>
  <Pagecontents/>
  <Pagecontents2 />
  <Details/>
  <Footer/>
  </div>
  </div>
 )
   
  
}

export default App
