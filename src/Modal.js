import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'

export class Modal extends Component {

 render () {
   return (
     <div>
       <ModalVideo
        channel='youtube'
        isOpen={this.props.isOpen}
        videoId={this.props.videoId}
        onClose={this.props.onClose}
      />
     </div>
   );
 }
}
