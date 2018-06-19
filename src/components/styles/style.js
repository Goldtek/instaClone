import { StyleSheet, Dimensions } from "react-native";
import colors, { darkBlack, lightBlack } from "./colors";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  divider: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: "#e9e9e9",
  },
  header: {
    borderBottomWidth: 3,
    borderBottomColor: "#e9e9e9",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 45,
  },
  postHeader: {
    height: 40,
    flexDirection:'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  postLeftHeader: {
    flexDirection: 'row',
     alignItems: 'flex-end', 
     justifyContent: 'space-between',
  },

  postContent: {
    
  },

  postImage: {
    width,
    height: width,
    resizeMode: 'contain',
  },

  postFooter: {
    paddingVertical: 10,

  },
  groupIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  creator: {
    height: 30,
    width: 30,
    borderRadius: 30
  }
});