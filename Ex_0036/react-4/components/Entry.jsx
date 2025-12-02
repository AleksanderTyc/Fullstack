function Entry({image, title, location, googleMapsLink, dates, text}) {
    // const entryImage = `/images/${image.src}`;
    return (
        <article className="entry-cnt">
            <div className="main-image-cnt">
                <img className="entry-img" src={image.src} alt={image.alt}></img>
            </div>
            <div className="entry-flex"> {/* a.k.a. info-container */}
                <img className="map-pointer" src="/images/marker.png" alt="Map Marker Symbol"></img>
                <span className="country">{location}</span>
                <a href={googleMapsLink} target="_blank">View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="entry-dates">{dates}</p>
                <p className="entry-text">{text}</p>
            </div>
        </article>
    );
}

export { Entry };