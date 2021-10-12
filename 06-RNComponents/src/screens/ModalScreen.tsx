import React, { useContext, useState } from 'react'
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ModalScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styles.globalMArgin}>
            <HeaderTitle title="Modal Screen" />
            <Button
                title="Open Modal"
                onPress={() => { setIsVisible(true) }}
                color={colors.primary}
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
                        <HeaderTitle title="Modal" marginTop={10} color="black" />
                        <Text style={{ color: 'black' }}>Modal Body</Text>
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
                                color={colors.primary}
                                size={45}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
        </View >
    );
};
