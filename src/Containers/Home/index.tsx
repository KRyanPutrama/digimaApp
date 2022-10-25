import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { DELETE_USER_TOKEN } from '@/GlobalStates/auth';
import { getJourney, GetJourneyRes_Journey } from '@/GlobalStates/journey';
import { RootReducerState } from '@/GlobalStates/reducer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const IndexOfHomeContainer = () => {
  const { journeyData, journeyIsSuccess, journeyIsLoading, authData } =
    useSelector(
      ({ journey, auth }: RootReducerState) => ({
        journeyData: journey.journeyData,
        journeyIsSuccess: journey.journeyState === 'success',
        journeyIsLoading: journey.journeyState === 'loading',
        authData: auth.authData,
      }),
      shallowEqual,
    );

  const date = new Date();
  const hours = date.getHours();

  const dispatch = useDispatch();

  const renderItems = useCallback(
    ({ item }: { item: GetJourneyRes_Journey }) => (
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image
            source={{
              uri: item.thumbnail,
            }}
            resizeMode="cover"
            style={styles.cardImageStyle}
          />
        </View>
        <View style={styles.cardItemSeparator} />
        <View>
          <Text style={styles.cardItemText}>{`#Post: ${item.id}`}</Text>
          <Text style={styles.cardItemText}>{`#Leaderboard: ${
            item.is_available ? 'yes' : 'no'
          }`}</Text>
          <Text
            style={
              styles.cardItemText
            }>{`Description: ${item.description}`}</Text>
          <Text style={styles.cardItemText}>{`Available: ${
            item.is_available ? 'yes' : 'no'
          }`}</Text>
          <Text style={styles.cardItemText}>{`Point: ${item.point}`}</Text>
        </View>
      </View>
    ),
    [],
  );

  useEffect(() => {
    // @ts-ignore
    dispatch(getJourney());
  }, []);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>{`Good ${
          hours >= 5 && hours < 11
            ? 'Morning'
            : hours >= 11 && hours < 17
            ? 'Afternoon'
            : 'Evening'
        } ${authData?.firstname}`}</Text>
        <TouchableOpacity onPress={() => dispatch({ type: DELETE_USER_TOKEN })}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </View>
      {journeyIsLoading && (
        <ActivityIndicator
          size={'large'}
          color={'#c09b44'}
          style={{ marginTop: responsiveHeight(10) }}
        />
      )}
      {journeyIsSuccess && (
        <FlatList
          data={journeyData?.journeys || []}
          renderItem={renderItems}
          contentContainerStyle={styles.flatlistStyle}
        />
      )}
    </View>
  );
};

export default IndexOfHomeContainer;

const styles = StyleSheet.create({
  cardContainer: {
    width: responsiveWidth(85),
    backgroundColor: '#e5d6b2',
    padding: responsiveWidth(5),
  },
  cardImageContainer: {
    width: responsiveWidth(76),
    height: responsiveHeight(30),
    alignSelf: 'center',
  },
  cardImageStyle: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderRadius: responsiveWidth(10),
  },
  cardItemSeparator: {
    width: responsiveWidth(75),
    borderWidth: 1,
    borderColor: '#c09b44',
    marginVertical: responsiveHeight(3),
  },
  cardItemText: {
    fontSize: responsiveFontSize(2),
    color: '#c09b44',
    fontWeight: 'bold',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#FAF7F0',
  },
  headerContainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    flexDirection: 'row',
    borderBottomLeftRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
    justifyContent: 'space-between',
    backgroundColor: '#e5d6b2',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
  },
  greetingText: {
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
    color: '#c09b44',
  },
  flatlistStyle: {
    padding: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
