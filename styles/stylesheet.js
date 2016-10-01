import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    alignItems: 'flex-start'
  },
  texts: {
    paddingLeft: 10,
    justifyContent: 'center'
  },
  profilebadge: {
    flexDirection: 'row',
    height: 60,
    alignSelf: 'stretch',
    marginBottom: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  h4: {
    fontSize: 16,
    color: '#828282'
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  item: {
    backgroundColor: 'blue',
    margin: 3,
    width: 100,
    height: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 26,
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 40
  },
  subtitle: {
    textAlign: 'left',
    paddingLeft: 10,
    color: '#595959'
  },
  menubutton: {
    height: 50,
    width: 50,
    backgroundColor: 'orange'
  },
  headercontainer: {
    height: 90, 
    flexDirection: 'row'
  },
    detailscontainer: {
    height: 170, 
    flexDirection: 'row'
  },
});