import { useNavigation } from "@react-navigation/native";
import { Button, StatusBar } from "native-base";
import {
  View,
  Image,
  Platform,
  Dimensions,
  StyleSheet,
} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import { responsiveWidth } from "react-native-responsive-dimensions";

const { width } = Dimensions.get('screen')

const Header = () => {
  const { navigate } = useNavigation()

  const onSubmit = () => {
    navigate('Login')
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>
        <View>
          <Image
            source={require('../assets/images/cher-logo.png')}
            style={styles.logo}
            resizeMethod='auto'
            resizeMode='contain'
            />
        </View>
        
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <Button variant={'ghost'} _text={{ color: 'gray.800' }}>Help</Button>
          <Button variant={'ghost'} _text={{ color: 'gray.800' }}>Have a Question?</Button>
          <Button
            variant={'ghost'}
            _text={{ color: 'gray.800' }}
            onPress={onSubmit}
            leftIcon={
              <Ionicons
                name={"ios-person-circle-outline"}
                size={20}
                color={"#444"}
                />
            }
          >
            Signout
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    height: 80,
    width: responsiveWidth(100),
  },
  logo: {
    marginVertical: 20,
    width: 80
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    width: responsiveWidth(100),
    position: 'absolute',
    top: 0,
    height: 80,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0, 0.25)',
    shadowColor: "rgba(0,0,0,.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width,
  },
  loginContainer:{
    flex: 1,
    backgroundColor:'rgba(255, 255, 255, 0.85)',
    padding: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
      }
    })
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  formContainer: {
    flex: 1,
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  }
})

export default Header;
