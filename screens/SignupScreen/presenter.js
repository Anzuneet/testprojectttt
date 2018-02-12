import React from "react";
import PropTypes from 'prop-types';
import {
      View,
      Text,
      Image,
      StyleSheet,
      Dimensions,
      TouchableOpacity,
      TextInput,
      StatusBar,
      ActivityIndicator,
      ScrollView,
    } from "react-native";
import {LinearGradient} from 'expo';
import { Ionicons } from "@expo/vector-icons";
import {ModalDropdown} from "react-native-modal-dropdown";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
    
var radio_types = [
  {label: 'trainee', value: "trainee" },
  {label: 'trainer', value: "trainer" }
];

var radio_genders = [
  {label: 'Male', value: "M" },
  {label: 'Female', value: "F" }
]

const { width, height } = Dimensions.get("window");

const SignupScreens = props => (
    <ScrollView
      style = {styles.container}
      >
      <StatusBar hidden = {true}/>
      <View style={styles.header}>
        <Image
        source={require("../../assets/images/logo-white.png")}
        resizeMode="stretch"
        style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}> login Information </Text>
        <TextInput 
            style = {styles.textInputLoginInformation} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="Username" 
            autoCorrecto = {false}
            value = {props.username}
            onChangeText={props.changeUsername}
            />
        <TextInput 
            style = {styles.textInputLoginInformation} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="Password"
            secureTextEntry = {true} 
            value = {props.password}
            onChangeText={props.changePassword}
            />
        <TextInput 
            style = {styles.textInputLoginInformation} 
            underlineColorAndroid = 'rgba(0,0,0,0)' 
            placeholder="Confirm Password"
            secureTextEntry = {true} 
            value = {props.password2}
            onChangeText={props.changePassword2}
            />
        
        <Text style={styles.subtitle2}> Persnal Information </Text>
        <View style = {styles.phoneContent}>
          <TextInput 
              style = {styles.textInputPhone} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="Input your phone number and v" 
              value = {props.phonenumber}
              onChangeText={props.changePhonenumber}
          />
          <TouchableOpacity style = {styles.phonevali}>
            <Text style = {styles.informPhone}> Valifycation!!</Text>
          </TouchableOpacity>
        
        </View>

        <View style = {styles.typeContent}>
          <RadioForm
            radio_props={radio_genders}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            buttonSize={10}
            animation={true}
            labelStyle = {styles.radioText}
            
            onPress={props.changeType}
          />
          <Text style= {styles.informPhone}> Your Sex </Text>
        </View>

        <View style = {styles.phoneContent}>
          <TextInput 
              style = {styles.textInputPhone} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              placeholder="Input your birthday" 
              value = {props.birthday}
              onChangeText={props.changeBirthday}
          />
        
        </View>

        <Text style={styles.subtitle2}> only Trainer! </Text>

        <View style = {styles.typeContent}>
          <RadioForm
            radio_props={radio_types}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            buttonSize={10}
            animation={true}
            labelStyle = {styles.radioText}
            
            onPress={props.changeType}
          />
          <Text style= {styles.informPhone}> Your choice? </Text>
        </View>
        <View style = {styles.phoneContent}>
          <TextInput 
              style = {styles.textInputPhone} 
              underlineColorAndroid = 'rgba(0,0,0,0)'
              value = {props.phonenumber}
              placeholder="If your trainer input GYM" 
              onChangeText={props.changePhonenumber}
          />
          <TouchableOpacity style = {styles.phonevali}>
            <Text style = {styles.buttonForm}> Search!</Text>
          </TouchableOpacity>
        
        </View>
    </View>
      
    </ScrollView>
);

SignupScreens.propTypes = {
    isSubmitting: PropTypes.bool.isRequired,
    username : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    password2 : PropTypes.string.isRequired,
    phonenumber : PropTypes.string.isRequired,
    type : PropTypes.oneOf(['trainee' , 'trainer']).isRequired,
    fitness_club_name : PropTypes.string.isRequired,
    gender : PropTypes.oneOf(['M','F']).isRequired,
    birthday : PropTypes.string.isRequired,
  
    changeUsername : PropTypes.func.isRequired,
    changePassword : PropTypes.func.isRequired,
    changePhonenumber : PropTypes.func.isRequired,
    changeType : PropTypes.func.isRequired,
    changeFitness_club_name : PropTypes.func.isRequired,
    changeGender : PropTypes.func.isRequired,
    changeBirthday : PropTypes.func.isRequired,
    submit : PropTypes.func.isRequired,
    isSearching : PropTypes.func.isRequired,

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    },
    header: {
      flex: 1,
      backgroundColor: "#4E65B4",
      alignItems: "center",
      justifyContent: "center",
      width
      },
      logo: {
        width: 180,
        height: 45,
        marginTop: 20
      },
      content: {
        flex: 6,
        backgroundColor: "transparent",
        paddingTop: 20,
        justifyContent: "flex-start"
      },
      textInputLoginInformation:{
        width : width -80,
        height:30,
        borderColor: "#bbb",
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fafafa",
        marginLeft : 20,

    },
    textInputPhone : {
      width : width-150,
      height: 30,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: "#fafafa",
      marginLeft : 20,
      
    },
    phoneContent:{
      flex:0.2,
      paddingVertical : 5,
      flexDirection : 'row',
      backgroundColor:'transparent',
    },
    subtitle:{
      paddingBottom : 16,
      fontSize : 24,
      textAlign : 'left',
      fontWeight : 'bold',
    },
    subtitle2:{
      paddingVertical : 20,
      fontSize : 24,
      textAlign : 'left',
      fontWeight : 'bold',
    },
    phonevali:{
      marginLeft : 30,
      justifyContent : "center",
    },
    informPhone :{
      fontSize : 16,
      color:"#3E99EE"
    },
    typeContent:{
      flex:0.3,
      paddingTop : 16,
      marginLeft : 20,
      flexDirection : 'row'
    },
    radioText:{
      fontSize: 20,
      paddingHorizontal : 20,
    },
    fitnessClubName :{
      flex:0.3,
      marginLeft : 10,
      flexDirection : 'row'
    },

    textInputFitness :{
      width : width-120,
      height: 40,
      borderColor: "#bbb",
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 5,
      marginBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: "#fafafa",
      marginLeft : 10,
    },
    buttonText : {
      fontSize:16,
      fontWeight:'500',
      color:"#000000",
    },
    buttonForm:{
      fontSize : 16,
      color:"#3E99EE",
      width: 80,
      borderWidth: StyleSheet.hairlineWidth,
      backgroundColor : 'transparent',
      justifyContent:'center',
    }
});
    
export default SignupScreens;