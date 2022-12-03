import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {Text} from "native-base";
import { TouchableOpacity } from "react-native";

const GoBack = () => {
  const { goBack } = useNavigation();
  const onBack = () => {
    goBack();
    // onPress();
  };

  return (
    <TouchableOpacity
      onPress={onBack}
      style={{
        flexDirection: "row",
        height: 30,
      }}
    >
      <Ionicons
        name="ios-chevron-back-circle-outline"
        size={19}
        color={"#999"}
      />
      <Text size={"sm"} color="gray.400">
        {" "}
        Back
      </Text>
    </TouchableOpacity>
  );
};

export default GoBack;
