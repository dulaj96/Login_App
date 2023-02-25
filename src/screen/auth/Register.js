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


const Register = () => {

    const navigation=useNavigation();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegister = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
            console.log('User account created & signed in successfully!');
            alert('Register Successfully!');
            navigation.navigate('Login');
            })
            .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
            });         
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{flex:1}}>
                    <Image 
                        style={styles.loginLogo} 
                        source={require('../../assets/register.png')}   
                    />
                </View>
                <View style={styles.box}>
                    <Text style={{fontWeight:'500', color:'#0a0a0a'}}>Full Name</Text>
                    <TextInput placeholder='Supiri Kaja'/>
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
                        secureTextEntry={false}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={{fontWeight:'500', color:'#0a0a0a'}}>Confirm Password</Text>
                    <TextInput placeholder='kaja@123' secureTextEntry={false}/>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={{textAlign:'center', fontSize:16, color:'#fff'}}>Register</Text>
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
        height: 305
    },
    box: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#008080',
        margin: 5,
        marginHorizontal: 15,
        padding: 5
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#34a62e',
        padding: 15,
    }
});

export default Register;