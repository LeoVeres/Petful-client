import React from 'react';

export default function Pet(props) {
  if (props.petToAdopt) {
    return (
      <section>
        <header>
          <h2>{props.petToAdopt.name}</h2>
          <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription} />
        </header>
        <main>
          <div>
            <h3>Sex</h3>
            <p>{props.petToAdopt.sex}</p>
            <h3>Age</h3>
            <p>{props.petToAdopt.age}</p>
            <h3>Breed</h3>
            <p>{props.petToAdopt.breed}</p>
            <h3>Story</h3>
            <p>{props.petToAdopt.story}</p>
          </div>
          <button onClick={props.onAdoptPet}>Adopt</button>
        </main>
      </section>
    );
  } else {
    return (
      <p>Loading...</p>
    );
  }
}