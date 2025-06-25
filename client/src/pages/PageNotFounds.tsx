import React from "react"

export const PageNotFound: React.FC = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or return to the home page.</p>
      <a href="/">Go to Home</a>
      <p>Or you can go to the <a href="/about">About Page</a> or <a href="/contact">Contact Page</a>.</p>
    </div>
  )
};
