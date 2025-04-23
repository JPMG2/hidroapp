import React from 'react'
import {Text} from "react-native";
type Props = {
    name: string;
}
    export default function Otro({name}: Props){
    return (
        <Text>Pablito {name}</Text>
    )
}