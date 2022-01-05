import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import { Button } from "@ant-design/react-native";
import { connect } from "react-redux";
import styles from "./All.styles";

const mapStateToProps = (state) => {
  return {
    name: state.whoami.name,
  };
};

export default connect(mapStateToProps)(
  (Home = (props) => {
    return (
      <SafeAreaView style={styles.container}>
        <Text>留言板</Text>
        <View style={styles.butttonView}>
          <Button type="warning" onPress={() => navigation.goBack()}>
            離開
          </Button>
          <Button onPress={() => props.navigation.push("Message")}>
            新增留言
          </Button>
          <Text>登入者：{props.name}</Text>
        </View>
      </SafeAreaView>
    );
  })
);
