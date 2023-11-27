const SelectedColorBlock = (props) => {
  //const colorStyle = `background-color:${props.color};`;
  const colorStyle = { backgroundColor: props.color };

  console.log(colorStyle);
  return (
    <div className="selected-color" style={colorStyle}></div>
  );
}

export default SelectedColorBlock;