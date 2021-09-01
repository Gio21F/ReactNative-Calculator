import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const {
        numero, numeroAnterior, armarNumero, del, calcular,
        limpiar, positivoNegativo, btnDividir, btnMultiplicar, 
        btnRestar, btnSumar,
    } = useCalculadora();

    return (
        <View style={ styles.calculadoraContainer }>
            {
                (numeroAnterior !== '0') && (
                    <Text style={ styles.resultadoPequeno }>{numeroAnterior}</Text>
                )
            }
            <Text 
                style={ styles.resultado }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
            </Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="C" color="#9B9B9B" action={limpiar} />
                <BotonCalculadora texto="+/-" color="#9B9B9B" action={positivoNegativo} />
                <BotonCalculadora texto="del" color="#9B9B9B" action={del} />
                <BotonCalculadora texto="/" color="#FF9427" action={btnDividir} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="7" action={armarNumero} />
                <BotonCalculadora texto="8" action={armarNumero} />
                <BotonCalculadora texto="9" action={armarNumero} />
                <BotonCalculadora texto="x" color="#FF9427" action={btnMultiplicar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="4" action={armarNumero} />
                <BotonCalculadora texto="5" action={armarNumero} />
                <BotonCalculadora texto="6" action={armarNumero} />
                <BotonCalculadora texto="-" color="#FF9427" action={btnRestar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="1" action={armarNumero} />
                <BotonCalculadora texto="2" action={armarNumero} />
                <BotonCalculadora texto="3" action={armarNumero} />
                <BotonCalculadora texto="+" color="#FF9427" action={btnSumar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalculadora texto="0" ancho action={armarNumero} />
                <BotonCalculadora texto="." action={armarNumero} />
                <BotonCalculadora texto="=" color="#FF9427" action={calcular} />
            </View>

            
        </View>
    )
}

