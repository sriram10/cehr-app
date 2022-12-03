import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import {AntDesign} from "@expo/vector-icons";
import { COLORS } from '../constants';
import { useEffect } from 'react';

  const data = [
    { label: 'Patient Continuation Form', value: 4 },
    { label: 'Patient Form', value: 5 },
    { label: 'Clinical Doctor white page', value: 0 },
    { label: 'CASA Record Form', value: 1 },
    { label: 'Clinical Assessment page', value: 2 },
    { label: 'DFRPatient', value:3 },
   
  ];
  const imagevalue = [require("../assets/images/forms/ClinicalDoctorwhitepage.jpg"),
                        require("../assets/images/forms/CASARecordForm.jpg"),
                        require("../assets/images/forms/ClinicalRefractiveAssessmentpage.jpg"),
                        require("../assets/images/forms/DFRPatientMedicalRecord.jpg"),
                        require("../assets/images/forms/PatientMedicalRecordContinuationForm.jpg"),
                        require("../assets/images/forms/PatientMedicalRecordForm.jpg") ]

  const DropDownPage = ({value,setValue}) => {
    
    // const [value, setValue] = useState(null);
   useEffect(()=>{
    console.log(value)
   },[value]);
    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        showsVerticalScrollIndicator={false}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Choose Form"
        searchPlaceholder="Search ..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        // renderLeftIcon={() => (
        //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
        containerStyle={styles.containerStyle}
      />
    );
  };

  export default DropDownPage;
  const styles = StyleSheet.create({
    dropdown: {
      margin: 20,
      height: 40,
      width:300,
      backgroundColor:"white",
      borderRadius:5,
      paddingHorizontal:10,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    //   backgroundColor:'red',
      borderRadius:10,

    },containerStyle:{
        // backgroundColor:'red',
        borderRadius:20,
    }
  });