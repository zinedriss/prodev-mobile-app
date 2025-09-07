import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"
export default function signin() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} >
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} onPress={()=> router.push("/")}/>
          <Image source={require("@/assets/images/logo-green.png")}/>
        </View>

        <Text style={styles.largeText} >Sign in to your </Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText} >Enter your email and password to sign in.</Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.inputField} />
          </View>
          <View style={{marginTop : 20}}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput style={{flex : 1}}/>
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B"/>
            </View>
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>

        <View style={styles.socialMediaButtonGroup}>
          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{flexDirection : "row", alignItems : "center", gap : 5 }}>
              <Image source = {require("@/assets/images/google.png")}/>
              <Text style= {styles.socialMediaButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialMediaButton}>
            <View style={{flexDirection : "row", alignItems : "center", gap : 5}}>
              <Image source={require("@/assets/images/facebook.png")}/>
              <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.subTextGroup}>
          <Text style={styles.subText}>D&apos;ont have an account?</Text>
          <Text style={styles.subTextJoin} onPress={()=> router.push("/join")}>Join now</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
