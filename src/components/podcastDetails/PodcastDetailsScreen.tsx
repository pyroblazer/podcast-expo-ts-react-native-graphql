import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList, Image, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { SearchStackRouteParamsList } from '../../navigators/types';
import { theme } from '../../constants/theme';

type NavigationParams = RouteProp<SearchStackRouteParamsList, 'PodcastDetails'>;

const PodcastDetailsScreen = () => {
    const { data } = useRoute<NavigationParams>().params ?? {};

    return (
        <Box f={1} bg="white">
            <FlatList
                ListHeaderComponent={
                    <>
                        <Box dir="row" px="sm" mt="sm" mb="md">
                            {data.thumbnail && (
                                <Box mr={10}>
                                    <Image source={{ uri: data.thumbnail }} style={s.thumbnail} />
                                </Box>
                            )}
                            <Box f={1}>
                                <Text size="lg" bold>
                                    {data.podcastName}
                                </Text>
                                <Text size="xs" color="grey">
                                    {data.artist}
                                </Text>
                                <Text color="blueLight" size="xs">
                                    Subscribed
                                </Text>
                            </Box>
                        </Box>
                        <Box px="sm" mb="md" dir="row" align="center">
                            <Box mr={10}>
                                <FeatherIcon
                                    name="play"
                                    size={30}
                                    color={theme.color.blueLight}
                                />
                            </Box>
                            <Box>
                                <Text bold>Play</Text>
                                <Text size="sm">#400 - The Last Episode</Text>
                            </Box>
                        </Box>


                        <Box px="sm" mb="md">
                            <Text>Play last episode</Text>
                        </Box>

                        <Box px="sm" mb="md">
                            <Text bold size="lg">
                                Episodes
                            </Text>
                        </Box>
                    </>
                }
                data={[{ id: '1' }, { id: '2' }]}
                ItemSeparatorComponent={() => (
                    <Box w="100%" px="sm" my="sm">
                        <Box style={{ height: StyleSheet.hairlineWidth }} bg="greyLighter" />
                    </Box>
                )}
                renderItem={() => (
                    <Box px="sm">
                        <Text size="xs" color="grey">
                            Lorem Ipsum
                        </Text>
                        <Text bold>#1 - Lorem Ipsum Dolor</Text>
                        <Text size="sm" color="grey" numberOfLines={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Proin egestas nisl risus, at faucibus diam pretium eget.
                            Etiam vel nisi est. Pellentesque in ante venenatis, condimentum tellus id,
                            scelerisque tortor. Nunc scelerisque dolor leo, tincidunt consequat eros
                            fringilla a. Fusce eleifend arcu id urna viverra, nec congue nunc consequat.
                            Integer ac sagittis turpis. Maecenas dictum felis orci, sit amet pellentesque
                            est facilisis quis. Aliquam pulvinar dui non ligula tincidunt, quis
                            sollicitudin mauris vehicula. In nisl odio, fringilla vel hendrerit at,
                            elementum quis nisl. Nunc elementum, nunc ut volutpat dapibus, orci enim
                            commodo nunc, vitae hendrerit mi lorem et nulla. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                            cursus finibus magna ac imperdiet. Interdum et malesuada fames ac ante ipsum
                            primis in faucibus. Duis nec lectus mauris.
                        </Text>
                        <Text size="sm" color="grey">
                            3hrs. 13min
                        </Text>
                    </Box>
                )}
                keyExtractor={(item) => item.id}
            />
        </Box>
    );
};

const s = StyleSheet.create({
    thumbnail: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
});

export default PodcastDetailsScreen;