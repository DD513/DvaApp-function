import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { Button } from "@ant-design/react-native";
import { connect } from "react-redux";
import styles from "./All.styles";

export default connect()(
  (Home = (props) => {
    const [data, setData] = useState(null);

    return (
      <SafeAreaView style={styles.container}>
        <Text>請輸入訊息</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(message) => setData({ data: message })}
        ></TextInput>
        <View style={styles.butttonView}>
          <Button type="warning" onPress={() => props.navigation.goBack()}>
            返回
          </Button>
          <Button>儲存</Button>
        </View>
      </SafeAreaView>
    );
  })
);
