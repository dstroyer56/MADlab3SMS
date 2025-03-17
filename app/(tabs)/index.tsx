import { Link } from 'expo-router';
import * as SMS from 'expo-sms';
import { Alert, Button, StyleSheet, View } from 'react-native';


export default function HomeScreen() {


  const id = ['0488156944'];//change 
  
  function askToSend() {

    Alert.alert("SMS Send", "Send: " + id, [
      {
        text: "Cancel",
      },
      {
        text: "Ok", onPress:()=> _handlePressButtonAsync()
      }
    ])
  }

  async function _handlePressButtonAsync(){
  const { result } = await SMS.sendSMSAsync(
      id,
      'whats up bruv',
      {
        attachments: {
          uri: 'https://www.latrobe.edu.au/__data/assets/file/0010/796393/logo-white.svg',
          mimeType: 'image/png',
          filename: 'myfile.png',
        },
      }
    );
  }

return (

  <View style = {styles.header}>
    <View style = {styles.containerRow}>
      <Button
        title = 'Send SMS'
        onPress={()=>askToSend()}
        />
      <Link href="./contacts" asChild>
        <Button title = "Contacts"></Button>
        
      </Link>

    </View>
  </View>
      );

}

const styles = StyleSheet.create({

  header: {
    padding: 40
  },
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8.
  }
  
});
