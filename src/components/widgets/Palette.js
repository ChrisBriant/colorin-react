
import { rgbToHex } from "../../helpers/helpers";

const Palette = (props) => {

  const getColor = (e) => {
    console.log('The color is', getComputedStyle(e.target).backgroundColor);
    const colorHexValue = rgbToHex(getComputedStyle(e.target).backgroundColor);
    console.log('Color Hex', colorHexValue);
    props.setSelectedColor(colorHexValue);
  }

  return (

      <div className="palette">
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
        <div className="color-block" onClick={getColor}></div>
      </div>
  );
}
export default Palette;