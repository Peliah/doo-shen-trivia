import { CATEGORIES } from '@/constants/data'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import QuizItem from './QuizItem'
const QuizCarousel = () => {
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (<QuizItem category={item} />)}
            />
        </View>
    )
}

export default QuizCarousel

const styles = StyleSheet.create({
    listContent: {
        paddingRight: 12,
    },
})