import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/context';
import { useRef } from 'react';
import exportAsImage from '../utils/exportAsImage.js';

const TablaResumen = () => {

  const { montoPresupuestado, montoIngPpal, porcIngPpal, montoOtrosIng, porcOtrosIng, montoIngTotal, porcIngTotal, montoGtoFijo, porcGtoFijo, montoGtoPers, porcGtoPers, montoGtoTotal, porcGtoTotal, montoAhorroInv, porcAhorroInv } = useContext(CartContext);

  const {tableToExcel} = useContext(CartContext);
  const exportRef = useRef();

  return (
    <>
      <table className="tabla-container tabla-resumen" id='tabla-resumen' ref={exportRef}>
        <thead>
          <tr>
            <th style={{minWidth: '180px', width: '280px'}} >Tipo</th>
            <th style={{minWidth: '180px', width: '280px'}} >Concepto</th>
            <th style={{minWidth: '180px', width: '280px'}} >Monto</th>
            <th style={{minWidth: '180px', width: '280px'}} >%</th>
            <th style={{minWidth: '180px', width: '280px'}} >$ Presupuestado</th>
            <th style={{minWidth: '180px', width: '280px'}} >% Presupuestado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan={3} style={{minWidth: '180px', width: '280px'}} >INGRESOS</th>
            <th style={{minWidth: '180px', width: '280px'}} >Ingreso Principal:</th>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoIngPpal.toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >{porcIngPpal} %</td>
            <td style={{minWidth: '180px', width: '280px'}} ></td>
            <td style={{minWidth: '180px', width: '280px'}} ></td>
          </tr>
          <tr>
            <th style={{minWidth: '180px', width: '280px'}} >Otros Ingresos:</th>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoOtrosIng.toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >{porcOtrosIng} %</td>
            <td style={{minWidth: '180px', width: '280px'}} ></td>
            <td style={{minWidth: '180px', width: '280px'}} ></td>
          </tr>
          <tr>
            <th style={{minWidth: '180px', width: '280px'}} >Ingresos Totales:</th>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoIngTotal.toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >{porcIngTotal} %</td>
            <td style={{minWidth: '180px', width: '280px'}} ></td>
            <td style={{minWidth: '180px', width: '280px'}} ></td>
          </tr>
          <tr>
            <th rowSpan={3} style={{minWidth: '180px', width: '280px'}} >GASTOS</th>
            <th style={{minWidth: '180px', width: '280px'}} >Gastos Fijos:</th>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoGtoFijo.toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >{porcGtoFijo} %</td>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoPresupuestado(50).toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >50 %</td>
          </tr>
          <tr>
            <th style={{minWidth: '180px', width: '280px'}} >Gastos Personales:</th>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoGtoPers.toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >{porcGtoPers} %</td>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoPresupuestado(30).toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >30 %</td>
          </tr>
          <tr>
            <th style={{minWidth: '180px', width: '280px'}} >Gastos Totales:</th>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoGtoTotal.toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >{porcGtoTotal} %</td>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoPresupuestado(80).toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >80 %</td>
          </tr>
          <tr>
            <th colSpan={2} style={{minWidth: '180px', width: '280px'}} >Ahorro / Inversión / Capacitación</th>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoAhorroInv.toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >{porcAhorroInv} %</td>
            <td style={{minWidth: '180px', width: '280px'}} >$ {montoPresupuestado(20).toLocaleString('es-AR')}</td>
            <td style={{minWidth: '180px', width: '280px'}} >20 %</td>
          </tr>
        </tbody>
      </table>
      <button type="button" style={{display: 'block', position: 'fixed', top: '87%'}} className="formulario__btn descarga" onClick={() => tableToExcel('tabla-resumen', 'Presupuesto del Mes')}>Excel</button>
      <button type="button" style={{display: 'block', position: 'fixed', top: '79%'}} className="formulario__btn descarga" onClick={() => exportAsImage(exportRef.current, "test")}>Imágen</button>
    </>
  )
};

export default TablaResumen;