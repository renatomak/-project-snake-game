import React, { useRef, useEffect } from 'react'

/** FONTE: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258 */
const Canvas = props => {
  const board = 32;
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#90ee90'
    context.fillRect(0, 0, 16 * board, 16 * board)
  }, [])
  
  return <canvas ref={canvasRef} {...props} width="512" height="512"/>
}

export default Canvas
