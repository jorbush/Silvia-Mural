import logo from './logo.svg';
import './App.css';
import Title from '../Title'

function App() {
  //const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      {/* <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />} */}
    </div>
  );
}

export default App;
