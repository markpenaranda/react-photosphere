import React, { Component } from 'react'

import ReactPhotoSphereViewer from 'react-photosphere'

export default class App extends Component {
  render () {
    return (
      <div>
        <ReactPhotoSphereViewer src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNfXFNW1ti-GCNgWuc6rFhdtClHTpnxsx3pd9LYBMyUN_wJXt2"/>
      </div>
    )
  }
}
