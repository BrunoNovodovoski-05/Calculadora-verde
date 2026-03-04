import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const Calculator = () => { 
    const [ firstValue, setFirstValue] = React.useState('');
    const [ displayValue, setDisplayValue] = React.useState('0');
    const [ operator, setOperator] = React.useState('');

     const handleNumberInput = (num: string) => {
        if ( displayValue == '0' ) {
            setDisplayValue (num);
        } else {
            setDisplayValue ( displayValue + num);
        }
    };
    const handleOperatorInput = (op: string) => {
        setOperator(op);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };
    const handleCalculation = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue);
        
        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === '*') {   
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '÷') {
            setDisplayValue((num1 / num2).toString());
        } else if (operator === '%') {
            setDisplayValue((num1 % num2).toString());
        }
        setOperator('');    
        setFirstValue('');  
    }

    return (
        <View style = { style.container}>
           <View style= { style.display}>
            <Text style = {{color: '#ffffff', fontSize: 30, fontWeight: '300'}}>{firstValue + operator}</Text>
            <Text style = {{color: '#ffffff', fontSize: 70, fontWeight: '300'}}>{displayValue}</Text>
            </View>
                 <View style= { style.keypad}>

                <View style= { style.keypad1}>

                <Button title='AC' type= 'top' onPress={() => setDisplayValue('0')} />
                <Button title='<X' type= 'top' onPress={() => setDisplayValue(displayValue.slice(0, -1) || '0')} />
                <Button title='%' type=  'top' onPress={() => handleOperatorInput('%')} />
                <Button title='÷' type=  'right' onPress={() => handleOperatorInput('÷')} />

              </View>
             
             <View style= { style.keypad2}>

                <Button title='7' type= 'number' onPress={() => handleNumberInput('7')} />
                <Button title='8' type= 'number' onPress={() => handleNumberInput('8')} />
                <Button title='9' type= 'number' onPress={() => handleNumberInput('9')} />
                <Button title='*' type= 'right' onPress={() => handleOperatorInput('*')} />

            </View>

                <View style= { style.keypad3}>

                <Button title='4' type= 'number' onPress={() => handleNumberInput('4')} />
                <Button title='5' type= 'number' onPress={() => handleNumberInput('5')} />
                <Button title='6' type= 'number' onPress={() => handleNumberInput('6')} />
                <Button title='-' type= 'right' onPress={() => handleOperatorInput('-')} />

            </View>
            
                <View style= { style.keypad4}>
          
                <Button title='1' type= 'number' onPress={() => handleNumberInput('1')} />
                <Button title='2' type= 'number' onPress={() => handleNumberInput('2')} />
                <Button title='3' type= 'number' onPress={() => handleNumberInput('3')} />
                <Button title='+' type= 'right' onPress={() => handleOperatorInput('+')} />

            </View>  

                <View style= { style.keypad5}>

           
                <Button title=',' type= 'number' onPress={() => handleNumberInput(',')} />
                <Button title='0' type= 'number' onPress={() => handleNumberInput ('0')}/>
                <Button title='=' type= 'equal' onPress={ handleCalculation} />
            </View>
                
            </View>

        </View>
    )

}

export default Calculator
const style = StyleSheet.create({

    container: {
        flex: 1,
            backgroundColor: '#262626', 
    
    },
    display: {

        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: '#262626',

    },
    keypad: {
        marginTop: 40,
        alignItems:  'center',
        marginHorizontal: 20,
        borderRadius: 20,
        flex: 2,
        backgroundColor: '#595959',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 30,
        padding: 80,
        justifyContent: 'space-evenly',

    },
    keypad1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    keypad2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    keypad3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    keypad4: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    keypad5: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },

  },  
)