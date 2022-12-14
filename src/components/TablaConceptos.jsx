import React, { useContext } from 'react';
import { CartContext } from '../context/context';
import Concepto from './Concepto';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

const TablaConceptos = () => {

  const {ingresoPrincipal, otrosIngresos, gastosFijos, gastosPersonales, ahorroInversion} = useContext(CartContext);
  const { tipoConcepto } = useParams();

  const compararConcepto = (tipoConcepto) => {
    if (tipoConcepto === 'ingresoPrincipal' && tipoConcepto && ingresoPrincipal) {
      return (
        [...ingresoPrincipal].map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'otrosIngresos' && tipoConcepto && otrosIngresos) {
      return (
        [...otrosIngresos].map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'gastosFijos' && tipoConcepto && gastosFijos) {
      return (
        [...gastosFijos].map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'gastosPersonales' && tipoConcepto && gastosPersonales) {
      return (
        [...gastosPersonales].map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'ahorroInversion' && tipoConcepto && ahorroInversion) {
      return (
        [...ahorroInversion].map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    }
  }

  return (
    <table className="tabla-container tabla-conceptos">
      <thead>
        <tr>
          <th style={{minWidth: '180px', width: '280px'}} >Concepto:</th>
          <th style={{minWidth: '180px', width: '280px'}} >Monto:</th>
          <th style={{minWidth: '180px', width: '280px'}} >Fecha:</th>
          <th style={{minWidth: '180px', width: '280px'}} >Categoría:</th>
          <th style={{minWidth: '180px', width: '280px'}} >Eliminar:</th>
        </tr>
      </thead>
      <tbody>
        {compararConcepto(tipoConcepto)}
      </tbody>
    </table>
  )
};

export default TablaConceptos;