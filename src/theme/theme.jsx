import { StyleSheet } from "react-native"

export const colores = {
    'uno':'#957dad',
    'dos':'#d291bc',
    'tres':'#e0bbe4',
    'cuatro':'#fec8d8',
    'cinco':'#ffdfd3',
    'seis':'#ffffff',
    'siete':'grey',
    'ocho':'#3b363f'

}

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colores.seis,
    },
    login_image:{
        width:200,
        height:200,
        borderRadius:100,
        marginVertical:20,
    },
    login_container:{
        flex:1,
        backgroundColor:colores.ocho,
        padding:20,
        alignItems:'center',
    },
    login_input:{
        width:'100%',
        height:40,
        margin:12,
        borderWidth:1,
        padding:10,
        borderLeftWidth:0,
        borderTopWidth:0,
        borderRightWidth:0,
        borderBottomWidth:1,
        borderColor:colores.cuatro,
        backgroundColor:colores.seis,
    },
    login_texto:{
        fontSize:20,
        color:colores.uno,
        fontWeight:'bold'
    }, 
    login_boton_texto:{
        fontSize:15,
        color:colores.ocho,
        fontWeight:'bold',
        textAlign:'center',
    },
    login_boton:{
        backgroundColor:colores.tres,
        width:100,
        height:40,
        borderRadius:10,
        justifyContent:'center',
        marginTop:10,
    }
});
