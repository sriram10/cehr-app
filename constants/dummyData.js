import { Box} from "native-base";
import { ActionButton } from "../components";
export const chartData = [
  { value: 30 },
  { value: 20 },
  { value: 50 },
  { value: 80 },
  { value: 90 },
  { value: 76 },
];
// for the table data
const tableData = {
  head: [
    "Name",
    "Age",
    "Gender",
    "Diagnosis",
    "Waiting Time",
    <Box alignItems={"flex-end"}>Action</Box>,
  ],
  rows: [
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
    ["Wanda	Morrison", 34, "Female", "Cateract", "15:30mins", <ActionButton />],
  
  ],
};
// for the agenda dumy data
const agendaEvents = [
  {
    id: "1",
    title: "Nick-Diabetic Retinopathy",
    start: "2022-11-21T08:00:05.313Z",
    end: "2022-11-21T10:00:05.313Z",
    color: "rgba(173, 216, 230, .7)",
  },
  {
    id: "2",
    title: "Dani-Glaucoma",
    start: "2022-11-21T11:00:05.313Z",
    end: "2022-11-21T13:00:05.313Z",
    color: "rgba(0, 115, 174, .7)",
  },
  {
    id: "3",
    title: "Nick-Diabetic Retinopathy",
    start: "2022-11-22T09:00:05.313Z",
    end: "2022-11-22T11:00:05.313Z",
    color: "rgba(173, 216, 230, .7)",
  },
  {
    id: "4",
    title: "Dani-Glaucoma",
    start: "2022-11-22T13:00:05.313Z",
    end: "2022-11-22T14:00:05.313Z",
    color: "rgba(0, 115, 174, .7)",
  },
  {
    id: "5",
    title: "Nick-Diabetic Retinopathy",
    start: "2022-11-23T09:00:05.313Z",
    end: "2022-11-23T12:00:05.313Z",
    color: "rgba(173, 216, 230, .7)",
  },
  {
    id: "6",
    title: "Dani-Glaucoma",
    start: "2022-11-24T08:00:05.313Z",
    end: "2022-11-24T14:00:05.313Z",
    color: "rgba(0, 115, 174, .7)",
  },
  {
    id: "7",
    title: "Nick-Diabetic Retinopathy",
    start: "2022-11-25T10:00:05.313Z",
    end: "2022-11-25T12:00:05.313Z",
    color: "rgba(173, 216, 230, .7)",
  },
  {
    id: "8",
    title: "Dani-Glaucoma",
    start: "2022-11-26T11:00:05.313Z",
    end: "2022-11-26T13:00:05.313Z",
    color: "rgba(0, 115, 174, .7)",
  },
  {
    id: "9",
    title: "Nick-Diabetic Retinopathy",
    start: "2022-11-26T09:00:05.313Z",
    end: "2022-11-26T13:00:05.313Z",
    color: "rgba(173, 216, 230, .7)",
  },
  {
    id: "10",
    title: "Dani-Glaucoma",
    start: "2022-11-27T11:00:05.313Z",
    end: "2022-11-27T14:00:05.313Z",
    color: "rgba(0, 115, 174, .7)",
  },
  {
    id: "11",
    title: "Jhonkenny-Amblyopia",
    start: "2022-11-28T08:00:05.313Z",
    end: "2022-11-28T10:00:05.313Z",
    color: "rgba(0, 115, 174, .7)",
  },
  {
    id: "12",
    title: "jack-Strabismus",
    start: "2022-11-28T11:00:05.313Z",
    end: "2022-11-28T14:00:05.313Z",
    color: "rgba(173, 216, 230, .7)",
  },
];
const imagevaluearr= [require("../assets/images/forms/ClinicalDoctorwhitepage.jpg"),
  require("../assets/images/forms/CASARecordForm.jpg"),
  require("../assets/images/forms/ClinicalRefractiveAssessmentpage.jpg"),
  require("../assets/images/forms/DFRPatientMedicalRecord.jpg"),
  require("../assets/images/forms/PatientMedicalRecordContinuationForm.jpg"),
  require("../assets/images/forms/PatientMedicalRecordForm.jpg") ]

  const dummyimagevaluearr= [require("../assets/images/forms/ClinicalDoctorwhitepage.jpg"),
  require("../assets/images/forms/CASARecordForm.jpg"),
  require("../assets/images/forms/ClinicalRefractiveAssessmentpage.jpg"),
  require("../assets/images/forms/DFRPatientMedicalRecord.jpg"),
  require("../assets/images/forms/PatientMedicalRecordContinuationForm.jpg"),
  require("../assets/images/forms/PatientMedicalRecordForm.jpg"),
  require("../assets/images/forms/ClinicalDoctorwhitepage.jpg"),
  require("../assets/images/forms/CASARecordForm.jpg"),
  require("../assets/images/forms/ClinicalRefractiveAssessmentpage.jpg"),
  require("../assets/images/forms/DFRPatientMedicalRecord.jpg"),
  require("../assets/images/forms/PatientMedicalRecordContinuationForm.jpg"),
  require("../assets/images/forms/PatientMedicalRecordForm.jpg") ]
  
const dumyData = { chartData, tableData, agendaEvents,imagevaluearr,dummyimagevaluearr};
export default dumyData;
