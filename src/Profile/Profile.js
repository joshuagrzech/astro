import React from 'react'
import { View, TouchableOpacity, Text, SafeAreaView} from 'react-native'



export class Profile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <SafeAreaView>
                <View style={{alignContent: "center", alignItems: "center", padding: 50}}>
                    <TouchableOpacity onPress={this.props.onSignOut}>
                        <Text style={{fontSize: 20}}>Sign-Out</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{margin: 20}} onPress={this.props.resetProfile}>
                        <Text style={{fontSize: 20}}>Reset Profile</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}