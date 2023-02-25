import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { 
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    View, 
    Text, 
    Image,
    TextInput,
    TouchableOpacity,
    Button,
} from 'react-native';


const Forget = () => {

    const navigation=useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{flex:1}}>
                    <Image 
                        style={styles.loginLogo} 
                        source={require('../../assets/login.jpg')}   
                    />
                </View>
                <View style={styles.box}>
                    <Text style={{fontWeight:'500', color:'#0a0a0a'}}>Email</Text>
                    <TextInput placeholder='kaja@gmail.com'/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Send New Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={{height:1, backgroundColor:'#ddd', width:'100%'}}></View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text style={{
                            color:'#0acf0a',
                            textAlign:'center',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Already Have An Account? Login 
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 5
    },
    loginLogo: {
        padding: 10,
        width: '100%',
        height: 320
    },
    box: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#008080',
        margin: 10,
        marginHorizontal: 15,
        padding: 5
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#3262a8',
        padding: 15,
    }
});

export default Forget;