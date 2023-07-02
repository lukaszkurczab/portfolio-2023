import * as React from "react"
import VanillaTilt from 'vanilla-tilt';

interface ContactInterace{
  src: string;
  name: string
}

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = React.useRef(null);

  React.useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const TechTile = ({src, name}:ContactInterace) => {
  const options = {
    scale: 1.1,
    speed: 1000,
    max: 30
  };

  return (
        <Tilt className="tile" options={options}>
          <div className="tile-content">
            <div className="tile-imgWrapper"> 
            <img src={src} alt="" className="tile-img" />
              </div>
            <h3 className="tile-text">{name}</h3>
          </div>
        </Tilt>
  )
}

export default TechTile
