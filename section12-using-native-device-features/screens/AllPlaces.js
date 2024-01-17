import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces(props) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();
    const route = props.route;

    useEffect(() => {
        if (isFocused && route.params) {
            setLoadedPlaces(prev => [route.params.place, ...prev])
        }
    }, [isFocused, route]);

    return <PlacesList places={loadedPlaces} />
}