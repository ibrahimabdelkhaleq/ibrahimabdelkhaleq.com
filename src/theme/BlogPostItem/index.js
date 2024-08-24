import React from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import SocialShare from '@site/src/components/SocialMedia/SocialShare';
// apply a bottom margin in list view
function useContainerClassName() {
  const {isBlogPostPage} = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}
export default function BlogPostItem({children, className}) {
  const containerClassName = useContainerClassName();
  const { metadata } = useBlogPost(); // Get metadata for the current blog post
  const postUrl = `${metadata.permalink}`; // Construct the URL for the current blog post
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <div className="blog-post-spacing" />
      <div className="social-share-container">
        <SocialShare title={metadata.title} url={postUrl} />
      </div>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
