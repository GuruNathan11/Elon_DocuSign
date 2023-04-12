
// const baseUrl = "https://demo.docusign.net/restapi";
// const apiVersion = "v2.1";
// const accountId = "dc02ffd0-684b-4994-82c7-eac60ee358be"

// const axios = require('axios');

// const fetchAccessToken = async () => {
//   try {
//     const response = await axios.post('https://elon-jwtoken.onrender.com/oauth/token');
//     return response.data.access_token;
    
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// fetchAccessToken().then(token => console.log("token:",token));


// // const accessToken = "eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwAAPCT4qzrbSAgAAHxHBu8620gCAAhnpshLtg5LpZuzs5bdODcVAAEAAAAYAAEAAAAFAAAADQAkAAAAMzQ4ODkzNGEtYzUxNy00NWNhLTg1MzMtZTI0ZjFiNjFmYjlhIgAkAAAAMzQ4ODkzNGEtYzUxNy00NWNhLTg1MzMtZTI0ZjFiNjFmYjlhMACALMWYqTrbSDcAu7tNuJ5-7UCZmu7ocl_Azw.MtogZC-tExTJHoakz2gvZpoRK7ZxnhBiMMRFwR4DfemWSR4z6xbZWYBPCQ2PNeGjhfl0MeEBSGF7L1J5dYgoQ8SMYk9hKkcD15ZswuPDbGrnGXO1cg3pYZpgCXzH3u2X9e_eqOVMn5VM-0YUQ4MNSBj_shghfqivGSIUcqzm4mwV3WHlADCJ6kliJ80jSh1vqfNrqKmtOR4az_MEyAq3LiNY2Q7ZPd80EutSS2loVT8IxANkgHEODiBD8VXeBjboksYKlCPP2axTpqAX461jHJMA0EeHfTp2iS2W8lXLvm5i0loQK7CEZ-BiggAyfvfKILRZUj0YM6ESAa7QEO6g5A"

// exports.getEnvelopeApiUrl = () => `${baseUrl}/${apiVersion}/accounts/${accountId}/envelopes`;

// exports.getEnvelopeApiHeaders = () => ({
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${accessToken}`
// });

const baseUrl = "https://demo.docusign.net/restapi";
const apiVersion = "v2.1";
const accountId = "dc02ffd0-684b-4994-82c7-eac60ee358be"

const axios = require('axios');

let accessToken = null;

const fetchAccessToken = async () => {
  try {
    const response = await axios.post('https://elon-jwtoken.onrender.com/oauth/token');
    accessToken = response.data.access_token;
  } catch (error) {
    console.error(error);
  }
};

fetchAccessToken();

exports.getEnvelopeApiUrl = () => `${baseUrl}/${apiVersion}/accounts/${accountId}/envelopes`;

exports.getEnvelopeApiHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
});


