/**
 * @class ReactPhotoSphereViewer
 */

import * as React from 'react';
import PhotoSphereViewer from 'photo-sphere-viewer';
import "./styles.css";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css"

export interface Props {
  src: string;
  navbar?: string[];
  height: number;
  width?: number;
  timeAnim: number | boolean;
  onPositionChange?(lat: number , lng: number): any;
}

const defaultNavbar = [
  'autorotate',
  'zoom',
  'fullscreen'
];

export default function ReactPhotoSphereViewer ({ src, navbar, height, width, timeAnim, onPositionChange }: Props): React.ReactElement {
  navbar = (navbar && navbar.length > 0) ? navbar : defaultNavbar;
  const sphereElementRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {

      const spherePlayerInstance = PhotoSphereViewer({
        container: sphereElementRef.current,
        panorama: src,
        size: {
          height,
          width
        },
        navbar: navbar,
        time_anim: timeAnim,
      });

      spherePlayerInstance.on('position-updated', () => {

        if(onPositionChange) {
          const position = spherePlayerInstance.getPosition();
          onPositionChange(position.lat, position.lng)
        }

      });

    return () => {
      spherePlayerInstance.destroy();
    };
  }, [src]);
  return (
    <div className="view-container" ref={sphereElementRef} />
  );
}
