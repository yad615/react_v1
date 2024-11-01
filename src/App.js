import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulos: [
        { codigo: 1, descripcion: 'Coca-Cola', precio: 2.50 },
        { codigo: 2, descripcion: 'Inka-Cola', precio: 2.20 },
        { codigo: 3, descripcion: 'Fanta', precio: 1.70 },
      ],
    };
    this.borrar = this.borrar.bind(this);
  }

  borrar(cod) {
    const temp = this.state.articulos.filter((el) => el.codigo !== cod);
    this.setState({
      articulos: temp,
    });
  }

  render() {
    return (
      <div className="container-fluid bg-dark min-vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow-lg rounded border-0" style={{ maxWidth: '800px', width: '100%' }}>
          <div className="card-header bg-primary text-white text-center py-4 rounded-top">
            <h2 className="mb-0">Listado de Gaseosas 🥤</h2>
          </div>
          <div className="card-body p-4 bg-light">
            <table className="table table-bordered table-hover text-center">
              <thead className="bg-secondary text-white">
                <tr>
                  <th scope="col">Código</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.articulos.map((elemento, index) => (
                  <tr
                    key={elemento.codigo}
                    className={index % 2 === 0 ? "table-light" : "table-secondary"}
                  >
                    <td className="align-middle">{elemento.codigo}</td>
                    <td className="align-middle">{elemento.descripcion}</td>
                    <td className="align-middle">${elemento.precio.toFixed(2)}</td>
                    <td className="align-middle">
                      <button
                        className="btn btn-danger btn-sm px-3 py-1 shadow"
                        onClick={() => this.borrar(elemento.codigo)}
                      >
                        <i className="bi bi-trash-fill"></i> Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {this.state.articulos.length === 0 && (
              <div className="alert alert-info text-center mt-4" role="alert">
                No hay artículos en la lista.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
