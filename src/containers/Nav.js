import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'

function Nav() {
 
    let [handleModel, setModel] = useState({
        dimmer: undefined,
        open:false
    })
  
    console.log(handleModel)
  return (
    <div>
      <Button
        onClick={() => setModel({dimmer:'blurring', open:true})}
      >
        Blurring
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

export default Nav

// import React from 'react'
// import { Button, Modal } from 'semantic-ui-react'

// function exampleReducer(state, action) {
//   switch (action.type) {
//     case 'OPEN_MODAL':
//       return { open: true, dimmer: action.dimmer }
//     case 'CLOSE_MODAL':
//       return { open: false }
//     default:
//       throw new Error()
//   }
// }

// function Nav() {
//   const [state, dispatch] = React.useReducer(exampleReducer, {
//     open: false,
//     dimmer: undefined,
//   })
//   const { open, dimmer } = state

//   return (
//     <div>
//       <Button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Default</Button>
//       <Button
//         onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'inverted' })}
//       >
//         Inverted
//       </Button>
//       <Button
//         onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
//       >
//         Blurring
//       </Button>

//       <Modal
//         dimmer={dimmer}
//         open={open}
//         onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
//       >
//         <Modal.Header>Use Google's location service?</Modal.Header>
//         <Modal.Content>
//           Let Google help apps determine location. This means sending anonymous
//           location data to Google, even when no apps are running.
//         </Modal.Content>
//         <Modal.Actions>
//           <Button negative onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
//             Disagree
//           </Button>
//           <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
//             Agree
//           </Button>
//         </Modal.Actions>
//       </Modal>
//     </div>
//   )
// }

// export default Nav