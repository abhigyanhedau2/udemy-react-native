import PlaceForm from "../components/Places/PlaceForm";

export default function AddPlace(props) {
    function createPlaceHandler(place) {
        props.navigation.navigate("AllPlaces", { place });
    }

    return <PlaceForm onCreatePlace={createPlaceHandler} />
}