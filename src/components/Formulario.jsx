import React, { useContext, useState } from 'react';
import { CartContext } from '../context/context';

const Formulario = () => {

  const [data, setData] = useState({ tipo: 'none', concepto: 'none', monto: 1000, fecha: '2022-12-01', categoria: 'none'});
  const {ingresoPrincipal, setIngresoPrincipal, otrosIngresos, setOtrosIngresos, gastosFijos, setGastosFijos, gastosPersonales, setGastosPersonales, ahorroInversion, setAhorroInversion, resetAll} = useContext(CartContext);

  const enviarConcepto = (e) => {
    e.preventDefault();
    if (data.tipo === 'Ingreso Principal' && revisarConcepto(ingresoPrincipal)) {
        if (ingresoPrincipal[0]?.tipo === 'none' || !ingresoPrincipal) {            
            setIngresoPrincipal([data]);
        } else {
            setIngresoPrincipal([...ingresoPrincipal, data]);
        }            
    } else if (data.tipo === 'Otros Ingresos' && revisarConcepto(otrosIngresos)) {
        if (otrosIngresos[0]?.tipo === 'none' || !otrosIngresos) {            
            setOtrosIngresos([data]);
        } else {
            setOtrosIngresos([...otrosIngresos, data]);
        } 
    } else if (data.tipo === 'Gastos Fijos' && revisarConcepto(gastosFijos)) {
        if (gastosFijos[0]?.tipo === 'none' || !gastosFijos) {            
            setGastosFijos([data]);
        } else {
            setGastosFijos([...gastosFijos, data]);
        } 
    } else if (data.tipo === 'Gastos Personales' && revisarConcepto(gastosPersonales)) {
        if (gastosPersonales[0]?.tipo === 'none' || !gastosPersonales) {            
            setGastosPersonales([data]);
        } else {
            setGastosPersonales([...gastosPersonales, data]);
        } 
    } else if (data.tipo === 'Ahorro e Inversión' && revisarConcepto(ahorroInversion)) {
        if (ahorroInversion[0]?.tipo === 'none' || !ahorroInversion) {            
            setAhorroInversion([data]);
        } else {
            setAhorroInversion([...ahorroInversion, data]);
        } 
    }
  }

  const revisarConcepto = (category) => {
    for (let i=0; i < category.length; i++) {
        if (category[i].concepto === data.concepto) {
            alert('No se puede ingresar dos conceptos con el mismo nombre.')
            return false
        }
    }
    return true;
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({ ...data, [name]: value });
  }

  return (
    <div className='contenedor-formulario'>
        <h1 className='titulo-formulario'>Cargar Gasto / Ingreso</h1>
        <hr></hr>       
        <form action='' className='formulario' onSubmit={enviarConcepto} >
                <div className="formulario__grupo">
                    <label htmlFor="tipo" className="formulario__label">Tipo:</label>
                    <div className="formulario__grupo-input">
                        <select name='tipo' className='formulario__selector' id='tipo' value={data.tipo} onChange={handleChange} >
                            <option>----------------------</option>
                            <option>Ingreso Principal</option>
                            <option>Otros Ingresos</option>
                            <option>Gastos Fijos</option>
                            <option>Gastos Personales</option>
                            <option>Ahorro e Inversión</option>
                        </select>
                    </div>
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="concepto" className="formulario__label">Concepto:</label>
                    <input type='text' name='concepto' className='formulario__concepto' placeholder="Luz - Edelap" id='concepto' value={data.concepto} onChange={handleChange} />
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="monto" className="formulario__label">Monto:</label>
                    <input type='number' name='monto' className='formulario__monto' placeholder="5520" id='monto' value={data.monto} onChange={handleChange} />
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="fecha" className="formulario__label">Fecha:</label>
                    <input type='date' name='fecha' className='formulario__fecha' placeholder="10/11/2022" id='fecha' value={data.fecha} onChange={handleChange} />
                </div>
                <div className="formulario__grupo">
                    <label htmlFor="categoria" className="formulario__label">Categoría:</label>
                    <input type='text' name='categoria' className='formulario__categoria' placeholder="Servicios" id='categoria' value={data.categoria} onChange={handleChange} />
                </div>
                <button type="submit" className="formulario__btn">CARGAR</button>
                <button type="button" className="formulario__btn" onClick={resetAll}>REINICIAR</button>
        </form>        
        <hr></hr> 
    </div>
  )
};

export default Formulario;