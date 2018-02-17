import React, { Component } from 'react';
import { Container, Grid, Row, Left, Input ,Label, Header, Body, Item, Title, Right, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
export default class Hotel extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='ios-menu-outline' style={{color: '#fff',fontSize:30}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{fontSize: 16}}>Restaurant Finder</Title>
          </Body>
          <Right>
              <Icon name="ios-funnel-outline" style={{color: '#fff',fontSize:30,marginRight: 10}}/>  
              <Icon name="ios-navigate-outline" style={{color: '#fff',fontSize:30,marginLeft: 10}}/>  
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row style={{alignItems:'center',justifyContent:'center'}}>
              <Item style={{alignItems:'center',justifyContent:'center'}} rounded style={{width: '80%',marginTop: 15}}>
                <Input style={{textAlign: 'center',fontSize: 15}} placeholder='Search for restaurant, local or cuisine'/>
              </Item>
            </Row>
          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="ios-globe-outline" />
              <Text>Discover</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="ios-restaurant-outline" />
              <Text>Find & Dine</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}