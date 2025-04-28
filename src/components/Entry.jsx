import "../styles/Entry.css"

export default function Entry(props) {
    console.log(props)
    const { img, location, title, dates, text, googleMapsLink } = props.entry;
    
    return (
        <div className="entry-container">
            <div className="entry-image-container">
                <img className="entry-image" src={img.src} alt={location} />
            </div>
            <div className="entry-content-container">
                <div className="entry-location-row">
                    <span className="entry-location-icon">📍</span>
                    <span className="entry-location">{location}</span>
                    <a className="entry-maps-link" href={googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="entry-title">{title}</h2>
                <div className="entry-dates">{dates}</div>
                <p className="entry-description">{text}</p>
            </div>
        </div>
    )
}   