import * as React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,KeyboardAvoidingView,TextInput
} from 'react-native';
import colors from '../Colors';
import {AntDesign} from '@expo/vector-icons';  
import tempData from '../tempData'  
class AddListModal extends React.Component{
  backgroundColors=[
    '#5CD859','#24A6D9','#5995BD','#8022D9','#D85963','#D159D8','#D88559'
  ];
  state={
    name:'',
    color:this.backgroundColors[0]
  };
  createTodo=()=>{
    const{name,color}=this.state;
    const list ={name,color};
    this.props.addList(list);
    this.setState({
      name:''
    });
    
    this.props.closeModal();
  }
  renderColors(){
    return this.backgroundColors.map(color=>{
      return(
    <TouchableOpacity 
    key={color}
     style={[styles.colorSelector,{backgroundColor:color}]} 
      onPress={()=>this.setState({color})} />         
      )
    })
  }
  render(){
  return (
   <KeyboardAvoidingView style={styles.container} behavior='padding'>
    <TouchableOpacity style={{position:'absolute',top:64,right:32}} onPress={this.props.closeModal}>
         <AntDesign name='close' size={24} color={colors.black} />
    </TouchableOpacity>
 <View style={{alignSelf:'stretch',marginHorizontal:32}}>
          <Text style={styles.title}>Create Todo List
          </Text>
          <TextInput style={styles.input} placeholder="List Name?" onChangeText={text=>this.setState({name:text})}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:12,}}>{this.renderColors()}
          </View>
           <TouchableOpacity style={[styles.create,{backgroundColor:this.state.color}]} onPress={this.createTodo}>
         <Text style={{color:colors.white,fontWeight:'600'}}>Create!</Text>
    </TouchableOpacity>
        </View>
 </KeyboardAvoidingView>

  );
} 
}
export default AddListModal
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:28,
    fontWeight:'800',
    color:colors.black,
    alignSelf:'center',
    marginBottom:16,
  },
  input:{
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:colors.blue,
    borderRadius:6,
    height:50,
    marginTop:8,
    paddingHorizontal:16,
    fontSize:18,
  },
  create:{
    marginTop:24,
    height:50,
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',
  },
  colorSelector:{
    width:30,
    height:30,
    borderRadius:4,
  }
});
