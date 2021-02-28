import React from 'react';

const Team = (props) => {
	const team = props.team;
	const totalSalary = team.reduce((sum, team) => sum + team.salary, 0);
	return (
		<div>
			<div style={{background:'grey',padding:'20px',color:'#fff',borderRadius:'8px',marginBottom:'15px'}}>
				<h2>Total Players: {team.length}</h2>
				<h3>Total Budget: ϵ {totalSalary} million</h3>
			</div>
			<ul style={{listStyleType:'decimal', fontSize:'20px'}}>
				{
					team.map(data => <li style={{background:'yellow',margin:'10px 0'}}><h5>{data.name} , Salary: ϵ {data.salary} million</h5></li>)
				}
			</ul>
		</div>
	);
};

export default Team;
