import './App.css';
import image from './assets/images.jpeg';
import image1 from './assets/images1.jpeg';
import image2 from './assets/images2.jpeg';
import image3 from './assets/images3.jpeg';
import image4 from './assets/images4.jpeg';

const IMAGES = [image, image2, image3, image4]


function App() {

  return (
    <ImageSlider imageUrls={IMAGES} />
  )
}

export default App
