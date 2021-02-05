import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem key={id} bottomDivider>
      <Avatar 
      rounded
      source={{
        uri: 
        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
      }}/>
      <ListItem.Content>
        <ListItem.Title style={{fontWeight: "800"}}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )

}

export default CustomListItem;

const styles = StyleSheet.create({})