import { useNavigation } from "@react-navigation/native";
import { Box, ScrollView, Text, Heading, HStack, VStack } from "native-base";
import { View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header, LineChartcard, MiniCard } from "../components";
import { dumyData } from "../constants";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { COLORS } from './../constants/theme';
const Dashboard = () => {
  const { navigate } = useNavigation();
  const onRowClick = () => {
    navigate("Profile");
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "Mey",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getTime = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  return (
    <View style={styles.root}>
      <Header />
      <Box flex={1} p={4}>
        <Box backgroundColor={"white"} mb={4} p={4} pt={2} pb={2} borderRadius={5} shadow={2} >       
         <Heading size={"md"} mb={2} color={"lightBlue.800"}>
          Welcome, Dr. John Doe
        </Heading>
        <HStack alignItems={"center"} mb={4}>
          <Box flex={1} flexDirection={"row"} alignItems={"center"}>
            <Box flexDirection={"row"}>
              <Ionicons name={"ios-calendar-outline"} color="#444" size={17} />
              <Text ml={2} color={"gray.600"}>
                {months[new Date().getMonth()]} {new Date().getDate()},2022
              </Text>
            </Box>
            <Box flexDirection={"row"} ml={4} alignItems={"center"}>
              <Ionicons name={"ios-time-outline"} color="#444" size={17} />
              <Text ml={2} color={"gray.600"}>
                {getTime()}
              </Text>
            </Box>
          </Box>
          <Box flexDirection={"row"} ml={4} alignItems={"center"}>
            <Ionicons name={"ios-enter-outline"} color="#444" size={17} />
            <Text ml={2} color={"gray.600"}>
              On duty for 5 hours from 09:30am
            </Text>
          </Box>
        </HStack>
        </Box>

        <HStack pb={4} space={4} justifyContent="center" shadow={2}>
          <LineChartcard
            data={dumyData.chartData}
            width={responsiveWidth(45)}
          />
          <VStack space={4} justifyContent="center" flex={1.5}>
            <MiniCard
              iconName={"ios-people-outline"}
              bgIconName={"ios-pulse-outline"}
              title={"patients Registered"}
              count={188}
            />
            <MiniCard
              iconName={"ios-stopwatch-outline"}
              bgIconName={"ios-time-outline"}
              title={"Waiting for Doctor"}
              count={125}
            />
          </VStack>
        </HStack>
        <Heading size={"sm"} mb={2}>
          Your Next Patients
        </Heading>
        <Box rounded={"md"}  flex={1} borderRadius={5} shadow={2}>
          <VStack>
            <Box style={styles.tableHead}>
              {dumyData.tableData.head.map((d, i) => (
                <Box key={i} flex={i === 0 ? 1.5 : 1}>
                  {["string", "number"].includes(typeof d) ? (
                    <Text size={"sm"} color={"gray.900"}>
                      {d}
                    </Text>
                  ) : (
                    d
                  )}
                </Box>
              ))}
            </Box>
           <ScrollView height={400} style={{backgroundColor:"white",borderBottomLeftRadius:10,borderBottomRightRadius:10}} showsVerticalScrollIndicator={false}>
           {dumyData.tableData.rows.map((rowData, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.tableBody]}
                onPress={onRowClick}
              >
                <HStack flex={1}>
                  {rowData.map((d, j) => (
                    <Box key={j}  flex={j === 0 ? 1.5 : 1}>
                      {["string", "number"].includes(typeof d) ? (
                        <Text size={"sm"} color={"gray.900"}>
                          {d}
                        </Text>
                      ) : (
                        d
                      )}
                    </Box>
                  ))}
                </HStack>
              </TouchableOpacity>
            ))}
           </ScrollView>
          </VStack>
        </Box>
        <View style={styles.agendaCantainer}>
          <Heading size={"sm"} mb={2}></Heading>
          {/* <AgendaCalendar/> */}
        </View>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(229, 241, 247, 0.5)",
  },
  tableHead: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
    backgroundColor: "#BFDCEB",
    flexDirection: "row",
    height: 40,
    ...Platform.select({
      ios: {
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
      },
    }),
  },
  tableBody: {
    flexDirection: "row",
    padding: 10,
    height: 40,
  },
  tableText: {
    color: "#333",
  },
  agendaCantainer: {
    marginVertical: 20,
    overflow: "hidden",
  },
});

export default Dashboard;
