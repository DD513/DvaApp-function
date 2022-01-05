import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { Button, Toast } from "@ant-design/react-native";
import { connect } from "react-redux";
import styles from "./All.styles";

export default connect()(
  (Entrance = (state, props) => {
    const [data, setData] = useState(null);

    saveName = () => {
      props.dispatch({
        type: "whoami/GET_name",
        payload: state.data,
        callback: () => {
          Toast.success("成功進入", 1);
          props.navigation.push("Home");
        },
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Text>你是誰～～？</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(name) => setData({ data: name })}
        ></TextInput>
        <View>
          <Button type="primary" onPress={saveName}>
            進入
          </Button>
        </View>
      </SafeAreaView>
    );
  })
);
