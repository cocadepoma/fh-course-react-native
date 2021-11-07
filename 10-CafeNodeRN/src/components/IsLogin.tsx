import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export const IsLogin = () => {
  return (
    <View
      style={{
        flex: 1,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 200,
          height: 200,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ActivityIndicator
          size={50}
          color="#F0C300"
          style={{
            flex: 1,
            elevation: 10,
          }}
        />
        <Text style={{ fontSize: 20, bottom: 50, marginLeft: 6 }}>Please wait ...</Text>
      </View>
    </View>
  )
}
