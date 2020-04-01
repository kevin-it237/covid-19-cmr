import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

export const BigLoader = (props) => (
    <div className="d-flex flex-column align-items-center justify-content-center">
        <Loader
            type="TailSpin"
            color="#eb4559"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />
     </div>
)

export const ImageLoader = (props) => (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{'height': '4.5rem', 'width': '4.5rem', 'marginRight': '0.5rem'}}>
        <Loader
            type="Grid"
            color="#09827E"
            height={props.size ? props.size: 30}
            width={props.size ? props.size: 30}
            timeout={3000} //3 secs
        />
    </div>
)

const MyLoader = (props) => (
    <div className="spinner-border" role="status" style={{color: props.color}}>
        <span className="sr-only">Loading...</span>
    </div>
);

export default MyLoader;