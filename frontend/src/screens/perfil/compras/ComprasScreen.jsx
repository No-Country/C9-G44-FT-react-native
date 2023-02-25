import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	Pressable,
	Image,
} from 'react-native'
import { ComprasCard } from '../../../components/ComprasCard'
import { EcoBtnRender } from '../../../components/EcoBtnRender'
import { SettingsCompras } from '../../../components/icons/SettingsCompras'
import StyledText from '../../../styledComponents/StyledText'
import StyledView from '../../../styledComponents/StyledView'

export const ComprasScreen = () => {
	const { width, height } = useWindowDimensions()
	return (
		<StyledView dark container height100>
			<View style={styles.containerBtn}>
				<EcoBtnRender text='Compras realizadas' active />
				<EcoBtnRender text='Compras canceladas' active={false} />
			</View>

			<Pressable
				style={{ alignItems: 'flex-end' }}
				onPress={() => alert('Recientes')}
			>
				<View
					style={{
						...styles.containerRecientes,
						width: width * 0.3,
					}}
				>
					<StyledText weight500 size14>
						Recientes
					</StyledText>
					<SettingsCompras />
				</View>
			</Pressable>

			<View style={styles.containerCards}>
				<ComprasCard
					img={'https://picsum.photos/id/1/127/104'}
					name={'Campera ZARA'}
					price={'15.000'}
				/>

				<ComprasCard
					img={'https://picsum.photos/id/1/127/104'}
					name={'Jean VER'}
					price={'8.000'}
				/>
			</View>
		</StyledView>
	)
}

const styles = StyleSheet.create({
	containerBtn: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 10,
		marginTop: 15,
	},
	containerRecientes: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		right: 0,
	},
	containerCards: {
		width: '100%',
		marginTop: 30,
	},
	// card: {
	// 	flexDirection: 'row',
	// 	alignItems: 'center',
	// 	justifyContent: 'flex-start',
	// },
	// containerText: {
	// 	marginStart: 30,
	// 	alignItems: 'flex-start',
	// },
})
