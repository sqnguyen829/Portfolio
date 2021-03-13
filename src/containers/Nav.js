import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Projects from './Projects'
import Blogs from './Blogs'
import About from '../components/About'
import Contact from '../components/Contact'
import { Grid } from 'semantic-ui-react'

function Nav() {
  return (
    <Grid>
      <Projects/>
      <Blogs/>
      <About/>
      <Contact/>
    </Grid>
    
  )
}

export default Nav