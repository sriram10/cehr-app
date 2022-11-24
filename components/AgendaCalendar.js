import {TimelineCalendar } from '@howljs/calendar-kit';
import React, { useState } from 'react';
import {SafeAreaView,StatusBar,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
import "react-native-haptic-feedback"
import { SIZE,dumyData,COLORS} from '../constants';

const AgendaCalendar = ({initialDate}) => {
  // popup states [show,particular event obj] 
  const [popUpShowBool,setPopUpShowBool] = useState(false);
  const [popTitle,setPopTitle] = useState();
  // event making states  
  const [events, setEvents] = useState(dumyData.agendaEvents);
  const [selectedEvent, setSelectedEvent] = useState();

  const _onLongPressEvent = (event) => {
    setSelectedEvent(event);
  };

  const _onPressCancel = () => {
    setSelectedEvent(undefined);
  };

  const _onPressSubmit = () => {
    setEvents((prevEvents) =>
      prevEvents.map((ev) => {
        if (ev.id === selectedEvent?.id) {
          return { ...ev, ...selectedEvent };
        }
        return ev;
      })
    );
    setSelectedEvent(undefined);
  };

  const _renderEditFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.outLineButton} onPress={_onPressCancel}>
          <Text style={[styles.btnText,{color:COLORS.secondaryColor}]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={_onPressSubmit}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _eventonpress = (e)=>{
    setPopUpShowBool(true);
    setPopTitle(e); 
    // here is some bugs 🐛 are there 
    // will be debug later
    setTimeout(() => {
    setPopUpShowBool(false);
   }, 3000);}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
     <View style={{flex:1,borderRadius:15,overflow:'hidden'}}>
     <TimelineCalendar
        onPressEvent={(event)=>{_eventonpress(event)}}
        viewMode="week"
        initialDate={initialDate}
        events={events}
        onLongPressEvent={_onLongPressEvent}
        selectedEvent={selectedEvent}
        onEndDragSelectedEvent={setSelectedEvent}
        eventAnimatedDuration={400}
        theme={{
          dragHourColor: 'red',
          dragHourBorderColor: '#001253',
          dragHourBackgroundColor: 'red',
          editIndicatorColor: '#FFF',
          todayName:{color:COLORS.secondaryColor},
          todayNumber:{color:"white"},
          todayNumberContainer:{backgroundColor:COLORS.secondaryColor},
          nowIndicatorColor:COLORS.secondaryColor
        }}
      />
     </View>
      {/* save btn container when event edit enabled */}
      {!!selectedEvent && _renderEditFooter()}
      {/* for show the description of a particular event */}
     <PopUp showbool={popUpShowBool} title={popTitle?.title} bgcolor={popTitle?.color}/>
    </SafeAreaView>
  );
};

export default AgendaCalendar;

const PopUp = ({title,showbool,bgcolor})=>{
    if(showbool){
        return(
      <View style={[styles.eventPop,{backgroundColor:bgcolor}]}>
            <Text style={{color:'white',}}>{title}</Text>
            <Text style={{color:'white',textAlign:'center',}}>[ get description from the title ]</Text>
      </View>
        )
    }else{
        return null;
    }
}

const styles = StyleSheet.create({
  container: { 
    height: 700, 
    backgroundColor: '#FFF' },
  footer: {
    backgroundColor: '#FFF',
    height: 85,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width:120,
    height: 45,
    paddingHorizontal: 24,
    alignItems:'center',
    backgroundColor: COLORS.secondaryColor,
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  outLineButton:{
    width:120,
    height: 45,
    borderWidth:2,
    borderColor:COLORS.secondaryColor,
    paddingHorizontal: 24,
    borderRadius:5,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  eventPop:{
   position:'absolute',
   bottom:70,
   left:SIZE.width/2 - 250/2,
   width:250,
   height:50,
   borderRadius:10,
   backgroundColor:COLORS.primarColor,
   alignItems:'center',
   justifyContent:'center'
  },
  btnText: { fontSize: 16, color: '#FFF', fontWeight: 'bold' },
});