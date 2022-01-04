import React, { useState, useEffect } from "react";
import "./MoviesStyles.css";
import { Card, Button } from "react-bootstrap";
const Movies = () => {
  const [film, setFilm] = useState({
    title: null,
    episode: null,
    director: null,
    producer: null,
    release_date: null,
  });

  const fetchFilm = async () => {
    return await fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    async function fetchData() {
      setFilm(await fetchFilm());
    }
    fetchData();
    console.log(film);
  }, []);

  return (
    <div>
      <div className="movies-container">
        <Card>
          <Card.Header as="h5">Film Title</Card.Header>
          <Card.Body>
            <Card.Title>
              Episode : <Card.Text></Card.Text>
            </Card.Title>
            <Card.Title>
              Director :<Card.Text></Card.Text>
            </Card.Title>
            <Card.Title>
              Producer :<Card.Text></Card.Text>
            </Card.Title>
            <Card.Title>
              Release Date :<Card.Text></Card.Text>
            </Card.Title>

            <Button variant="primary">See Details</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Movies;
