import React, { Component } from 'react';
import { Dimensions, KeyboardAvoidingView, Keyboard, } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Tabs from 'react-native-tabs';
import PopupDialog, { ScaleAnimation, DialogButton, DialogTitle } from 'react-native-popup-dialog';
import {
    Card,
    CardItem,
    Text,
    Container,
    Header,
    Body,
    Content,
    Left,
    Right,
    Icon,
    Button,
    Item,
    Input,
    Footer,
} from 'native-base';
import realm, { editNotePane, getNotePanes, insertNewNotePane, deleteNotePane } from '../database/allSchemas';

//import styles
import { styles } from '../styles/stylesheet';
import XpBar from './xpBar';

const scaleAnimation = new ScaleAnimation();

export default class NotePanes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
            currentPaneID: 0,
            currentPaneName: '',
            newNoteTitle: '',
        };
        realm.addListener('change', () => {
          this.reloadData();
        });
    }

  componentWillMount() {
    getNotePanes().then((data) => {
      this.setState({
        dataset: data,
      });
    }).then(() => {
    if (this.state.dataset.length === 0) {
      console.log('DATA LENGTH ============', this.state.dataset.length);
      const key = Math.floor(Date.now() / 1000);
      const newPane = {
        id: key,
        paneName: 'Urgent',
        notes: [],
      };
      console.log('NEW PANE =======', newPane);
      insertNewNotePane(newPane);
      this.setState({
        currentPaneID: key,
        currentPaneName: 'Urgent'
      });
      console.log('PANE ID=======', key);
    } else {
      this.setState({
        currentPaneID: this.state.dataset[0].id,
        currentPaneName: this.state.dataset[0].paneName
      });
      console.log('PANE ID=======', this.state.dataset[0].id);
    }
    });
  }

  changedPane = (index) => {
      this.setState({
          currentPaneID: this.state.dataset[index].id,
          currentPaneName: this.state.dataset[index].paneName
      });
      //console.log('PANE ID=======', this.state.dataset[index].id);
  }

  reloadData() {
    getNotePanes().then((data) => {
      this.setState({ dataset: data });
    });
  }
    renderItem({ item, index }) {
        return (
            <Card style={styles.cardStyle}>
                <Content>
                {
                    item.notes.map((noteItem, indexOfNote) => (
                      <CardItem
                        style={styles.cardItemStyle}
                        bordered
                        body
                        button
                        key={indexOfNote}
                        onPress={() => {
                          this.props.navigation.navigate('ExistingNoteScreen',
                          {
                            paneID: this.state.currentPaneID,
                            noteTitle: noteItem.title,
                            noteID: noteItem.id,
                            note: noteItem.note,
                          });
                        }}
                      >
                        <Body>
                          <Text>{noteItem.title}</Text>
                          <Text>{noteItem.dueDate.toString().substr(0, 25)}</Text>
                        </Body>
                      </CardItem>
                    ))
                }
                </Content>
            </Card>
        );
    }

    render() {
        return (
            <Container>
              <Header style={styles.headerStyle}>
                  <Left style={styles.positionStyle}>
                      <Button
                        transparent
                        onPress={() => { this.newPane.show(); }}
                      >
                          <Icon type='Ionicons' name='paper' style={styles.iconStyle} />
                      </Button>
                  </Left>
                  <Body style={styles.positionStyle}>
                      <Button
                        transparent
                        onPress={() => { this.paneMenu.show(); }}
                      >
                          <Text style={styles.textStyle}>{this.state.currentPaneName}</Text>
                      </Button>
                  </Body>
                  <Right style={styles.positionStyle}>
                      <Button
                        transparent
                        onPress={() => {
                          this.props.navigation.navigate('NewNoteScreen',
                          { paneID: this.state.currentPaneID });
                        }}
                      >
                          <Icon type='Feather' name='plus' style={styles.iconStyle} />
                      </Button>
                  </Right>
              </Header>
              <Carousel
                data={this.state.dataset}
                renderItem={this.renderItem.bind(this)}
                itemWidth={Dimensions.get('window').width}
                sliderWidth={Dimensions.get('window').width}
                onSnapToItem={this.changedPane}
                ref={(carousel) => { this.carousel = carousel; }}
              />
              <Footer>
                <XpBar />
              </Footer>
              {/* PopupDialog for PANE MENU*/}
              <PopupDialog
                width={0.9}
                ref={(paneMenu) => { this.paneMenu = paneMenu; }}
                dialogAnimation={scaleAnimation}
                dialogTitle={<DialogTitle title={`${this.state.currentPaneName} Menu`} />}
              >
                  <DialogButton
                    text='Delete'
                    onPress={() => {
                        deleteNotePane(this.state.currentPaneID);
                        this.carousel.snapToPrev();

                        this.paneMenu.dismiss();
                    }}
                    key='button-delete'
                  />
                  <DialogButton
                    text='Edit Name'
                    onPress={() => {
                        //get the new title.
                        //editNotePane goes here
                        this.paneMenu.dismiss();
                        this.editPane.show();
                    }}
                    key='button-edit'
                  />
                  <DialogButton
                    text='Details'
                    onPress={() => {
                        this.paneMenu.dismiss();
                    }}
                    key='button-details'
                  />
              </PopupDialog>
              {/* PopupDialog for NEW PANE*/}
              <PopupDialog
                dialogStyle={{ position: 'absolute', top: '25%' }}
                width={0.9}
                height={0.25}
                ref={(newPane) => { this.newPane = newPane; }}
                dialogAnimation={scaleAnimation}
                dialogTitle={<DialogTitle title='New Pane' />}
                onDismissed={() => {
                  Keyboard.dismiss();
                  this.setState({ newNoteTitle: '' });
                }}
              >
              <Item rounded>
                <Input
                  placeholder='Enter Pane Title'
                  onChangeText={newNoteTitle => this.setState({ newNoteTitle })}
                  value={this.state.newNoteTitle}
                />
              </Item>
                <DialogButton
                  text='Submit'
                  onPress={() => {
                    const key = Math.floor(Date.now() / 1000);
                    const newPane = {
                      id: key,
                      paneName: this.state.newNoteTitle,
                      notes: [],
                    };
                    console.log('NEW PANE =======', newPane);
                    insertNewNotePane(newPane);
                    Keyboard.dismiss();
                    this.newPane.dismiss();
                    this.setState({ newNoteTitle: '' });
                  }}
                  key='button-newNote'
                />
              </PopupDialog>

              {/* Popup dialog for EditPane ==========================*/}
              <PopupDialog
                dialogStyle={{ position: 'absolute', top: '30%' }}
                width={0.9}
                height={0.3}
                ref={(editPane) => { this.editPane = editPane; }}
                dialogAnimation={scaleAnimation}
                dialogTitle={<DialogTitle title='Change Title' />}
              >
                  <Item rounded>
                    <Input
                      placeholder='Enter New Title'
                      onChangeText={editPaneTitle => this.setState({ editPaneTitle })}
                      value={this.state.editPaneTitle}
                    />
                  </Item>
                  <Button
                    style={styles.buttonStyle}
                    onPress={() => {
                      console.log('EDIT PANE =======', this.state.editPaneTitle);
                      editNotePane(this.state.editPaneTitle, this.state.currentPaneID);
                      Keyboard.dismiss();
                      this.editPane.dismiss();
                      this.setState({ editNotePane: '' });
                    }}
                  >
                    <Text style={styles.textStyle}> Submit </Text>
                  </Button>
              </PopupDialog>
              {/* END OF LISZT CODE ======================================= */}
      </Container>
    );
  }
}
