import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Title from '../gallery/Title'
import ImageGrid from '../gallery/ImageGrid';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {/* {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} */} 
    </div>
  );
}

export default App;
