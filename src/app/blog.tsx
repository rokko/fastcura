import React from "react";

const Blog = () => {
  const onIframeLoad = () => {
    const iframe = document.getElementById("target") as HTMLIFrameElement;
    iframe.style.height =
      iframe.contentWindow!.document.body.offsetHeight + "px";
  };
  return (
    <div>
      <iframe
        title="Wordpress Iframe"
        src={"https//www.fastcura-blog.it/"}
        id="target"
        style={{ width: "100%" }}
        onLoad={() => onIframeLoad()}
      />
    </div>
  );
};

export default Blog;
