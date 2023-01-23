import React from "react";
import { BsTwitter, BsGithub, BsMedium, BsDribbble } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsGithub />
    </div>
    <div>
      <BsMedium />
    </div>
    <div>
      <BsDribbble />
    </div>
    <div>
      <BsTwitter />
    </div>
  </div>
);

export default SocialMedia;
