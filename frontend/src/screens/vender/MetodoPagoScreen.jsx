import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import { Slider56 } from '../../components/icons/Slider5-6'
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate'

export const MetodoPagoScreen = () => {
	const navigator = useNavigation()
	const { width, height } = useWindowDimensions()

	return (
		<StyledView dark container height100>
			<View
				style={{
					...styles.containerSlide,

					height: height * 0.1,
				}}
			>
				<Slider56 />
			</View>

			<View
				style={{
					marginBottom: 100,
				}}
			>
				<StyledText>¿Cómo preferís que te paguen?</StyledText>
			</View>

			<View style={styles.containerOptions}>
				<EcoBtnNavigate
					text='Transferencia bancaria'
					onPress={() => navigator.navigate('CheckeoFinalScreen')}
				/>
				<EcoBtnNavigate
					text='Billetera virtual'
					onPress={() => navigator.navigate('CheckeoFinalScreen')}
				/>
			</View>
		</StyledView>
	)
}

const styles = StyleSheet.create({
	containerSlide: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},

	containerOptions: {},
	containerBtn: {
		position: 'absolute',
		bottom: 80,
		paddingHorizontal: 25,
	},
})
