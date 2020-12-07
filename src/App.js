import './App.css';

import OutpatientService from './components/register/OutpatientService';
import { registerData } from './unitls/defaultData';


function App() {



	return (
		<div className="App"> 
			
			<OutpatientService data={registerData[0]} />
		</div>
	);
}

export default App;
