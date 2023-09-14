import React, { useContext } from "react";
import "./body.css";
import { Button } from "react-bootstrap";
import { MovieContext } from "../context";

import Card from "../Card/card";

const Body = () => {
  const [user, setUser] = useContext(MovieContext);

  const onDelete = (id) => {
    setUser(user.filter((value) => value.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        {user.map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <div className="row">
                <div className="col-4">
                  <Card movies={item} />
                  <Button onClick={() => onDelete(item.id)}>Delete</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
