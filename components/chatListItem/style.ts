import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
avatar:{
    height:60,
    width:60,
    marginRight: 10,
    borderRadius: 50
},
username:{
    fontWeight: "bold",
    fontSize: 16
},

lastMessage:{
    fontSize: 16,
    color: "grey"
},

time:{
    fontSize:16,
    color:"grey"
},

container:{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10
},
leftContainer:{
    flexDirection: "row",

},
midContainer:{
    justifyContent:"space-around"
}
})

export default styles;