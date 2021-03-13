import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

function Blogs() {
 
    let [handleModel, setModel] = useState({
        dimmer: undefined,
        open:false
    })

  return (
    <div>
      <Button
        onClick={() => setModel({dimmer:'blurring', open:true})}
      >
        Blogs
      </Button>

      <Modal
        dimmer={handleModel.dimmer}
        open={handleModel.open}
        onClose={() => setModel({dimmer:undefined, open:false})}
      >
        <Modal.Header>Use Google's location service?</Modal.Header>
        <Modal.Content>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setModel({dimmer:undefined, open:false})}>
            Disagree
          </Button>
          <Button positive onClick={() => setModel({dimmer:undefined, open:false})}>
            Agree
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default Blogs