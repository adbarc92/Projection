import React from 'react';
import PrototypeCreator from './components/PrototypeCreator';
import Backlog from './components/Backlog';
import CurrentProjects from './components/CurrentProjects';
import ProjectCreator from './components/ProjectCreator';
import Project from './components/Project';

const App = () => (
	<div className="table">
		<div className="column 1">
			<PrototypeCreator />
			<ProjectCreator />
		</div>
		<div className="column 2">
			<CurrentProjects />
		</div>
		<div className="column 3">
			<Backlog />
		</div>
	</div>
);

export default App;
