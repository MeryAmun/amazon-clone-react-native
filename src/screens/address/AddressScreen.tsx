import {Text, View, TextInput, Alert, ScrollView,KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import countryList from 'country-list';
import { Buttons } from '../../components';
const countries = countryList.getData();
const states = ['State','Other','New York','Boston','New Orleans', 'Missouri','Alabama','North Carolina','Arizona','Colorado','Philadelphia','Texas','Los Angeles']
const AddressScreen = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState(states[0]);
  const [zipCode, setZipCode] = useState('');
  const [addressError, setAddressError] = useState('')

  //console.log(countries)
  //console.log(country)
  const checkoutHandler = () =>  {
    if(addressError){
        Alert.alert('Fix all errors before submitting');
        return
    }
    if(!fullName){
       Alert.alert('Please Fill in the full name field ')
    }
    if(!phoneNumber){
       Alert.alert('Please Fill in the Phone number field ')
    }
    if(!city){
       Alert.alert('Please Fill in the City field ')
    }
    if(!zipCode){
       Alert.alert('Please Fill in the Zip code field ')
    }
    console.log('check in')
  }

  const validateAddress = () => {
    if(address.length < 3 ){
        setAddressError('Address is too short')
    }
  }
  return (
    <KeyboardAvoidingView>
        <ScrollView style={styles.root}>
      <Text>AddressScreen</Text>
      <View style={styles.row}>
        <Picker selectedValue={country.code} onValueChange={setCountry}>
          {countries.map(country => (
            <Picker.Item
              value={country.code}
              label={country.name}
              key={country.code}
            />
          ))}
        </Picker>
      </View>
      {/* full name */}
      <View style={styles.row}>
        <Text style={styles.label}>Full Name (First and Last name)</Text>
        <TextInput
          placeholder="Full Name"
          style={styles.textInput}
          value={fullName}
          onChangeText={setFullName}
        />
      </View>
      {/* Phone Number */}
      <View style={styles.row}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.textInput}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      {/* Address */}
      <View style={styles.row}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          placeholder="Address"
          style={styles.textInput}
          value={address}
          onEndEditing={validateAddress}
          onChangeText={(text) => {
            setAddress(text)
            setAddressError('')
        }}
        />
        {
           !! addressError && (<Text style={styles.errorLabel}>{addressError}</Text>)
        }
      </View>
      {/* City */}
      <View style={styles.row}>
        <Text style={styles.label}>City</Text>
        <TextInput
          placeholder="City"
          style={styles.textInput}
          value={city}
          onChangeText={setCity}
        />
      </View>
      {/* State */}
      <View style={styles.row}>
        <Picker selectedValue={state} onValueChange={setState}>
          {states.map(state => (
            <Picker.Item
              value={state}
              label={state}
              key={state}
            />
         ))} 
        </Picker>
         {/* Zip Code */}
        <View>
        <Text style={styles.label}>Zip Code</Text>
        <TextInput
          placeholder="Zip Code"
          style={styles.textInput}
          value={zipCode}
          onChangeText={setZipCode}
        />
      </View>
      </View>
      <Buttons text='Checkout' onButtonPress={checkoutHandler}/>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
