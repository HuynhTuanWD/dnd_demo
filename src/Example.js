import React,{useState,useEffect} from 'react'
import Board from './Board'
export default function Container() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Board />
      </div>
      {/* <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="Glass" />
        <Box name="Banana" />
        <Box name="Paper" />
      </div> */}
    </div>
  )
}
