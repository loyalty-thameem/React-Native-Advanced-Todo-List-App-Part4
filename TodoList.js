import * as React from 'react';
import {
  View,
  Text,
  Button,
  Icon,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import colors from '../Colors';
import TodoModal from './TodoModal'
//CLASS COMPONENT AND differential for FUNCTION COMPONENT
class TodoList extends React.Component {
  state = {
    showListVisible: false,
  }
  toggleListModal() {
    this.setState({
      showListVisible: !this.state.showListVisible,
    });
  }
  render() {
    //CLASS COMPONENT AND YOU CAN UNDERSTAND BELOW LINES
    const list = this.props.list; //This is new line for receiving props
    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}>
            <TodoModal list={list}
                       closeModal ={()=>this.toggleListModal()}
                       updateList={this.props.updateList}/>
        </Modal>
        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: list.color }]}
          onPress={() => this.toggleListModal()}>
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.count}>{remainingCount}</Text>
            <Text style={styles.subtitle}>Remaining</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
/*const TodoList=({ list })=>{
  const completedCount = list.todos.filter(todo=>todo.completed).length
  const remainingCount = list.todos.length-completedCount
  // const remainingCount = list.todos.filter(todo=>!todo.completed).length is WORKING FINE 

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>
    <View style={{alignItems:'center'}}>
    <Text style={styles.count}>{remainingCount}
    </Text>
    <Text style={styles.subtitle}>Remaining
    </Text>
    </View>
    <View style={{alignItems:'center'}}>
    <Text style={styles.count}>{completedCount}
    </Text>
    <Text style={styles.subtitle}>Completed
    </Text>
    </View>
    </View>
  );
} */
export default TodoList;
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
  },
  count: {
    fontSize: 48,
    fontWeight: '200',
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.white,
  },
});
