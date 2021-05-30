import React from 'react';
import { Card } from "react-bootstrap";
import './Dinner.css';
import { Link } from 'react-router-dom';

const Dinner = (props) => {
  const {name,img,price,id} = props.foodD
    return (
        <div className="mt-5 dinner team ms-5 mb-4 col-md-3" data-aos="zoom-in">
        <Link style={{textDecoration:"none",color:"black"}} to={`/foodDetails/${id}`}>
        <Card
          style={{ width: "17rem", border: "none", background: "none" }}
        >
          <Card.Body
            className="dinnerBody"
            
          >
            <Card.Img
              style={{ width: "100%" }}
              variant="top"
              src={img}
            />
            <Card.Title className="mt-3 text-center">
              {name}
            </Card.Title>
            <div className="d-flex justify-content-center">
              <h4 style={{ color: "black" }}>$ {price}</h4>
            </div>
          </Card.Body>
        </Card>
        </Link>
      </div>
    );
};

export default Dinner;