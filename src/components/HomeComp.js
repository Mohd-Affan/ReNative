import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Api, getScaledValue } from "renative";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isButton1Focused: false,
      isButton2Focused: false,
      isButton3Focused: false,
      isButton4Focused: false,
    };
    this.actionRef = {};
  }

  componentDidMount() {
    (Api.platform === "webos" || Api.platform === "tizen") &&
      this.actionRef["button1"] &&
      this.actionRef["button1"].focus();
  }

  _onKeyDown = (event) => {
    const keyCode = event.keyCode;
    const { isButton1Focused, isButton2Focused } = this.state;
    switch (keyCode) {
      case 40: {
        if (isButton1Focused) {
          this.actionRef["button2"] && this.actionRef["button2"].focus();
        } else if (isButton2Focused) {
          this.actionRef["button1"] && this.actionRef["button1"].focus();
        }
        return;
      }
      case 38: {
        if (isButton2Focused) {
          this.actionRef["button1"] && this.actionRef["button1"].focus();
        }
        return;
      }
    }
  };

  render() {
    const {
      isButton1Focused,
      isButton2Focused,
      isButton3Focused,
      isButton4Focused,
    } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton1Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          ref={(ref) => {
            this.actionRef["button1"] = ref;
          }}
          activeOpacity={1.0}
          onKeyDown={(e) => {
            this._onKeyDown(e);
          }}
          onFocus={() => {
            this.setState({
              isButton1Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton1Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton1Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton2Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          ref={(ref) => {
            this.actionRef["button2"] = ref;
          }}
          activeOpacity={1.0}
          onKeyDown={(e) => {
            this._onKeyDown(e);
          }}
          onFocus={() => {
            this.setState({
              isButton2Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton2Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton2Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 2
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton3Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          ref={(ref) => {
            this.actionRef["button3"] = ref;
          }}
          activeOpacity={1.0}
          onKeyDown={(e) => {
            this._onKeyDown(e);
          }}
          onFocus={() => {
            this.setState({
              isButton3Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton3Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton3Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 3
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnStyle,
            isButton4Focused ? styles.activeBtn : styles.inactiveBtn,
          ]}
          ref={(ref) => {
            this.actionRef["button4"] = ref;
          }}
          activeOpacity={1.0}
          onKeyDown={(e) => {
            this._onKeyDown(e);
          }}
          onFocus={() => {
            this.setState({
              isButton4Focused: true,
            });
          }}
          onBlur={() => {
            this.setState({
              isButton4Focused: false,
            });
          }}
        >
          <Text
            style={[
              styles.btnTxt,
              isButton4Focused ? styles.activeBtnTxt : styles.inactiveBtnTxt,
            ]}
          >
            Button 4
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "lavender",
  },
  btnStyle: {
    width: 200,
    height: 100,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginBottom: 20,
    borderWidth: 5,
  },
  activeBtn: {
    borderColor: "#fff",
    width: 240,
    height: 120,
    borderColor: "purple",
  },
  inactiveBtn: {
    borderColor: "transparent",
    borderColor: "white",
  },
  btnTxt: {
    color: "#fff",
  },
  activeBtnTxt: {
    fontSize: getScaledValue(10),
  },
  inactiveBtnTxt: {
    fontSize: 16,
  },
});

export default Home;
