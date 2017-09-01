/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import { Root } from "native-base";
// import { StackNavigator } from "react-navigation";
// import Main from './src/container/Main.js'

// const AppNavigator = StackNavigator(
//   {
//     Main: { screen: Main },
//   }
// );

// export default () =>
//   <Root>
//     <AppNavigator />
//   </Root>;

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, 
  FooterTab, Button, Left, Right, Body, 
  Icon, Text, Item, Input, Label} from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class nb extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Love Calculator</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item rounded>
            <Input placeholder='Enter name'/>
          </Item>

          <Item fixedLabel>
              <Label>With</Label>
            </Item>

          <Item rounded>
            <Input placeholder='Enter partner name'/>
          </Item>

          <Button full info iconLeft>
            <Icon name='heart' />
            <Text>Check Love Percentage</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Provide by Farifam</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

AppRegistry.registerComponent('nb', () => nb);
