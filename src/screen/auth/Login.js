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
import auth from '@react-native-firebase/auth';



const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    

    const handleSignUp = () => {
        console.log(auth);
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('user login successfully')
                navigation.navigate('Back')
            })
            .catch(error => alert(error.massage))
    };

    const navigation=useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{flex:1}}>
                    <Image 
                        style={styles.loginLogo} 
                        source={require('../../assets/home.jpg')}   
                    />
                </View>
                <View style={styles.box}>
                    <Text style={{fontWeight:'500', color:'#0a0a0a'}}>Email</Text>
                    <TextInput 
                        placeholder='kaja@gmail.com'
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={{fontWeight:'500', color:'#0a0a0a'}}>Password</Text>
                    <TextInput 
                        placeholder='Kaja@123'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={false}
                    />
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
                        <Text style={{
                            color:'#e61d12', 
                            fontSize:15, 
                            textAlign:'right',
                            paddingHorizontal:14
                            }}>
                            Forgot Your Password?
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {handleSignUp();}}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Log In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Text style={{
                        fontWeight:'500', 
                        // color:'#0a0a0a', 
                        textAlign: 'center'
                        }}>OR
                    </Text>
                </View>
                <View style={styles.container}>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity style={{marginRight:5}}>
                            <Image source={require('../../assets/google.png')} style={{width:40, height:40, borderRadius:1000}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:5}}>
                            <Image source={require('../../assets/facebook.png')} style={{width:40, height:40, borderRadius:1000}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={{height:1, backgroundColor:'#ddd', width:'100%'}}></View>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                        <Text style={{
                            color:'#0acf0a',
                            textAlign:'center',
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}>Need An Account? Register Now
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

export default Login;