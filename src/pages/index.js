import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faLinkedin, faGithub, faGitlab, faMediumM, faKeybase, faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../styles/main.scss';

config.autoAddCss = false;

export default function Home() {
  return (
    <div class="meesh-app">
      <div class="meesh-home">
        <h1>hi <div class="meesh-home__hello">
            <a href="mailto:ngynmt@gmail.com?subject=Hello! 👋"><span role="img" aria-label="emoji hand wave">👋</span></a>
          </div> i'm michelle.</h1>
          <div class="meesh-home__social">
            <div class="meesh-home__social-row">
              <a href='https://gitlab.com/ngynmt' class="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faGitlab} size="lg" aria-hidden="true"/></span>
              </a>
              <a href='https://github.com/ngynmt' class="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faGithub} size="lg" aria-hidden="true"/></span>
              </a>
              <a href='https://linkedin.com/in/nguyenchelle' class="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faLinkedin} size="lg" aria-hidden="true"/></span>
              </a>
            </div>
            <div class="meesh-home__social-row">
              <a href='https://twitter.com/ngynmt' class="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faTwitter} size="lg" aria-hidden="true"/></span>
              </a>
              <a href='https://medium.com/@ngynmt' class="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faMediumM} size="lg" aria-hidden="true"/></span>
              </a>
              <a href='https://keybase.io/ngynmt/chat' class="meesh-home__social-icon">
                <span><FontAwesomeIcon icon={faKeybase} size="lg" aria-hidden="true"/></span>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}
