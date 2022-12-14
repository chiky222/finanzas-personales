import React from 'react';
import { useEffect } from 'react';
import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    let [ingresoPrincipal, setIngresoPrincipal] = useState([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
    let [otrosIngresos, setOtrosIngresos] = useState([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
    let [gastosFijos, setGastosFijos] = useState([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
    let [gastosPersonales, setGastosPersonales] = useState([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
    let [ahorroInversion, setAhorroInversion] = useState([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);

    const[montoIngPpal, setMontoIngPpal] = useState(0);
    const[porcIngPpal, setPorcIngPpal] = useState(0);
    const[montoOtrosIng, setMontoOtrosIng] = useState(0);
    const[porcOtrosIng, setPorcOtrosIng] = useState(0);
    const[montoIngTotal, setMontoIngTotal] = useState(0);
    const[porcIngTotal, setPorcIngTotal] = useState(0);
    const[montoGtoFijo, setMontoGtoFijo] = useState(0);
    const[porcGtoFijo, setPorcGtoFijo] = useState(0);
    const[montoGtoPers, setMontoGtoPers] = useState(0);
    const[porcGtoPers, setPorcGtoPers] = useState(0);
    const[montoGtoTotal, setMontoGtoTotal] = useState(0);
    const[porcGtoTotal, setPorcGtoTotal] = useState(0);
    const[montoAhorroInv, setMontoAhorroInv] = useState(0);
    const[porcAhorroInv, setPorcAhorroInv] = useState(0);

    let almacenamiento = [ingresoPrincipal, otrosIngresos, gastosFijos, gastosPersonales, ahorroInversion, montoIngPpal, porcIngPpal, montoOtrosIng, porcOtrosIng, montoIngTotal, porcIngTotal, montoGtoFijo, porcGtoFijo, montoGtoPers, porcGtoPers, montoGtoTotal, porcGtoTotal, montoAhorroInv, porcAhorroInv];

    useEffect(() => {
        const variablesAlmacenadas = JSON.parse(localStorage.getItem('variables')) || [''];

        setIngresoPrincipal(variablesAlmacenadas[0]);
        setOtrosIngresos(variablesAlmacenadas[1]);
        setGastosFijos(variablesAlmacenadas[2]);
        setGastosPersonales(variablesAlmacenadas[3]);
        setAhorroInversion(variablesAlmacenadas[4]);

        if (variablesAlmacenadas) {
            setMontoIngPpal(totalCategoria(ingresoPrincipal));
            setMontoOtrosIng(totalCategoria(otrosIngresos));
            setMontoIngTotal(totalIngresos());
            setMontoGtoFijo(totalCategoria(gastosFijos));
            setMontoGtoPers(totalCategoria(gastosPersonales));
            setMontoGtoTotal(totalGastos());
            setMontoAhorroInv(totalCategoria(ahorroInversion));

            setPorcIngPpal(porcentajeCategoria(ingresoPrincipal));
            setPorcOtrosIng(porcentajeCategoria(otrosIngresos))
            setPorcIngTotal(porcIngPpal + porcOtrosIng);
            setPorcGtoFijo(porcentajeCategoria(gastosFijos));
            setPorcGtoPers(porcentajeCategoria(gastosPersonales));
            setPorcGtoTotal(porcGtoFijo + porcGtoPers);
            setPorcAhorroInv(porcentajeCategoria(ahorroInversion));
        }        
    }, []);

    useEffect(() => {
        localStorage.setItem('variables', JSON.stringify(almacenamiento))
    });

    const resetAll = () => {
        setIngresoPrincipal([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
        setOtrosIngresos([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
        setGastosFijos([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
        setGastosPersonales([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
        setAhorroInversion([{ tipo: 'none', concepto: '', monto: 0, fecha: '', categoria: ''}]);
        localStorage.removeItem('variables');
    };

    //Datos para Tabla Resumen
    const totalIngresos = () => {
        return  montoIngPpal +  montoOtrosIng || 0;
    };

    const totalGastos = () => {
        return montoGtoFijo + montoGtoPers || 0;
    };

    const totalCategoria = (categoryName) => {
        if (categoryName === ingresoPrincipal && categoryName) {
            let acumulador = 0;
            [...ingresoPrincipal].forEach((ing) => acumulador += +ing.monto);
            return acumulador || 0;
        } else if (categoryName === otrosIngresos && categoryName) {
            let acumulador = 0;
            [...otrosIngresos].forEach((ing) => acumulador += +ing.monto);
            return acumulador || 0;
        } else if (categoryName === gastosFijos && categoryName) {
            let acumulador = 0;
            [...gastosFijos].forEach((ing) => acumulador += +ing.monto);
            return acumulador || 0;
        } else if (categoryName === gastosPersonales && categoryName) {
            let acumulador = 0;
            [...gastosPersonales].forEach((ing) => acumulador += +ing.monto);
            return acumulador || 0;
        } else if (categoryName === ahorroInversion && categoryName) {
            let acumulador = 0;
            [...ahorroInversion].forEach((ing) => acumulador += +ing.monto);
            return acumulador || 0;
        } else {
            return 0;
        }
    };

    const porcentajeCategoria = (category) => {
        const precio = totalCategoria(category);
        const porcentaje = precio / totalIngresos() * 100;
        return Math.trunc(porcentaje) || 0;
    };

    const montoPresupuestado = (porcentaje) => {
        return  Math.trunc(totalIngresos() * porcentaje / 100) || 0;
    };

    //Funci??n que actualiza datos de Tabla Resumen
    
    useEffect(() => {
        const actualizarMonto = () => {        
            setMontoIngPpal(totalCategoria(ingresoPrincipal));
            setMontoOtrosIng(totalCategoria(otrosIngresos));
            setMontoIngTotal(totalIngresos());
            setMontoGtoFijo(totalCategoria(gastosFijos));
            setMontoGtoPers(totalCategoria(gastosPersonales));
            setMontoGtoTotal(totalGastos());
            setMontoAhorroInv(totalCategoria(ahorroInversion));
        };
    
        const actualizarPorcentaje = () => {
            setPorcIngPpal(porcentajeCategoria(ingresoPrincipal));
            setPorcOtrosIng(porcentajeCategoria(otrosIngresos))
            setPorcIngTotal(porcIngPpal + porcOtrosIng);
            setPorcGtoFijo(porcentajeCategoria(gastosFijos));
            setPorcGtoPers(porcentajeCategoria(gastosPersonales));
            setPorcGtoTotal(porcGtoFijo + porcGtoPers);
            setPorcAhorroInv(porcentajeCategoria(ahorroInversion));
        };
    
        actualizarMonto();
        actualizarPorcentaje();
    });

    //Funci??n para exportar Tabla a Excel
    var tableToExcel = (function() {
        var uri = 'data:application/vnd.ms-excel;base64,'
          , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
          , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
          , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
        return function(table, name) {
          if (!table.nodeType) table = document.querySelector(`.${table}`)
          var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
          window.location.href = uri + base64(format(template, ctx))
        }
    })()
    
    return (
        <CartContext.Provider value={{ totalIngresos, totalGastos, totalCategoria, porcentajeCategoria, montoPresupuestado, ingresoPrincipal, setIngresoPrincipal, otrosIngresos, setOtrosIngresos, gastosFijos, setGastosFijos, gastosPersonales, setGastosPersonales, ahorroInversion, setAhorroInversion, resetAll, montoIngPpal, porcIngPpal, montoOtrosIng, porcOtrosIng, montoIngTotal, porcIngTotal, montoGtoFijo, porcGtoFijo, montoGtoPers, porcGtoPers, montoGtoTotal, porcGtoTotal, montoAhorroInv, porcAhorroInv, tableToExcel }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;