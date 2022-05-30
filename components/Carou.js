import React, { useCallback, useEffect, useRef, useState } from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"
import Carousel from "react-native-snap-carousel"

import tw from "twrnc"

const Carou = ({ navigation, data }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselItems, setCarouselItems] = useState([])
  const ref = useRef(null)

  let getData = async () => {
    setCarouselItems(data)
  }
  useEffect(() => {
    getData()
  }, [])

  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={tw`absolute flex-column justify-center bg-sky-400 w-full h-52 text-white  rounded-xl `}
      >
        <View>
          <Text style={tw`text-white text-3xl`}>{item.title}</Text>
        </View>
        <View>
          <Text style={tw`text-white text-xl`}>{item.description}</Text>
        </View>
        <View>
          <Text style={tw`text-white text-2xl`}>{item.price}</Text>
        </View>
      </View>
    ),
    []
  )

  return (
    <View
      style={tw`absolute -bottom-23 flex-row w-full h-82 text-white rounded-xl `}
    >
      <Carousel
        layout='stack'
        ref={ref}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={411}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  )
}

export default Carou
