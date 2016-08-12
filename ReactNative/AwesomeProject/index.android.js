/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  Switch,
  Platform,
} from 'react-native';

import {CheckBox,} from 'react-native-checkbox';
class AwesomeProject extends Component {
  constructor(props){
    super(props);
      this.state={
        checkedStatus: "true"
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Intuit Rocks!</Text>
        <TouchableHighlight onPress={this._clickMePressed}>
          <Text> Click Here</Text>
        </TouchableHighlight>
        {this._renderSwitch()}
      </View>
    );
  }

  _renderSwitch(){
    if(Platform.os='ios'){
      return(
        <Switch onValueChange={this._switchClicked} value={true} disabled={false}/>
      );
    }
    else{
      return(
        <CheckBox label="Switch with label" checked={this.state.checkedStatus} onChange={(checked)=>{
          console.log('checked status=', checked);
          this.setState({checkedStatus: checked});
        }}/>
      )
    }
  }
    _clickMePressed() {
      Alert.alert('Clicked','User has pressed the click me button',[{text:'Cool'}]);
    }
}

const styles=StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF',
    },

    red:{
      color:'red',
    },

    welcome:{
      fontSize:20,
      textAlign:'center',
      margin:10,
      color:'green',
    }
  }
);

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
