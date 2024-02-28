import React from 'react';
import HTML from 'react-native-render-html';
import { Linking, useWindowDimensions } from 'react-native';

interface Props {
    html: string;
    a: {
        onPress: any;
    };
}

const HtmlReader = (props: Props) => {
    const { width } = useWindowDimensions();

    return (
        <HTML
            contentWidth={width}
            source={props}
        />
    );
};

export default HtmlReader;