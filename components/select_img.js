import React from 'react';

export default class select_img extends Component {
  render () {
    return
    <div>
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select> <br />

      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" /> <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /> <br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span> <br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>
    </div>;
  }
}
