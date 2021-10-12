import React, { useState } from 'react'
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <View style={styles.globalMArgin}>
            <HeaderTitle title="Modal Screen" />
            <Button
                title="Open Modal"
                onPress={() => { setIsVisible(true) }}
            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent
            >
                <View style={{
                    flex: 1,
                    // width: 100, 
                    // height: 100, 
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 1,
                            height: 0
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 10,
                    }}>
                        <HeaderTitle title="Modal" marginTop={10} />
                        <Text>Modal Body</Text>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0
                            }}
                            onPress={() => { setIsVisible(false) }}
                        >
                            <Icon
                                name="close-outline"
                                color="#5856D6"
                                size={45}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
