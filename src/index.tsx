/**
 * @class ReactPhotoSphereViewer
 */

import * as React from 'react';
import PhotoSphereViewer from 'photo-sphere-viewer';
import "./styles.css";
import "./photo-sphere-viewer.min.css"

export interface Props {
  src: string;
  navbar?: string[];
}

const defaultNavbar = [
  'autorotate',
  'zoom',
  'fullscreen'
];

export default function ReactPhotoSphereViewer ({ src, navbar }: Props): React.ReactElement {
  navbar = (navbar && navbar.length > 0) ? navbar : defaultNavbar;
  const sphereElementRef = React.createRef<HTMLDivElement>();
  React.useEffect(() => {

      const shperePlayerInstance = PhotoSphereViewer({
        container: sphereElementRef.current,
        panorama: src,
        size: {
          height: 500
        },
        navbar: navbar
      });


    return () => {
      shperePlayerInstance.destroy();
    };
  }, [src]);
  return (
    <div className="view-container" ref={sphereElementRef} />
  );
}
