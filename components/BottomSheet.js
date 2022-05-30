import React from "react"
import { Modal } from "react-native"
export function BottomSheet({
  children,
  visible = false,
  onBackButtonPress = () => {},
  onBackdropPress = () => {},
}) {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
      style={{ justifyContent: "flex-end", margin: 0 }}
      animationIn={"bounce"}
      animationOut={"bounceOutDown"}
      avoidKeyboard={false}
    >
      {children}
    </Modal>
  )
}
