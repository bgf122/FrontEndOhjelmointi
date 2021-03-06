import React, { useState } from 'react';


function HeaderButton(props) {
  
  const [style, setStyle] = useState(props.themes.blue);

  const change = () => {
    if (style === props.themes.black) {
      setStyle(props.themes.blue);
    } else {
      setStyle(props.themes.black);
    }
  }


  return (
    <div>
      <button style={style} onClick={change}>Press me</button>
    </div>
  );
}

export default HeaderButton;