import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardTypeOptions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, ReactElement, FunctionComponent, useRef } from "react";
import { colors } from "../constant";

type Props = {
  placeholder?: string;
  className?: string;
  type?: KeyboardTypeOptions;
  password?: boolean;
  leftIcon?: JSX.Element | ReactElement | FunctionComponent;
};

const TextInputComponent: React.FC<Props> = ({
  placeholder,
  className,
  password,
  leftIcon,
  type,
}) => {
  // for password input only :
  const [eye, setEye] = useState(true);

  const [text, setText] = useState("")

  const showText = () => {
    setEye(!eye);
  };

  const handelChange = (text: any) => {
    setText(text)
    console.log(text)
  }
  
  return (
    <View
      className={`flex-row justify-between ${
        className ?? ""
      } ${ text != "" && "border-black" } focus:border-primary-0 focus:border-2`}
    >
      {leftIcon && (
        <View className="justify-center items-center px-2">
          {typeof leftIcon === "function" ? leftIcon(text != "" ? "black" : undefined) : leftIcon}
        </View>
      )}

      <TextInput
        className={`flex-1 p-2`}
        secureTextEntry={!password ? false : eye}
        placeholderTextColor={colors.gray[400]}
        placeholder={placeholder ?? ""}
        cursorColor={colors.primary[0]}
        keyboardType={type}
        onChangeText={handelChange}
      />
      {password && (
        <TouchableOpacity
          className="px-2 justify-center items-center"
          onPress={showText}
        >
          <Ionicons
            name={eye ? "eye" : "eye-off"}
            size={22}
            color={text !== "" ? "black" : colors.gray[300]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputComponent;
