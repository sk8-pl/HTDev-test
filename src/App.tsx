import React from "react";
import TabsRouter from "./components/navigation";
import RoterLink from "./routes";

const App = () => (
  <div style={{
    maxWidth: '800px',
    margin: '0 auto'
  }}>
    <TabsRouter />
    <RoterLink />
  </div>
);

export default App;
