import React from 'react';
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <h1>User Profiles</h1>
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="A software engineer who loves coding and hiking." 
        avatar="https://via.placeholder.com/144" 
      />
      <UserProfile 
        name="Bob" 
        age={30} 
        bio="A product manager passionate about tech and design." 
        avatar="https://via.placeholder.com/144" 
      />
    </div>
  );
}

export default App;

