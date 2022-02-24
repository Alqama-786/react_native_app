import * as React from "react";
import {
  Alert,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  LogBox,
} from "react-native";
import Checkbox from "expo-checkbox";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const LoginForm = ({ navigation }) => {
  const [creditials, setCreditials] = React.useState({
    name: "",
    password: "",
  });
  const [agree, setAgree] = React.useState(false);
  const handleLogin = () => {
    if (!creditials.name.length && !creditials.password.length) {
      Alert.alert("Please enter your name and password");
    } else if (creditials.name.length < 4) {
      Alert.alert("Name must be at least 4 characters");
    } else if (creditials.password.length < 6) {
      Alert.alert("Password must be at least 6 characters");
    } else {
      Alert.alert(`Thank you for login ${creditials.name}`);
      navigation.navigate("Home", { name: creditials.name });
      setCreditials({ name: "", password: "" });
      setAgree(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You can reach us anytime via any@example.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          value={creditials.name}
          onChangeText={(text) => setCreditials({ ...creditials, name: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.inputStyle}
          autoCapitalize="none"
          value={creditials.password}
          onChangeText={(text) =>
            setCreditials({ ...creditials, password: text })
          }
        />
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          color={agree ? "#4630EB" : undefined}
          value={agree}
          onValueChange={() => setAgree(!agree)}
        />
        <Text style={styles.checkboxText}>Remember Me</Text>
      </View>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: agree ? "#4630EB" : "#ccc" }]}
        onPress={() => handleLogin()}
        disabled={!agree}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    height: "100%",
  },
  mainHeader: {
    fontSize: 25,
    color: "#fff",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkboxText: {
    fontSize: 18,
    color: "#7d7d7d",
    marginLeft: 10,
    lineHeight: 25,
  },
  btn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    textTransform: "capitalize",
    letterSpacing: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginForm;
