import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { router } from 'expo-router';
import api from '@/services/api';
const signin = () => {
    const { login } = useAuth();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        await api.post("/Auth/Login", { email, password }).then(res => {
            login(res.data.token);
            console.log("Login response:", res.data);
            console.log("Login successful, token:", res.data.token);
            router.push("/(tabs)"); // navigate to main app after login
        }).catch(err => {
            console.error("Login error:", err);
        });
    }
    return (
        <View className='flex-1 justify-center px-4'>
            <TextInput placeholder='Email' className='border-2 border-gray-300 rounded-lg px-4 py-2 mt-4' value={email} onChangeText={setEmail} />
            <TextInput placeholder='Password' secureTextEntry className='border-2 border-gray-300 rounded-lg px-4 py-2 mt-4' value={password} onChangeText={setPassword} />
            <Pressable className='bg-[#FF5C00] w-full h-[56px] rounded-[16px] justify-center mt-6' onPress={() => handleLogin()}>
                <Text className='text-white text-center font-bold'>Sign In</Text>
            </Pressable>
        </View>
    )
}

export default signin