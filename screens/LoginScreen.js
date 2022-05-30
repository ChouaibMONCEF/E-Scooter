// import React, { useState, useEffect } from "react"
// import { authentification } from "../config/firebase"
// import {
//   KeyboardAvoidingView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   ScrollView,
// } from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { signInWithEmailAndPassword } from "firebase/auth"
// import AsyncStorage from "@react-native-async-storage/async-storage"

// const LoginScreens = () => {
//   useEffect(async () => {
//     const user = await AsyncStorage.getItem("user")
//     if (user) {
//       navigation.navigate("Maps")
//     }
//   }, [])

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigation = useNavigation()
//   const signIn = () => {
//     signInWithEmailAndPassword(authentification, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user
//         if (user) {
//           AsyncStorage.setItem("user", JSON.stringify(user))

//           navigation.navigate("Maps")
//         } else {
//           alert("Please verify your email")
//         }
//       })
//       .catch((error) => {
//         const errorCode = error.code
//         const errorMessage = error.message
//         console.warn(errorMessage)
//       })
//   }

//   return (
//     <ScrollView style={styles.scrollView}>
//       <KeyboardAvoidingView style={styles.container} behavior='padding'>
//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder='Email'
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             style={styles.input}
//           />
//           <TextInput
//             placeholder='Password'
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             style={styles.input}
//             secureTextEntry
//           />
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity onPress={signIn} style={styles.button}>
//             <Text style={styles.buttonText}>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => navigation.navigate("Signup")}
//             style={[styles.button, styles.buttonOutline]}
//           >
//             <Text style={styles.buttonOutlineText}>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//     </ScrollView>
//   )
// }

// export default LoginScreens

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   inputContainer: {
//     width: "80%",
//   },
//   input: {
//     backgroundColor: "white",
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   buttonContainer: {
//     width: "60%",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: "#0782F9",
//     width: "100%",
//     padding: 15,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   buttonOutline: {
//     backgroundColor: "white",
//     marginTop: 5,
//     borderColor: "#0782F9",
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: "#0782F9",
//     fontWeight: "700",
//     fontSize: 16,
//   },
//   scrollView: {
//     marginTop: 300,
//   },
// })
