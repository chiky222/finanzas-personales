import React, { useContext } from 'react';
import { CartContext } from '../context/context';
import Concepto from './Concepto';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

const TablaConceptos = () => {

  const {ingresoPrincipal, otrosIngresos, gastosFijos, gastosPersonales, ahorroInversion} = useContext(CartContext);
  const { tipoConcepto } = useParams();

  const compararConcepto = (tipoConcepto) => {
    if (tipoConcepto === 'ingresoPrincipal') {
      return (
        ingresoPrincipal.map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'otrosIngresos') {
      return (
        otrosIngresos.map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'gastosFijos') {
      return (
        gastosFijos.map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'gastosPersonales') {
      return (
        gastosPersonales.map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    } else if (tipoConcepto === 'ahorroInversion') {
      return (
        ahorroInversion.map((concep) => {
          const idConcep = uuidv4();
          return <Concepto tipo={concep.tipo} concepto={concep.concepto} monto={concep.monto} fecha={concep.fecha} categoria={concep.categoria} id={idConcep} key={idConcep} />
        })
      )
    }
  }

  return (
    <>
      <thead>
        <tr>
          <th>Concepto:</th>
          <th>Monto:</th>
          <th>Fecha:</th>
          <th>Categoría:</th>
          <th>Eliminar:</th>
        </tr>
      </thead>
      <tbody>
        {compararConcepto(tipoConcepto)}
      </tbody>
    </>
  )
};

export default TablaConceptos;