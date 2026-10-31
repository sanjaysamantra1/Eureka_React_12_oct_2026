// App Is a component : Display Some Content
// Technically a component is a function that returns some HTML elements to be displayed
// This is Root Component

import Navbar from './components/navbar/Navbar.jsx';
import Categories from './components/categories/Categories.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import Body from './components/body/Body.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return <div>
    <Navbar />
    <Categories />
    <Carousel />
    <Body />
    <Footer />
  </div>
}
export default App;