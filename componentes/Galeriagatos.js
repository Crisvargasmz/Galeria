import { View, Text,Image, StyleSheet} from "react-native";
import React from "react";

function Galeriagatos(props) {
    return (
        <View>
           <Image style={styles.gato}  source={props.imagen}/>
           <Text style={styles.text} > {props.nombre}</Text>
            

        </View>

    )
}


export default Galeriagatos;

const styles = StyleSheet.create({
gato:{
     marginTop:10,
     borderRadius:10,
     width:300,
     height:300,
},
text:{
fontSize:16,
fontWeight:'bold',
textAlign:'center',    
}

})