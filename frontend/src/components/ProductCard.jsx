import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'
import Star from '../components/icons/Star'
import theme from '../themes/theme'
import { useFavoriteStore } from '../store/FavoriteStore'
import { favoriteRequest } from '../api/favoriteRequest'
import { useUserStore } from '../store/userStore'

export const ProductCard = ({
	title,
	price,
	img = 'https://picsum.photos/id/1/162/192',
	margin = 6,
	item,
}) => {
	const { id, favorites } = useUserStore((state) => state.user)

	const [favorite, setFavorite] = useState(favorites.includes(item._id))

	const navigator = useNavigation()

	const addFavorite = async (productid) => {
		const res = await favoriteRequest.addOrRemoveFavorite(id, productid)

		setFavorite(res.data.inFavorite)
	}

	return (
		<StyledView
			borderRadius12
			position={'relative'}
			marginHorizontal={margin}
		>
			<TouchableOpacity
				onPress={() =>
					navigator.navigate('Detalle del producto', { item })
				}
			>
				<StyledView
					radius12
					grey
					opacity={0.6}
					width={32}
					height={32}
					position={'absolute'}
					zIndex={1}
					right={10}
					top={6}
					center
				>
					<TouchableOpacity
						zIndex={20}
						elevation={20}
						onPress={() => addFavorite(item._id)}
					>
						<StyledView>
							<Star
								alignSelf={'center'}
								fill={
									favorite ? theme.colors.yellowPrimary : null
								}
							/>
						</StyledView>
					</TouchableOpacity>
				</StyledView>
				<Image
					source={{ uri: img }}
					style={{ width: 162, height: 192, borderRadius: 12 }}
				/>
				<StyledView paddingVertical={25} paddingHorizontal={12}>
					<StyledText size12 left marginBottom={15}>
						{title}
					</StyledText>
					<StyledText size16 left weight700>
						$ {price}
					</StyledText>
				</StyledView>
			</TouchableOpacity>
		</StyledView>
	)
}
