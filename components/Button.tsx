import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ( { title, type, onPress} : { 
    title: string, type: 'top' | 'right' | 'number' | 'equal';
    onPress: (event: GestureResponderEvent) => void
} ) => {
    return (
        <TouchableOpacity style={[style.button, {
            backgroundColor: 
                    type == 'top' 
                        ? '#BFBFBF'
                        : type == 'right' || type == 'equal'
                        ? '#03A64A'
                        : '#171617' 
                    },
            ]} 
                onPress={onPress}
            >

          <Text style={{fontSize: 80, fontWeight: '600',
            color: type == 'number' ? '#ffffff' : '#000000',
          }}>{title}</Text>
        </TouchableOpacity>
    );
  };

export default Button
const style = StyleSheet.create({

    button: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginRight: 20,
        marginLeft: 20,
       padding: 10,
       color: '#b1acac',
       alignItems: 'center',
       justifyContent: 'center',
    },
    

});