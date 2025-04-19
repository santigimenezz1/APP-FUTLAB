import React, { useState, useEffect, useContext } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./DetalleNivelVideo"; 
import { RFValue } from "react-native-responsive-fontsize";
import { CartContext } from "../../../../Context/Context";
import YoutubeIframe from "react-native-youtube-iframe";
import GoogleCast, { CastButton } from "react-native-google-cast";

const DetalleNivelVideo = () => {
    const route = useRoute();
    const { ejercicio } = route.params; 
    const navigation = useNavigation();
    const [botonActive, setBotonActive] = useState("Tutorial");
    const { idiomaActual } = useContext(CartContext);

    const firebaseVideoUrl = "https://firebasestorage.googleapis.com/v0/b/app-futbol-5cbc0.appspot.com/o/NIVEL1%2Fnivel_1__ejercicio_1_entrenamiento%20(1080p).mp4?alt=media&token=5a27090c-b2ff-4da2-b94f-55c6ee723c77";

    useEffect(() => {
        navigation.setOptions({ title: ejercicio.nombre });
    }, [navigation, ejercicio.nombre]);

    const enviarACast = () => {
        GoogleCast.castMedia({
            mediaUrl: firebaseVideoUrl,
            title: ejercicio.nombre,
            subtitle: "Ejercicio",
            imageUrl: ejercicio.imagenVideo,
            posterUrl: ejercicio.imagenVideo,
            studio: "App Fútbol",
            streamType: "BUFFERED",
            contentType: "video/mp4",
            duration: ejercicio.duracion / 1000,
        });
    };

    return (
        <ScrollView>
            <View style={{ backgroundColor: "black", paddingBottom: RFValue(50) }}>
                {/* Botón oficial de Google Cast (opcional) */}
                <View style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }}>
                    <CastButton style={{ width: 30, height: 30, tintColor: 'white' }} />
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: "80%", marginBottom: 10, flexDirection: "row-reverse", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            {ejercicio.estrellas.completas.map((_, index) => (
                                <FontAwesome key={index} name="star" size={24} color="hsl(199, 76%, 28%)" />
                            ))}
                            {ejercicio.estrellas.vacias.map((_, index) => (
                                <FontAwesome key={index} name="star-o" size={24} color="hsl(199, 76%, 28%)" />
                            ))}
                        </View>
                    </View>

                    <Text style={{ color: "white", letterSpacing: 2, fontSize: 25, marginBottom: 10 }}>{botonActive}</Text>

                    {/* Reproductor YouTube (opcional) */}
                    <View style={{ width: "100%", height: 230 }}>
                        <YoutubeIframe
                            height={230}
                            play={true}
                            videoId={"pR-F-kCg_Do"}
                            onChangeState={(state) => console.log("estado:", state)}
                        />
                    </View>

                    {/* 🔘 Botón personalizado “Ver en TV” */}
                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity
                            onPress={enviarACast}
                            style={{
                                backgroundColor: "hsl(199, 76%, 28%)",
                                paddingVertical: 12,
                                paddingHorizontal: 25,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Ver en TV</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Imagen del ejercicio */}
                    <View style={{ width: RFValue(300), borderWidth: 3, borderColor: "hsl(199, 76%, 28%)", marginTop: 20 }}>
                        <Image source={{ uri: ejercicio.imagenVideo }} style={{ width: "100%", height: RFValue(120) }} />
                    </View>

                    {/* Botones Tutorial y Training */}
                    <View style={{ marginTop: 40, flexDirection: "row", gap: 12, justifyContent: "center", width: "90%" }}>
                        <TouchableOpacity 
                            style={botonActive === "Tutorial" ? styles.botonOn : styles.botonDesactivado}
                            onPress={() => setBotonActive("Tutorial")}
                        >
                            <Text style={{ color: "white", textAlign: "center", letterSpacing: 1 }}>
                                {idiomaActual === "espana" && "Tutorial"}
                                {idiomaActual === "italia" && "Tutorial"}
                                {idiomaActual === "francia" && "Tutoriel"}
                                {idiomaActual === "bandera" && "Tutorial"}
                                {idiomaActual === "paises bajos" && "Tutorial"}
                                {idiomaActual === "inglaterra" && "Tutorial"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={botonActive === "Training" ? styles.botonOn : styles.botonDesactivado}
                            onPress={() => setBotonActive("Training")}
                        >
                            <Text style={{ color: "white", textAlign: "center", letterSpacing: 1 }}>
                                {idiomaActual === "espana" && "Entrenamiento"}
                                {idiomaActual === "italia" && "Allenamento"}
                                {idiomaActual === "francia" && "Entraînement"}
                                {idiomaActual === "bandera" && "Training"}
                                {idiomaActual === "paises bajos" && "Training"}
                                {idiomaActual === "inglaterra" && "Training"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default DetalleNivelVideo;
