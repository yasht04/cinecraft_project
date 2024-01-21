import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Course(props) {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate(props.cinePath);
      };
    return (
        <div>
            <div className="card my-5 mx-5 col-6" style={{ width: 18 + "rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.summary}</p>
                    <button className="button4" onClick={navigateTo}>Go Ahead</button>
                </div>
            </div>
        </div>
    )
}
