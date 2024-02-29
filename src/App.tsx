import React from 'react';

type BoxProps = {
  name: string;
  country: string;
  children: React.ReactNode; // 👈️ added type for children
};

const Box = (props: BoxProps) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.country}</h1>
      {props.children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Box name="James Doe" country="Germany">
        <h1>Hello</h1>
        <h1>World</h1>
      </Box>
    </div>
  );
};

export default App;
