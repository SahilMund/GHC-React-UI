import React from "react";

import { Blogs, Consult, Track, Wallet } from "../static";
import "../styles//Body.css";

function Body() {
  return (
    <div className="main-body">
      <div>
        <span className="heading">
          {" "}
          Welcome, <b>June!</b>
        </span>
      </div>
      <div className="bodyTopic">
        <div className="topic bgcolor1">
          <div>
            <img alt="" src={Track} />
            <span className="topicName">TRACK</span>
          </div>
        </div>
        <div className="topic bgcolor2">
          <div>
            <img alt="" src={Wallet} />
            <span className="topicName">WALLET</span>
          </div>
        </div>
        <div className="topic bgcolor3">
          <div>
            <img alt="" src={Blogs} />
            <span className="topicName">BLOGS</span>
          </div>
        </div>
        <div className="topic bgcolor4">
          <div>
            <img alt="" src={Consult} />
            <span className="topicName">CONSULT</span>
          </div>
        </div>
      </div>
   
   
    </div>
  );
}

export default Body;
