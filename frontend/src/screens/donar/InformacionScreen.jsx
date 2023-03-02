import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import StyledButton from '../../styledComponents/StyledButton'
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate'
import MapView, { Marker, Polyline } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { Calendario } from '../donar/Calendario'
import { HoraDesde } from './HoraDesde'
import { HoraHasta } from './HoraHasta'

export const InformacionScreen = () => {
	const navigator = useNavigation()

	const [origin, setOrigin] = React.useState({
		latitude: -34.745251,
		longitude: -58.41128,
	})

	const [destination, setDestination] = React.useState({
		latitude: -34.7305,
		longitude: -58.405824,
	})

	return (
		<StyledView dark>
			<StyledView center container height100>
				<StyledText size12 marginBottom={10}>
					Indica la fecha y franja horaria para la recolección.
				</StyledText>
				<Calendario />
				<StyledView
					alignContent={'space-between'}
					flexDirection={'row'}
					width={'45%'}
				>
					<HoraDesde />
					<View width={'20%'} />
					<HoraHasta />
				</StyledView>
				<StyledText size12 marginBottom={10}>
					Dirección:
				</StyledText>
				<MapView
					width={'100%'}
					height={'30%'}
					initialRegion={{
						latitude: origin.latitude,
						longitude: origin.longitude,
						latitudeDelta: 0.09,
						longitudeDelta: 0.04,
					}}
				>
					<Marker
						draggable
						coordinate={origin}
						onDragEnd={(direction) =>
							setOrigin(direction.nativeEvent.coordinate)
						}
					/>
					{/*<MapViewDirections
							origin={origin}
							destination={destination}
							apikey={GOOGLE_MAPS_KEY}
					/>*/}
				</MapView>
				<StyledButton
					marginTop={50}
					white
					title={'Siguiente'}
					onPress={() => navigator.navigate('DonacionExitosa')}
				></StyledButton>
			</StyledView>
		</StyledView>
	)
}
