// sanitiseSighting.js
import sanitizeHtml from 'sanitize-html';

function sanitiseSighting(sightingCard) {
    const sanitisedCard = {
        timeStamp: sanitizeHtml(sightingCard.timeStamp, { allowedTags: ['b'], allowedAttributes: {} }),
        location: sanitizeHtml(sightingCard.location, { allowedTags: ['b'], allowedAttributes: {} }),
        title: sanitizeHtml(sightingCard.title, { allowedTags: ['b'], allowedAttributes: {} }),
        text: sanitizeHtml(sightingCard.text, { allowedTags: ['b'], allowedAttributes: {} })
    };
    return sanitisedCard;
}

function sanitiseData(data) {
    const sanitisedData = {};
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            sanitisedData[key] = sanitizeHtml(value, { allowedTags: ['b'], allowedAttributes: {} });
        } else {
            sanitisedData[key] = value;
        }
    }
    return sanitisedData;

}
export { sanitiseSighting };
