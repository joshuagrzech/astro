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
    fontFamily: 'STHeitiTC-Medium',
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
    textAlign: 'center',
    fontFamily: 'STHeitiTC-Medium'
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
    alignContent: 'center'
  },
  sunImage: {
    maxHeight: '95%',
    maxWidth: '60%',
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  spinner: {
    
  },
  sunModal: {
    backgroundColor: 'transparent'
  },
  sunModalSquare: {
    width: 250,
    height: '70%',
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: '5%'
  },
  sunModalTriangle: {
    position: 'absolute',
    left: 115,
    top: -26,
    width: 0,
    height: 0,
    transform: [{ rotate: "90deg" }],
    borderTopColor: 'transparent',
    borderTopWidth: 13,
    borderRightWidth: 26,
    borderRightColor: 'orange',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent'
  },
  moonModal: {
    backgroundColor: 'transparent'
  },
  moonModalSquare: {
    width: 250,
    height: '70%',
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: '5%'
  },
  moonModalTriangle: {
    position: 'absolute',
    left: 115,
    top: -26,
    width: 0,
    height: 0,
    transform: [{ rotate: "90deg" }],
    borderTopColor: 'transparent',
    borderTopWidth: 13,
    borderRightWidth: 26,
    borderRightColor: 'gray',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent'
  },
  risingModal: {
    backgroundColor: 'transparent'
  },
  risingModalSquare: {
    width: 250,
    height: '70%',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: '5%'
  },
  risingModalTriangle: {
    position: 'absolute',
    left: 162,
    top: -26,
    width: 0,
    height: 0,
    transform: [{ rotate: "90deg" }],
    borderTopColor: 'transparent',
    borderTopWidth: 13,
    borderRightWidth: 26,
    borderRightColor: 'black',
    borderBottomWidth: 13,
    borderBottomColor: 'transparent'
  }
});
