import './App.css';


const Task = (value) => {
  const tasks = ['acordar', 'fazer exercicios', 'trabalhar', 'estudar', 'assistir algo', 'dormir', 'repete'];
  const list = tasks.map((task)=> <li>{task}</li>);
  return (
    <li>{list}</li>
  );
}
function App() {
  return (
    <div>
        <Task />       
    </div>
  );
}

export default App;