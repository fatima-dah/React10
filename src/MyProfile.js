import React from 'react';

const profil = [
  { name: 'Fatima Dahnini', school:'Wild Code School'}
];

function MyProfile(props) {

  const filteredPosts = profil.filter(
    post => post.name && post.school
  );
  return (
    <div>
      {
        filteredPosts.map(post => (
          <h3>MyProfil : {post.name} / {post.school} </h3>
        ))
      }
    </div>
  );
}

export default MyProfile;
