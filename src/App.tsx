import { ImageSlider } from './ImageSlider';
import img from './assets/img.jpg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';

// alt tags just for demonstration purposes

const IMAGES = [
  { url: img, alt: "image" },
  { url: img1, alt: "image one" },
  { url: img2, alt: "image two" },
  { url: img3, alt: "image three" },
  { url: img4, alt: "image four" },
]


function App() {

  return (
    <div style={{
      maxWidth: "1200px",
      width: "100%",
      aspectRatio: "10 / 6",
      margin: "0 auto",
    }}>
      <ImageSlider images={IMAGES} />
    </div>
  )
}

export default App
