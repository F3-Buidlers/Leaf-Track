import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { useAuth } from '../../hooks/useAuth';
import "./LeafTrackForm.scss";

export function LeafTrackForm() {
  const auth = useAuth()
  return (
    <div className="form">
      <div className="form__container">
        <div className="form">
          <h1 className="form__title">Start monitoring</h1>
          <form className="form-form">
            <div className="form-form__container">
              <div className="form-form-box">
                <div className="form-form-box__container">
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="form-form-box__exclamation"
                  />
                  <div className="form-form-box__head">
                    <p>Public Address</p>
                    <p style={{ color: "#69a6ce" }}>
                      {auth.user.walletAddress}
                    </p>
                  </div>
                </div>
                <p>
                  To improve your privacy, we recommend using an address which
                  is already public or a new one-seeded through tornado.cash.
                </p>
              </div>
              <div className="form-form-box" style={{ marginBottom: "2rem" }}>
                <div className="form-form-box__container">
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="form-form-box__exclamation"
                  />
                  <div className="form-form-box__head">
                    <p>Advice</p>
                  </div>
                </div>
                <p>
                  Submissions are final and cannot be edited. Be sure to follow
                  all submission rules to not lose your deposit.
                </p>
              </div>

              <div >

                <span >
                  <input placeholder="Name" />
                </span>
                <span>
                  <input placeholder="Last Name" />
                </span>
                <span>
                  <input placeholder="Project Name" />
                </span>
                <span>
                  <textarea placeholder="Description of the project" />
                </span>
              </div>
              <div className="form-form-box">
                <div className="form-form-box__container">
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    className="form-form-box__exclamation"
                  />
                  <div className="form-form-box__head">
                    <p>Pro Tip</p>
                  </div>
                </div>
                <p>
                  People can try to notify you of problems in your submission
                  and save your deposit via your ethmail.cc. Make sure to check
                  it while submission is being processed.
                </p>
              </div>
              <span>
                <p>Share project logo</p>
                <div className="form-form-box-logo">
                  <div className="form-form-box-logo__container">
                    <div className="form-form-box-logo__head">
                      <p>{"(Max Size: 2 MB | *.jpg, *.jpeg, *.png)"}</p>
                    </div>
                  </div>
                  <p style={{ marginBottom: '1rem' }}>
                    People can try to notify you of problems in your submission
                    and save your deposit via your ethmail.cc. Make sure to
                    check it while submission is being processed.
                  </p>
                  <div className="form-form-box__upload">
                    <label htmlFor="inputTag" >
                    <input id='inputTag' type="file" />
                    </label>
                    
                  </div>
                </div>
              </span>

              <div className="form-form__create">
                <button>Submit</button>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
