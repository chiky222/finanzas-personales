import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/context';

const TablaResumen = () => {

  const { montoPresupuestado, montoIngPpal, porcIngPpal, montoOtrosIng, porcOtrosIng, montoIngTotal, porcIngTotal, montoGtoFijo, porcGtoFijo, montoGtoPers, porcGtoPers, montoGtoTotal, porcGtoTotal, montoAhorroInv, porcAhorroInv } = useContext(CartContext);

  return (
    <>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Monto</th>
          <th>%</th>
          <th className='celda-oculta'></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowSpan={3}>INGRESOS</th>
          <th>Ingreso Principal:</th>
          <td>$ {montoIngPpal.toLocaleString('es-AR')}</td>
          <td>{porcIngPpal} %</td>
        </tr>
        <tr>
          <th>Otros Ingresos:</th>
          <td>$ {montoOtrosIng.toLocaleString('es-AR')}</td>
          <td>{porcOtrosIng} %</td>
        </tr>
        <tr>
          <th>Ingresos Totales:</th>
          <td>$ {montoIngTotal.toLocaleString('es-AR')}</td>
          <td>{porcIngTotal} %</td>
          <th colSpan={2}>Presupuestado</th>
        </tr>
        <tr>
          <th rowSpan={3}>GASTOS</th>
          <th>Gastos Fijos:</th>
          <td>$ {montoGtoFijo.toLocaleString('es-AR')}</td>
          <td>{porcGtoFijo} %</td>
          <td>$ {montoPresupuestado(50).toLocaleString('es-AR')}</td>
          <td>50 %</td>
        </tr>
        <tr>
          <th>Gastos Personales:</th>
          <td>$ {montoGtoPers.toLocaleString('es-AR')}</td>
          <td>{porcGtoPers} %</td>
          <td>$ {montoPresupuestado(30).toLocaleString('es-AR')}</td>
          <td>30 %</td>
        </tr>
        <tr>
          <th>Gastos Totales:</th>
          <td>$ {montoGtoTotal.toLocaleString('es-AR')}</td>
          <td>{porcGtoTotal} %</td>
          <td>$ {montoPresupuestado(80).toLocaleString('es-AR')}</td>
          <td>80 %</td>
        </tr>
        <tr>
          <th colSpan={2}>Ahorro / Inversión / Capacitación</th>
          <td>$ {montoAhorroInv.toLocaleString('es-AR')}</td>
          <td>{porcAhorroInv} %</td>
          <td>$ {montoPresupuestado(20).toLocaleString('es-AR')}</td>
          <td>20 %</td>
        </tr>
      </tbody>
    </>
  )
};

export default TablaResumen;