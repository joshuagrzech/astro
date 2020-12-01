import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import styles from '../stylesheet';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const signTraits = {
  Aries: ['Eager', 'Dynamic', 'Quick', 'Competitive'],
  Taurus: ['Strong', 'Dependable', 'Sensual', 'Creative'],
  Gemini: ['Versatile', 'Expressive', 'Curious', 'Kind'],
  Cancer: ['Intuitive', 'Sentimental', 'Compassionate', 'Protective'],
  Leo: ['Dramatic', 'Outgoing', 'Fiery', 'Self-Assured'],
  Virgo: ['Practical', 'Loyal', 'Gentle', 'Analytical'],
  Libra: ['Social', 'Fair-Minded', 'Diplomatic', 'Gracious'],
  Scorpio: ['Passionate', 'Stubborn', 'Resourceful', 'Brave'],
  Saggitarius: ['Extroverted', 'Optimistic', 'Funny', 'Generous'],
  Capricorn: ['Serious', 'Independent', 'Disciplined', 'Tenacious'],
  Aquarius: ['Deep', 'Imaginative', 'Original', 'Uncompromising'],
  Pisces: ['Affectionate', 'Empathetic', 'Wise', 'Artistic'],
};

export class PersonalSun extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{height: '100%'}}>
        <View
          style={{
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{flex: 0.75, alignItems: 'center', marginTop: '10%'}}>
            <Card style={{borderRadius: 80}}>
              <Text style={{textAlign: 'center', fontSize: 20, margin: '10%'}}>
                Your sun-sign represents your core personality.
              </Text>
            </Card>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <Card style={{borderRadius: 80}}>
              <Text style={{textAlign: 'center', fontSize: 20, margin: 20}}>
                This is what makes you...YOU!
              </Text>
            </Card>
          </View>
          <View style={{flex: 2}}>
            
              <Text style={{textAlign: 'center', fontSize: 40, margin: '5%'}}>
                {this.props.user.profile.sunSign} are:
              </Text>

              
                {signTraits[`${this.props.user.profile.sunSign}`].map((trait) => {
                  return (
                    <View style={{borderRadius: 60, margin: '1%'}}>
                      
                      <View style={{borderRadius: 60}}>
                      <Card style={{borderRadius: 80, width: '100%'}}>
                      <Text
                        style={{textAlign: 'center', color: 'black', fontSize: 30, margin: 5}}>
                        {trait}
                      </Text>
                      </Card>
                      </View>
                    </View>
                  );
                })}
              
            
          </View>
          <View style={{flex: 0.5}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('IntroFinal')}
              style={{
                backgroundColor: 'blue',
                borderRadius: 40,
                padding: 15,
              }}>
              <Text style={{fontSize: 25, color: 'white'}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
