import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SyledButton from '../styledComponents/StyledButton'
import StyledText from '../styledComponents/StyledText'
import StarFilled from './icons/StarFilled'
import Star from './icons/Star'
import { useUserStore } from '../store/userStore'
import { favoriteRequest } from '../api/favoriteRequest'

export const FavoriteCard = ({ item, handleReload }) => {
	const { id } = useUserStore((state) => state.user)

	const [favorite, setFavorite] = useState(true)

	// llamo al backend para agregar o sacar el fav pasandole el id del usuario y el id del producto
	// actualizo el icono
	// llamo a la funcion que me re renderiza todos mis productos de favoritos
	const addFavorite = async (item) => {
		const res = await favoriteRequest.addOrRemoveFavorite(id, item._id)

		setFavorite(res.data.inFavorite)

		handleReload()
	}

	return (
		<View style={styles.card}>
			<Image source={{ uri: item.image }} style={styles.containerImg} />

			<View style={styles.containerText}>
				<StyledText left yellow weight700 size16 marginBottom={10}>
					{item.name}
				</StyledText>
				<StyledText left yellow size12>
					${item.price}.-
				</StyledText>
			</View>

			<View style={styles.containerBtn}>
				{favorite ? (
					<StarFilled
						marginBottom={10}
						onPress={() => addFavorite(item)}
					/>
				) : (
					<Star marginBottom={10} onPress={() => addFavorite(item)} />
				)}

				<SyledButton
					miniButton
					title={'Comprar'}
					width={'130%'}
					marginHorizontal={0}
					onPress={() => alert('Comprar')}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30,
	},
	containerImg: {
		width: 72,
		height: 72,
		borderRadius: 8,
	},
	containerText: {
		marginStart: 5,
		width: '55%',
		marginTop: 15,
	},
	containerBtn: {
		alignItems: 'flex-end',
	},
})
