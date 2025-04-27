import "../styles/Entry.css"

export default function Entry({
    imageUrl = "https://source.unsplash.com/WLxQvbMyfas",
    location = "JAPAN",
    googleMapsUrl = "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    title = "Mount Fuji",
    startDate = "12 Jan, 2021",
    endDate = "24 Jan, 2021",
    description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
}) {
    return (
        <div className="entry-container">
            <div className="entry-image-container">
                <img className="entry-image" src={imageUrl} alt={location} />
            </div>
            <div className="entry-content-container">
                <div className="entry-location-row">
                    <span className="entry-location-icon">📍</span>
                    <span className="entry-location">{location}</span>
                    <a className="entry-maps-link" href={googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="entry-title">{title}</h2>
                <div className="entry-dates">{startDate} - {endDate}</div>
                <p className="entry-description">{description}</p>
            </div>
        </div>
    )
}   