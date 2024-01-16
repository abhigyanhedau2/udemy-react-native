class Place {
    constructor(title, imageURI, address, location) {
        this.id = new Date().toString() + Math.random().toString();
        this.title = title;
        this.imageURI = imageURI;
        this.address = address;
        this.location = location; // { lat: 12.421, lng: 127.121 }
    }
}