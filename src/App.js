import './App.css';
import { useState } from 'react';;
import { ReactComponent as MySvg } from './assets/svg/rose.svg';
import { ReactComponent as Shark } from './assets/svg/shark.svg';
import { ReactComponent as AlbumIcon } from './assets/svg/album-icon.svg';
import Palette from './components/widgets/Palette';
import SelectedColorBlock from './components/widgets/SelectedColorBlock';
import ImageSelector from './components/widgets/ImageSelector';

const handlePath = (e,selectedColor) => {
  console.log('clicked', e.target);
  e.target.setAttribute('style', '');
  e.target.setAttribute('fill', selectedColor);
}


const coloringImages = [
  Shark,
  MySvg
];

const setOverlay = () => {
  const page = document.querySelector('.App');
  const alubumOverlay = document.querySelector('.image-selector-panel-container');
  page.classList.add('overlay');
  alubumOverlay.classList.add('overlay');
}

function App() {
  const [selectedColor, setSelectedColor] = useState('#000');
  const [SelectedImageComponent, setSelectedImageComponent] = useState(coloringImages[1]);

  return (
      <div className='App'>
        <header>
          <h1>Color In Book</h1>
        </header>
        <main>
          <div className='palette-bar'>
            <div className='album-icon-container' onClick={() => setOverlay()}>
              <AlbumIcon id="album-icon" />
            </div>
            <div className="palette-container">
              <Palette setSelectedColor={setSelectedColor} />
              <SelectedColorBlock color={selectedColor} />
            </div>
          </div>
          <div className='body-section'>
            <div className='color-in-area'>
              <SelectedImageComponent className="color-in-image" onClick={(e) => handlePath(e,selectedColor)}/> 
            </div>
            <div className='image-selector-panel-container'>
              <ImageSelector images={coloringImages} setSelectedImage={setSelectedImageComponent} />
            </div>
          </div>
        </main>
        <footer>
          <p>By Chris Briant, &copy; {new Date().getFullYear() }</p>
        </footer>
      </div>
  );
}

export default App;
