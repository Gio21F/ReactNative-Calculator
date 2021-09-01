import { useState, useRef } from "react";

enum Operadores {
    suma, resta, multiplicacion, division
}

export const useCalculadora = () => {
    
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }
    const del = () => {
        let negativo = '';
        let numeroTemp = numero;
        if ( numero.includes('-') ) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }
        if( numeroTemp.length > 1 ) {
            setNumero( negativo + numeroTemp.slice(0, -1));
        }
        else {
            setNumero('0');
        }
    }
    const armarNumero = (numberText: string) => {
        //No aceptar doble punto
        if ( numero.includes('.') && numberText === '.' ) return;
        //Si comienza con 0
        if ( numero.startsWith('0') || numero.startsWith('-0') ){
            //punto decimal
            if ( numberText === '.' ){
                setNumero(numero + numberText);
            } 
            //Evaluar si es cero, y no hay punto
            else if ( numberText === '0' && numero.includes('.') ) {
                setNumero( numero + numberText );
            } 
            //Evaluar si es diferente de 0 y no tiene un punto
            else if (numberText !=='0' && !numero.includes('.')) {
                setNumero(numberText)
            }
            else if (numberText === '0' && !numero.includes('.')) {
                setNumero(numero);
            }
            else{
                setNumero(numero + numberText);
            }

        } else {
            setNumero(numero + numberText);
        }    
    }

    const positivoNegativo = () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace('-', '') );
        } else {
            setNumero( '-' + numero );
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if( numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }
    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.division;
    }
    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicacion;
    }
    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.suma;
    }
    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.resta;
    }

    const calcular = () => {
        const num1 = Number( numero );
        const num2 = Number( numeroAnterior );
        
        switch ( ultimaOperacion.current ) {
            case Operadores.suma:
                setNumero(`${ num1 + num2 }`)
                break;
            
            case Operadores.resta:
                setNumero(`${ num2 - num1 }`)
                break;

            case Operadores.multiplicacion:
                setNumero(`${ num1 * num2 }`)
                break;

            case Operadores.division:
                setNumero(`${ num2 / num1 }`)
                break;
            
        }
        setNumeroAnterior('0');
    }
    
    return {
        numero,
        numeroAnterior,
        limpiar,
        del,
        armarNumero,
        positivoNegativo,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        calcular
    }
}
