import React from "react";
<<<<<<< HEAD

=======
>>>>>>> d911a5f643220c3cf45f28ccd1fe531c482166ee
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserPlus,
  faGifts
} from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
=======

>>>>>>> d911a5f643220c3cf45f28ccd1fe531c482166ee

const UserCard = props => {
  return (
    <div className="card sub-card">
      <div className="card-body">
        <h5 className="card-title">{props.user.email}</h5>
      </div>
<<<<<<< HEAD

=======
>>>>>>> d911a5f643220c3cf45f28ccd1fe531c482166ee
      {props.remove && (
        <div className="font-awesome delete-button">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={() => props.removeFriend(props.user._id)}
          />
        </div>
      )}
      {props.add && (
        <div className="font-awesome fa-friend-add-div">
          <FontAwesomeIcon
            icon={faUserPlus}
            onClick={() => props.addFriend()}
          />
        </div>
      )}
      {props.giftee && (
        <Link
          to={{ pathname: `/give`, state: { friendId: props.user._id } }}
          className="fa-gift-link"
        >
          <div className="font-awesome fa-friend-add-div">
            <FontAwesomeIcon icon={faGifts} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default UserCard;
