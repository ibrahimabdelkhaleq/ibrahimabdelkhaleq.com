import React from 'react';
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  XIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import styles from './SocialShare.module.css';

const SocialShare = ({ title, url }) => {
  const baseURL = "https://egrosdou01.github.io";
  const fullURL = `${baseURL}${url}`;

  return (
    <div className="social-share">
      <p className={styles.shareText}>SHARE</p>
      <LinkedinShareButton 
        url={fullURL}
        title={title}
        summary={title}
        source={fullURL}
        className={styles.shareButton}
      >
        <LinkedinIcon size={25} round />
      </LinkedinShareButton>
      <TwitterShareButton url={fullURL} title={title} className={styles.shareButton}>
        <XIcon size={25} round />
      </TwitterShareButton>
      <RedditShareButton url={fullURL} title={title} className={styles.shareButton}>
        <RedditIcon size={25} round />
      </RedditShareButton>
      <EmailShareButton url={fullURL} subject={title} body={`Check out this post: ${fullURL}`} className={styles.shareButton}>
        <EmailIcon size={25} round />
      </EmailShareButton>
    </div>
  );
};

export default SocialShare;