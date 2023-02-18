import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const DetalleDonarScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>
				Subí fotos de las prendas a donar. (hasta 5 imágenes).
			</Text>
			<Text style={style.title}>Cantidad de prendas: ___</Text>
			<Text style={style.title}>
				Agrega una descripcion (hasta 500 caracteres):
			</Text>
			<Text style={style.title}>
				Ej: 5 remeras de mujer y 1 pantalon infantil
			</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('InformacionScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}
