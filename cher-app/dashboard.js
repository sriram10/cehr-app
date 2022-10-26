import { useNavigation } from "@react-navigation/native";
import { Box, ScrollView, Text, Heading, HStack, VStack } from "native-base";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { responsiveWidth } from "react-native-responsive-dimensions";
import { LineChart } from "react-native-gifted-charts";
import Header from "./header";

const chartData = [
  {value:30},
  {value:20},
  {value:50},
  {value:80},
  {value:90},
  {value:76},
];

const ActionButton = () => {
  return (
    <Box flex={1} alignItems={'flex-end'}>
      <Ionicons name='ios-chevron-forward' size={16} color='#888' />
    </Box>
  )
}

const tableData = {
  head: ['Name', 'Age', 'Gender', 'Diagnosis', 'Waiting Time', <Box alignItems={'flex-end'}>Action</Box>],
  rows: [
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
    ['Wanda	Morrison', 34, 'Female', 'Cateract', '15:30mins', <ActionButton />],
  ]
}

const Dashboard = () => {
  const { navigate } = useNavigation()

  const onRowClick = () => {
    navigate('Profile')
  }

  const getTime = () => {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  return (
    <View style={styles.root}>
      <Header />

      <ScrollView flex={1} p={4}>

        <Heading size={'md'} mb={2}>Welcome, Dr. John Doe</Heading>
        <HStack alignItems={'center'} mb={4}>
          <Box flex={1} flexDirection={'row'} alignItems={'center'}>
            <Box flexDirection={'row'}>
              <Ionicons
                name={'ios-calendar-outline'}
                color='#444'
                size={17}
              />
              <Text ml={2} color={'gray.600'}>October {new Date().getDate()},2022</Text>
            </Box>
            <Box flexDirection={'row'} ml={4} alignItems={'center'}>
              <Ionicons
                name={'ios-time-outline'}
                color='#444'
                size={17}
              />
              <Text ml={2} color={'gray.600'}>{getTime()}</Text>
            </Box>
          </Box>
          <Box flexDirection={'row'} ml={4} alignItems={'center'}>
            <Ionicons
              name={'ios-enter-outline'}
              color='#444'
              size={17}
            />
            <Text ml={2} color={'gray.600'}>On duty for 5 hours from 09:30am</Text>
          </Box>
        </HStack>

        <HStack pb={4} space={4} justifyContent="center">
          <Box flex={2} p={4} rounded={'md'} bg='white'>
            <LineChart
              data={chartData}
              color={'#0073AE'}
              dataPointsColor={'#0073AE'}
              startFillColor={'#80B9D6'}
              endFillColor={'#E5F1F7'}
              xAxisColor={'#0073AE'}
              yAxisColor={'#0073AE'}
              yAxisLabelWidth={20}
              curved
              areaChart
              isAnimated
              adjustToWidth
              width={responsiveWidth(45)}
              yAxisTextStyle={{
                fontSize: 10,
                color: '#4096C2'
              }}
              />
          </Box>
          <VStack space={4} justifyContent="center" flex={1.5}>
            <Box flex={1} p={4} rounded={'md'} bg='white' overflow={'hidden'} justifyContent='center'>
              <View style={{ position: 'absolute', right: 0, bottom: -15 }}>
                <Ionicons
                  name="ios-pulse-outline"
                  color={'#e5f1f7'}
                  size={100}
                />
              </View>
              <Box>
                <Ionicons
                  name="ios-people-outline"
                  color={'#939598'}
                  size={20}
                />
                <Text color={'gray.600'}>Patients Registered</Text>
                <Heading mt={2} color={'blue.700'}>188</Heading>
              </Box>
            </Box>
            <Box flex={1} p={4} rounded={'md'} bg='white' overflow={'hidden'} justifyContent='center'>
              <View style={{ position: 'absolute', right: -30, bottom: -30 }}>
                <Ionicons
                  name="ios-time-outline"
                  color={'#e5f1f7'}
                  size={140}
                />
              </View>
              <Box>
                <Ionicons
                  name="ios-stopwatch-outline"
                  color={'#939598'}
                  size={20}
                />
                <Text color={'gray.600'}>Waiting for Doctor</Text>
                <Heading mt={2} color={'blue.700'}>124</Heading>
              </Box>
            </Box>
          </VStack>
        </HStack>

        <Heading size={'sm'} mb={2}>Your Next Patients</Heading>
        <Box rounded={'md'} bg='white' flex={1}>
          <VStack>
            <Box style={styles.tableHead}>
              {
                tableData.head.map((d, i) => (
                  <Box key={i} flex={i === 0 ? 1.5 : 1}>
                    {
                      ['string', 'number'].includes(typeof d) ?
                        <Text size={'sm'} color={'gray.900'}>{d}</Text>
                        : d
                    }
                  </Box>
                ))
              }
            </Box>
            {
              tableData.rows.map((rowData, i) => (
                <TouchableOpacity key={i} style={styles.tableBody} onPress={onRowClick}>
                  <HStack flex={1}>
                    {
                      rowData.map((d, j) => (
                        <Box key={j} flex={j === 0 ? 1.5 : 1}>
                          {
                            ['string', 'number'].includes(typeof d) ?
                              <Text size={'sm'} color={'gray.900'}>{d}</Text>
                              : d
                          }
                        </Box>
                      ))
                    }
                  </HStack>
                </TouchableOpacity>
              ))
            }
          </VStack>
        </Box>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(229, 241, 247, 0.5)'
  },
  tableHead: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    backgroundColor: '#BFDCEB',
    flexDirection: 'row',
    height: 40,
    ...Platform.select({
      ios: {
        borderTopStartRadius: 8,
        borderTopEndRadius: 8,
      }
    })
  },
  tableBody: {
    flexDirection: 'row',
    padding: 10,
    height: 40,
  },
  tableText: {
    color: '#333'
  }
})

export default Dashboard;
