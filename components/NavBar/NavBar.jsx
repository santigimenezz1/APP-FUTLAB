import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NavBarStyles';
import SelectorIdioma from '../SelectorIdioma/SelectorIdioma.jsx';

const NavBar = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container__navBar}>
                <View style={styles.container__navBar__titulo}>
                <Image width={200} height={70} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1746456648/ChatGPT_Image_5_may_2025_16_50_32_ethive.png"}}></Image>
                        
                    <Image 
                         width={25}
                        height={25} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1724232180/APP%20ALFOMBRA%20DE%20FUTBOL%20AMAZON/LOGO/Imagen_10-8-24_a_las_19.15_bkb9x9.svg"}} />

                </View>
                <View style={styles.container__navBar__menu}>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavBar;
