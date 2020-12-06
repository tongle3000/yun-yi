import './App.css';

import OutpatientService from './components/register/OutpatientService';
import { registerData } from './unitls/defaultData';


function App() {



	return (
		<div className="App"> 
			<h1 style={{background:'#82b337', color:'#000'}}>我爱我家</h1>
			<OutpatientService data={registerData[0]} />
		</div>
	);
}

export default App;
