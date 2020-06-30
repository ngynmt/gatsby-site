import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGitlab, faMediumM, faKeybase, faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../styles/main.scss';

export default function Home() {
  return (
    <div class="meesh-app">
      <div class="meesh-home">
        <h1>hi <span role="img" aria-label="emoji hand wave">👋</span> i'm michelle</h1>
          <div class="meesh-home__social">
            <div>
              <a href='https://linkedin.com/in/nguyenchelle' className="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faLinkedin} aria-hidden="true"/></span>
              </a>
              <a href='https://gitlab.com/ngynmt' className="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faGitlab} aria-hidden="true"/></span>
              </a>
              <a href='https://github.com/ngynmt' className="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faGithub} aria-hidden="true"/></span>
              </a>
            </div>
            <div>
              <a href='https://twitter.com/ngynmt' className="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faTwitter} aria-hidden="true"/></span>
              </a>
              <a href='https://medium.com/@ngynmt' className="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faMediumM} aria-hidden="true"/></span>
              </a>
              <a href='https://keybase.io/ngynmt/chat' className="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faKeybase} aria-hidden="true"/></span>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

// <a href='http://gitlab.com/ngynmt'><i className="fa fa-lg fa-gitlab meesh-home__social-icon" aria-hidden="true"></i></a>
// <a href='http://github.com/ngynmt'><i className="fa fa-lg fa-github meesh-home__social-icon" aria-hidden="true"></i></a>
// <a href='http://twitter.com/ngynmt'><i className="fa fa-lg fa-twitter meesh-home__social-icon" aria-hidden="true"></i></a>
// <a href='https://medium.com/@ngynmt'><i className="fa fa-lg fa-medium-m meesh-home__social-icon" aria-hidden="true"></i></a>
// <a href='https://keybase.io/ngynmt/chat'><i className="fa fa-lg fa-keybase meesh-home__social-icon" aria-hidden="true"></i></a>