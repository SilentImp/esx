import React from 'react';

const Component = ({value}) => (
  <div>
    <p> some content </p>
    <p> some {value} </p>
  </div>
)

const Index = () => (
    <main>
      <Component value="text"/>
    </main>
  )
  
export default Index
