import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App () {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = async (x) => {
    setLinea1(x.target.value)
  }

  const onChangeLinea2 = async (x) => {
    setLinea2(x.target.value)
  }

  const onChangeImagen = async (x) => {
    setImagen(x.target.value)
  }

  const exportar = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click()
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br />

      <input onChange={onChangeLinea1} type="text" placeholder='(...)' />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder='(...)' />
      <br />
      <button onClick={exportar}>Exportar</button>
      <br />

      <div className='meme' id='meme'>
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img src={`/img/${imagen}.jpg`} />
      </div>

    </div>
  );
}

export default App;
