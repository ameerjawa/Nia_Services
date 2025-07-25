const axios = require('axios');

exports.handler = async function (event, context) {
  const API_KEY = process.env.GOOGLE_API_KEY; // Set this in your Netlify env
  const placeId = "ChIJF_vs_OlBK4gR_KQmScJH4s0";     // Replace with your Place ID

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          key: API_KEY,
          place_id: placeId,
          fields: 'review,rating,user_ratings_total,name'
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.result.reviews || []),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch reviews' }),
    };
  }
};
