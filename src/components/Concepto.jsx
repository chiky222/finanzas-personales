import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/context';

const Concepto = (concep) => {

  const { ingresoPrincipal, setIngresoPrincipal, otrosIngresos, setOtrosIngresos, gastosFijos, setGastosFijos, gastosPersonales, setGastosPersonales, ahorroInversion, setAhorroInversion } = useContext(CartContext);
  const { tipoConcepto } = useParams();  
    
  const eliminarConceptoIngPpal = (tipoConcepto) => {        
    if (tipoConcepto === 'ingresoPrincipal') {
        const filtrados = ingresoPrincipal.filter((conc) => conc.concepto !== concep.concepto);
        setIngresoPrincipal(filtrados);
    } else if (tipoConcepto === 'otrosIngresos') {
        const filtrados = otrosIngresos.filter((conc) => conc.concepto !== concep.concepto);
        setOtrosIngresos(filtrados);
    }  else if (tipoConcepto === 'gastosFijos') {
        const filtrados = gastosFijos.filter((conc) => conc.concepto !== concep.concepto);
        setGastosFijos(filtrados);
    }  else if (tipoConcepto === 'gastosPersonales') {
        const filtrados = gastosPersonales.filter((conc) => conc.concepto !== concep.concepto);
        setGastosPersonales(filtrados);
    }  else if (tipoConcepto === 'ahorroInversion') {
        const filtrados = ahorroInversion.filter((conc) => conc.concepto !== concep.concepto);
        setAhorroInversion(filtrados);
    }         
}; 

  return (
    <tr>
        <td>{concep.concepto}</td>
        <td>$ {concep.monto}</td>
        <td>{concep.fecha}</td>
        <td>{concep.categoria}</td>
        <td><p className='x-borrar-celda' onClick={() => eliminarConceptoIngPpal(tipoConcepto)} >X</p></td>
    </tr>
  )
};

export default Concepto;