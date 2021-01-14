import * as React from 'react'
import '../box-styles.css'


function Box({style, size, className = '', ...otherProps}) {
  const sizeClass = `${size} ? box--${size} : ''`;
  return (
    <div
      className={`box ${className} ${sizeClass}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box className="box box--small" style={{background: 'lightblue'}}>small lightblue box</Box>
      <Box className="box box--medium" style={{background: 'pink'}}>small lightblue box</Box>
      <Box className="box box--large" style={{background: 'orange'}}>small lightblue box</Box>
    </div>
  )
}


export default App
