import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
    View, 
    Text,
    Image,
} from 'react-native';

const Splash = () => {

    const [isGo, setIsGo]=React.useState(true);
    const navigation=useNavigation();
    
    useEffect(()=>{
        if(isGo==true){
            setTimeout(()=>{
                navigation.navigate('Login');
                setIsGo(false);
            },2000);   
        }
    });

    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#fff'}}>
            <Image source={require('../../assets/splash.webp')} style={{width:150, height:100}}/>
            <Text style={{fontSize:20, fontWeight:'bold', textAlign:'center', color:'#fc030f'}}>K A J A</Text>
        </View>
    );
}

export default Splash;