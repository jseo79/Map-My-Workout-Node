import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map.tsx';
import './Global.css';

function App() {
	return (
		<div className="container">
			<Sidebar />
			<Map />
		</div>
	);
}

export default App;
