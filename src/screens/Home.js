import {Icon} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';

const horizontalfaltlist = [
  {
    id: '1',
    title: 'JK 850 Beats',
    image: require('../images/boat_cream.png'),
    bg_color: '#B89962',
    price: '$325',
  },
  {
    id: '2',
    title: '80 Elite 201',
    image: require('../images/boat_black.png'),
    bg_color: '#3F4855',
    price: '$200',
  },
  {
    id: '3',
    title: 'BM 050 Beats',
    image: require('../images/mivi_black.png'),
    bg_color: '#A7DACB',
    price: '$320',
  },
  {
    id: '4',
    title: 'Blaze L23',
    image: require('../images/mivi_blue.png'),
    bg_color: '#A84F50',
    price: '$345',
  },
];

const verticalFlatList = [
  {
    id: '1',
    title: 'BM 050 Beats',
    image: require('../images/mivi_black.png'),
    bg_color: '#A7DACB',
    price: '$320',
  },
  {
    id: '2',
    title: 'Blaze L23',
    image: require('../images/mivi_blue.png'),
    bg_color: '#A84F50',
    price: '$345',
  },
  {
    id: '3',
    title: 'JK 850 Beats',
    image: require('../images/jbl_black.webp'),
    bg_color: '#B89962',
    price: '$325',
  },
  {
    id: '4',
    title: '80 Elite 201',
    image: require('../images/boat_black.png'),
    bg_color: '#3F4855',
    price: '$200',
  },
];

export default function Home({navigation}) {
  const horizontalRenderItem = ({item}) => {
    return (
      <View style={styles.horizontalViewContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Details', {details : item})}>
        <View
          style={{
            height: 180,
            width: '100%',
            backgroundColor: item.bg_color,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={item.image} style={{height: 140, width: 120}} />
        </View>
        </TouchableOpacity>
        <View style={{left: 10, marginVertical: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
          <View style={{flexDirection: 'row', marginVertical: 8}}>
            <Icon name="star" style={{fontSize: 20, color: '#FFD700'}} />
            <Icon name="star" style={{fontSize: 20, color: '#FFD700'}} />
            <Icon name="star" style={{fontSize: 20, color: '#FFD700'}} />
            <Icon name="star" style={{fontSize: 20, color: '#FFD700'}} />
            <Icon
              name="star-outline"
              style={{fontSize: 20, color: '#FFD700'}}
            />
          </View>

          <Text style={{fontSize: 16}}>{item.price}</Text>
        </View>
        <View
          style={[
            styles.drawerMenu,
            {
              height: 40,
              width: 40,
              position: 'absolute',
              bottom: 40,
              right: 10,
            },
          ]}>
          <Icon name="heart" style={{color: '#E83033'}} />
        </View>
      </View>
    );
  };

  const verticalRenderItem = ({item}) => {
    return (
      <View style={styles.verticalViewContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Details', {details : item})}>
        <View
          style={{
            height: 130,
            width: 130,
            borderRadius: 14,
            backgroundColor: item.bg_color,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={item.image} style={{height: 100, width: 90}} />
        </View>
        </TouchableOpacity>
        <View style={{justifyContent:'center', marginHorizontal:10}}>
          <Text style={{fontSize:20, fontWeight:'bold'}}>{item.title}</Text>
          <View style={{flexDirection: 'row', marginVertical: 8}}>
            <Icon name="star" style={{fontSize: 22, color: '#FFD700'}} />
            <Icon name="star" style={{fontSize: 22, color: '#FFD700'}} />
            <Icon name="star" style={{fontSize: 22, color: '#FFD700'}} />
            <Icon name="star" style={{fontSize: 22, color: '#FFD700'}} />
            <Icon
              name="star-outline"
              style={{fontSize: 20, color: '#FFD700'}}
            />
          </View>
          <Text style={{fontSize: 22, fontWeight:'bold'}}>{item.price}</Text>
        </View>
        <Icon name ="heart" style={{position:'absolute', right: 10, bottom: 10, color: '#E83033'}}/>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.drawerMenu}>
          <Icon name="menu-outline" />
        </View>
        <View style={styles.drawerMenu}>
          <Icon name="notifications-outline" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 30,
          marginVertical: 20,
        }}>
        <View style={styles.serachBar}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="search-outline" style={{color: '#DCDCDC'}} />
            <TextInput placeholder="Serach Product" />
          </View>
        </View>
        <View
          style={[
            styles.serachBar,
            {width: '18%', marginHorizontal: 18, alignItems: 'center'},
          ]}>
          <Icon name="filter-outline" />
        </View>
      </View>
      <View style={{paddingHorizontal: 30}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Best Selling</Text>
      </View>
      <View style={{paddingHorizontal: 10, marginVertical: 20}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={horizontalfaltlist}
          renderItem={horizontalRenderItem}
        />
      </View>
      <View style={{paddingHorizontal: 30, marginBottom: 50}}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Popular</Text>
        <FlatList
          data={verticalFlatList}
          showsVerticalScrollIndicator={false}
          renderItem={verticalRenderItem}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F8F8F8',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  drawerMenu: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  serachBar: {
    height: 50,
    width: '75%',
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  horizontalViewContainer: {
    height: 280,
    width: 190,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginRight: 10,
    borderRadius: 10,
  },
  verticalViewContainer: {
    height: 130,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginTop: 15,
    borderRadius: 14,
    flexDirection:'row'
  },
});
