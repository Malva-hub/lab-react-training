import React from 'react';

function IdCard(props) {
  return (
    <div>
      <div id="container">
        <div>
          <img src={props.picture} alt="profile"/>
        </div>
        <div>
          <p>
            <b>First name:</b> {props.firstName}
          </p>
          <p>
            <b>Last name:</b> {props.lastName}{' '}
          </p>
          <p>
            <b> Gender:</b> {props.gender}
          </p>
          <p>
            <b>Height:</b>
            {props.height / 100}
          </p>
          <p>
            <b>Birth:</b>
            {props.birth.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
