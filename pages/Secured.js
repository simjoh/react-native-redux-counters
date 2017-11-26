import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button,FlatList } from 'react-native';
import { addCounter } from '../redux/actions/math';
import { removeCounter } from '../redux/actions/math';
import { incrementCounter } from '../redux/actions/math';
import { decramentCounter } from '../redux/actions/math';


const Counter2 = ({value,index,mathAdd,mathSubtract,removeCounter}) => {
  return(
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <Button onPress={mathAdd} title="+"/>
      <Text>{value}</Text>
      <Button onPress={mathSubtract} title="-"/>
      <Button onPress={removeCounter} title="RemoveCounter"/>
    </View>)
} 
class Secured extends Component {
  
  addCounter() {
    this.props.onAddCounter(this.props.list);
  }
  removeCounter(index) {
    this.props.onRemoveCounter(this.props.list,index);
  }
  incramentCounter(index) {
    this.props.onIncramentCounter(this.props.list,index);
  }
  decramentCounter(index) {
    this.props.onDecramentCounter(this.props.list,index);
  }   

  render() {
  const listItems = this.props.list.map((number,idx) =>
    <Counter2 key={idx} 
              value={number}                 
              mathAdd      = {(index)=>this.incramentCounter(idx)}
              mathSubtract = {(index)=>this.decramentCounter(idx)}
              removeCounter = {(list,index)=>this.removeCounter(idx)} />
  );
  return (
    <ScrollView style={{padding: 20}}>

      <View style={{margin: 20}}/>
      <Button onPress={() => this.addCounter()} title="AddCounter"/>
      {listItems}
    </ScrollView>

  );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.math.list
  };
}
 
const mapDispatchToProps = (dispatch) => {
  return {
      onAddCounter: (list) => { dispatch(addCounter(list)); },
      onRemoveCounter: (list,index) => { dispatch(removeCounter(list,index)); },
      onIncramentCounter: (list,index) => { dispatch(incrementCounter(list,index)); },
      onDecramentCounter: (list,index) => { dispatch(decramentCounter(list,index)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secured);