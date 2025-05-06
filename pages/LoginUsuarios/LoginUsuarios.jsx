import { Image, View } from "react-native"
import styles from "./LoginUsuarios.js"
import BotonLoginUsuario from "../../components/BotonLoginUsuario/BotonLoginUsuario.jsx"


const LoginUsuarios = ( {navigation} ) => {
    return (
        <View style={styles.container__loginUsuarios}>
            <Image width={350} height={140} source={{uri:"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1746456648/ChatGPT_Image_5_may_2025_16_50_32_ethive.png"}}></Image>
            <View>
                <BotonLoginUsuario navigation={navigation}  />
            </View>
        </View>
    )
}
export default LoginUsuarios