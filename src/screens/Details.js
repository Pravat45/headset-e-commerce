import {Icon} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default function Details({route, navigation}) {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View
        style={[
          styles.imageHeaderView,
          {backgroundColor: route.params.details.bg_color},
        ]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.backBtnView}>
            <Icon
              name="arrow-back-outline"
              style={{color: '#fff', fontSize: 20}}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.backBtnView}>
            <Icon
              name="notifications-outline"
              style={{color: '#fff', fontSize: 20}}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={route.params.details.image}
            style={{width: 260, height: 300}}
          />
        </View>
  
      </View>
      <View style={{height: '50%', backgroundColor: '#482E55'}}>
        <View
          style={{
            height: 350,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            paddingHorizontal: 30,
            paddingTop: 30,
          }}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              {route.params.details.title}
            </Text>
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
          </View>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 30,
              top: 25,
            }}>
            <View style={styles.optionView}>
              <Icon name="share-social-outline" style={{fontSize: 22}} />
            </View>
            <View style={styles.optionView}>
              <Icon name="heart-outline" style={{fontSize: 22}} />
            </View>
          </View>
          <Text style={{fontSize: 18, marginVertical: 10}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 30,
            justifyContent: 'space-between',
            paddingTop: 25,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
            {route.params.details.price}
          </Text>
          <View
            style={{
              height: 50,
              width: 120,
              backgroundColor: '#D16Eff',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button title="Add to Cart" color="#fff"/>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imageHeaderView: {
    height: '50%',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  backBtnView: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#414956',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});
