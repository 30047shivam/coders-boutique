// pages/_error.tsx
import React from 'react';

const CustomErrorPage = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode}</h1>
      <p>An error occurred while processing your request.</p>
    </div>
  );
};

CustomErrorPage.getInitialProps = ({ err, res }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
