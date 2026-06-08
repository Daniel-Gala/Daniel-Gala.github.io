import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';
import ButtonLinksList from './ButtonList.jsx';
import DarkMode from './DarkMode.jsx';






function App() {

return(
  <>
   <Header /> 
     <DarkMode />
     
     <div class="page">
     <Card />
     <ButtonLinksList />
      </div>

     <footer> 
      <Footer /> 
      </footer>
  </>
)

}

export default App