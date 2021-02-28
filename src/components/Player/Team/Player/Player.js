import React from 'react';
import { Button, Card } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
	const { name, image, salary } = props.player;
	const handleAddPlayer = props.handleAddPlayer;
	return (
		<div style={{ marginTop: '30px' }}>
			<Card style={{ width: '18rem', textAlign: 'center' }}>
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>Name: {name}</Card.Title>
					<Card.Text>
						<h5>Salary: ϵ {salary} million</h5>
					</Card.Text>
					<Button variant="primary" onClick={() => handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Player;

