import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  topView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flex: 1
  },
  interactCard: {
    padding: '7%',
    alignItems: 'center',
    marginTop: '3%',
   
    borderRadius: 40,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 40,
    
  },
  boldWhiteText: {
    fontSize: 22,
    marginHorizontal: '5%',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  questionText: {
    marginTop: '3%',
    fontSize: 25,
    marginHorizontal: '8%',
    textAlign: 'center',
  },
  blueButton: {
    backgroundColor: 'blue',
    borderRadius: 80,
    padding: 20,
    alignItems: 'center'
  },
  whiteButtonText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  zodiacImage: {
    height: '70%',
    width: '100%'
  },
  constellationImage: {
    height: '90%',
    width: '100%'
  },
  whiteButton: {
    margin: '5%',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: '8%',
    alignItems: 'center'
  },
  blackButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  boldBlueText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '7%',
    color: 'blue',
  },
  infoCard: {
    opacity: 0.85,
    marginVertical: '10%',
    padding: '5%',
    borderRadius: 30,
    alignItems: 'center',
  },
  sunImage: {
    maxHeight: '95%',
    maxWidth: '60%',
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  spinner: {
    
  }
});
