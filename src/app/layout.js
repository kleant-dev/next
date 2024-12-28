import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer>{new Date().toISOString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
