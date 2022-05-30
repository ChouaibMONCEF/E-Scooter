import React, { useCallback, useEffect, useRef, useState } from "react"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Pressable,
  Image,
} from "react-native"
import Carousel from "react-native-snap-carousel"
import Carou from "../components/Carou"
import { BottomSheet } from "../components/BottomSheet"

export default function App({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState(null)

  const toggleBottomSheet = () => {
    setModalVisible(!modalVisible)
  }
  let getData = async () => {
    let res = await fetch("http://192.168.10.17:19000/db.json")
    let data = await res.json()
    setData(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 32.29737972296437,
            longitude: -9.241980881949624,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {data &&
            data.map((e) => (
              <Marker
                key={e?.id}
                onPress={toggleBottomSheet}
                coordinate={{
                  latitude: e.latitude,
                  longitude: e.longitude,
                }}
              >
                <Image
                  source={require("../assets/images/icona.png")}
                  style={{ width: 60, height: 60 }}
                />
              </Marker>
            ))}
        </MapView>
      </View>
      {data && (
        <View style={{ width: "100%" }}>
          <Carou data={data} />
        </View>
      )}
    </>
  )
  {
    /* <Modal
        animationType='none'
        transparent={true}
        visible={modalVisible}
        onPress={to}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal> */
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  BottomSheet: {
    width: "100%",
    height: 226,
    backgroundColor: "black",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
})
