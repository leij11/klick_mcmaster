import React from "react";
import { Media } from "react-bootstrap";
import Andy from "../Asset/Andy.jpg";
import Paul from "../Asset/brother.jpg";

const CommentPost = () => (
  <Media>
    <img
      width={64}
      height={64}
      className="mr-3"
      src={Andy}
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Andy </h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={Paul}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Paul</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </Media.Body>
  </Media>
);

export default CommentPost;
