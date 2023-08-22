import { StyleSheet, Text, View } from "react-native";

const Box = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 10,
        borderRadius: 3,
        margin: 10,
      }}
    ></View>
  );
};

const Line = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      {[1, 2, 3, 4, 5].map((per) => {
        return <Box />;
      })}
    </View>
  );
};

export const Board = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((per) => {
        return <Line />;
      })}
    </>
  );
};
