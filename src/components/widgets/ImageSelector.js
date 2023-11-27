

const ImageSelector = (props) => {
  const handleClickImage = (image) => {
    //Set the image
    props.setSelectedImage(image);

    //Remove the overlay if it there
    closeDialog();
    // const overlayComponents = document.querySelectorAll('.overlay');
    // console.log('Overlay componentns', overlayComponents);
    // overlayComponents.forEach((component) => {
    //   console.log('COMPONENT', component);
    //   component.classList.remove('overlay');
    // });
  }
  
  const closeDialog = () => {
    //Remove the overlay if it there
    const overlayComponents = document.querySelectorAll('.overlay');
    overlayComponents.forEach((component) => {
      console.log('COMPONENT', component);
      component.classList.remove('overlay');
    });
  }
  
  return (
    <div className="image-selector-panel">
      <h2>Choose an Image</h2>
      <div className='image-selector' >
        {
          props.images.map( (ImageComponent,idx) => (
            <div key={idx} id={idx} onClick={ () => handleClickImage(props.images[idx]) } className="select-image-container">
              <ImageComponent className='select-image' />
            </div>
            
          ))  
        }
      </div>
      <button className="exit-button" onClick={() => closeDialog()}>Exit</button>
    </div>
  );
}

export default ImageSelector;