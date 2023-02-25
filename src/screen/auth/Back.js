import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

const Back = () => {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
        <Image source={require('../../assets/continue.jpg')} style={{width:300, height:100}} />
        <Text style={{fontWeight:'bold', fontSize:15, color:'#121211', paddingTop:100}}>K A J A creations</Text>
      </View>
    );
}



export default Back;