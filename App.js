import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const RedditProfile = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/368570640_551189520434107_1452645922396059646_n.jpg?stp=dst-jpg_p403x403&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeH6lOir6e8RuaY8C1PATJCIitRLhrCe-eGK1EuGsJ754Qc3G_sTtUGRYJ49LlmlzaT1PJosyCcb54Xr9MvwH6yL&_nc_ohc=1bwwKHIS5jYAX__oZpc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRL3e1R3QEXc0im_3WnwUzir-ZLRChr01BUd_Lkffe9Ag&oe=65225262', // Replace with your cover photo URL
          }}
          style={styles.coverPhoto}
        />
        <View style={styles.coverOverlay} />
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={{
            uri: 'https://styles.redditmedia.com/t5_39vqq7/styles/profileIcon_d2ec3pksuwmb1.jpg?width=256&height=256&crop=256:256,smart&s=5216965b9e872f52e41d0dbb27087db72cad17ac', // Replace with your profile photo URL
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            hoveredButton === 'Edit' && styles.buttonHighlight,
          ]}
          onMouseEnter={() => handleButtonHover('Edit')}
          onMouseLeave={handleButtonLeave}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.username}>InspectionStriking10</Text>
        <Text style={styles.followers}>0 followers</Text>
        <Text style={styles.karma}>u/InspectionStriking10.1 karma. Oct 18, 2020</Text>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            hoveredButton === 'AddSocialLink' && styles.buttonHighlight,
          ]}
          onMouseEnter={() => handleButtonHover('AddSocialLink')}
          onMouseLeave={handleButtonLeave}
        >
          <Text style={styles.buttonText}>+ Add social link</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>Posts                  Comments               About</Text>
      </View>
      
      <View style={styles.picturePostContainer}>
        <Text style={styles.picturePostCaption}>Avatar Aang and Appa </Text>
        <Image
          source={{
            uri: 'https://scontent-sin6-4.xx.fbcdn.net/v/t1.15752-9/373473791_850259382910887_2770012567779146422_n.jpg?stp=dst-jpg_s480x480&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeEoDwqrkcKdGQ98CBB6hm9Zp2RaL3Y7j0OnZFovdjuPQ8b_VbpwIllB-yxaCYOKBbeg89vHQhFHJUIzkKnD81Pq&_nc_ohc=tSgz1MufejAAX9h1aYk&_nc_ht=scontent-sin6-4.xx&oh=03_AdThgUFCM5OdXODY8PDHF0aboLEyilnW-VMwnCgcc8z7Hg&oe=65226422', // Replace with your picture post URL
          }}
          style={styles.picturePostImage}
        />
        
       <View style={styles.picturePostIcons}>
  <TouchableOpacity>
   
    <View style={styles.iconWithText}>
      <Icon name="arrow-up" size={20} color="black" />
      <Text style={styles.iconText}>1{'\u00A0'}</Text> 
    </View>
  </TouchableOpacity>
  <TouchableOpacity>
   
    <Icon name="arrow-down" size={20} color="black" />
    <Text style={styles.iconText}></Text> 
  </TouchableOpacity>
  <TouchableOpacity>
   
    <View style={styles.iconWithText}>
      <Icon name="comment" size={20} color="black" />
      <Text style={styles.iconText}>Comment</Text>
    </View>
  </TouchableOpacity>
</View>


<Text style={styles.picturePostText}>Shared in 1 community</Text>
      </View>
      
      
      <View style={styles.triangularButton}>
        <TouchableOpacity>
          <Icon name="home" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="users" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="plus" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2040',
  },
  header: {
    alignItems: 'flex-start',
    paddingBottom: 20,
  },
  coverPhoto: {
    width: '100%',
    height: 100,
  },
  coverOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  profileImageContainer: {
    alignItems: 'flex-start',
    marginTop: -60,
    paddingLeft: 20,
    paddingRight: 80, 
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 58,
  },
  buttonContainer: {
    backgroundColor: 'black',
    marginTop: 10,
    width: 120, 
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 60,
  },
  buttonHighlight: {
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  username: {
    color: '#000',
    fontSize: 20,
    marginTop: 10,
  },
  followers: {
    color: '#000',
    fontSize: 14,
    marginTop: 5,
  },
  karma: {
    color: '#000',
    fontSize: 12,
    marginTop: 5,
  },
  rectangle: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 0,
    marginTop: 20,
    alignItems: 'center',
  },
  rectangleText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  picturePostContainer: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  picturePostImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  picturePostText: {
    marginTop: 10,
    fontSize: 11,
    fontWeight: 'bold',
  },
  picturePostIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 10,
  },

  iconT: {
    marginBottom: 10,
  },
  picturePostCaption: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Styles for the triangular button container
  triangularButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray', 
    paddingHorizontal: 30,
  },
});

export default RedditProfile;
