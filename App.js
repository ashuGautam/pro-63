import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';
import {Header } from 'react-native-elements';


export default class App extends React.Component {

  constructor(){
    super();
    this.state={
      text:"",
    }}

  render(){
   return (
    <View style={styles.container}>

    <Header 
      backgroundColor={'blue'}
      centerComponent={{text: 'monkey chunky',style:{fontSize:20,color:'white'}}}/>

    <Text Input
     style={styles.inputBox}
     onChangeText={text => {
     this.setState({
     text: text,
     isSearchPressed: false,
     word : "Loading...", 
     lexicalCategory :'',
     examples: [],
     defination :""
   });
 }}
  value={this.state.text)/>

  <TouchableOpacity
style={styles.searchButton) onPress={() => {
this.setState({ isSearchPressed: true });
this.getWord (this.state.text)
}}>

getword=(word)=>{
var searchkeyword=word.toLowerCase()
var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword ".json"
//console.log(ur1)
return fetch(url)
.then((data)=>{
if(data.status===200)
{
return data.json()
}
else
{
return null
}
})

.then((response) =>{
 //console.log(response)
var responseObject = response
//van word = responseObject.word //var lexicalCategory = responseObject.results[0].lexicalEntries [0].lexicalCategory.text
if(responseObject)
{
var wordData = responseObject.definitions[0]
//console.log(responseObject.definitions[0])
var definition=wordData.description
var lexicalCategory=wordData.wordtype
//console.log(lexicalCategory)
this.setState({
"word": this.state.text,
"definition" :definition,
"lexicalCategory": lexicalCategory
})
}
else
{
this.setState({
"word": this.state.text,
 "definition":"Not Found",
   })
}
})


      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
