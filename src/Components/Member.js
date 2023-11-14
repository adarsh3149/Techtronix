import React from 'react'
import { Box } from '@mui/material'
import Card_comp from './Card_comp'
import Membercard from './MemberCard'

function Member() {
  return (
    <>
    <div className='heading'>members.</div>
      
      <Box sx={{ display: "flex", justifyContent: "flex-start", rowGap: "4rem", columnGap: "4rem", padding: "0 4rem 4rem 4rem", flexWrap: "wrap", alignContent: "flex-start" }}>
        <Membercard></Membercard>
        <Membercard></Membercard>
        <Membercard></Membercard>
        <Membercard></Membercard>
        <Membercard></Membercard>
      </Box>
      </>
  )
}

export default Member