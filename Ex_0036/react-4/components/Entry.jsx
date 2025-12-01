const geoData = {
    image: "aditya-anjagi-KZSDCocsOEE-unsplash.jpg",
    location: "Japan",
    title: "Mount Fuji",
    googleMapsLink: "https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
};

function Entry() {
    const entryImage = `/images/${geoData.image}`;
    return (
        <article className="entry-cnt">
            <div className="main-image-cnt">
                <img className="entry-img" src={entryImage} alt={geoData.title}></img>
            </div>
            <div className="entry-flex"> {/* a.k.a. info-container */}
                <img className="map-pointer" src="/images/marker.png" alt="Map Marker Symbol"></img>
                <span className="country">{geoData.location}</span>
                <a href={geoData.googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{geoData.title}</h2>
                <p className="entry-dates">{geoData.dates}</p>
                <p className="entry-text">{geoData.text}</p>
            </div>
        </article>
    );
}

export { Entry };