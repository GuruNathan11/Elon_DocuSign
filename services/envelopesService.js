// const axios = require('axios');
// const fs = require('fs');
// const path = require('path');

// const EnvelopeDAO = require('../dao/envelopeDAO');


// exports.createEnvelope = async (documentPath, email, name) => {
//   // Read the PDF file and encode it to Base64
//   const file = fs.readFileSync(documentPath);
//   const documentBase64 = Buffer.from(file).toString('base64');

//   // Define the request payload
//   const payload = {
//     documents: [
//       {
//         documentBase64,
//         documentId: "1",
//         fileExtension: 'pdf',
//         name
//       }
//     ],
//     emailSubject: 'Simple Signing Example',
//     recipients: {
//       signers: [
//         {
//           email,
//           name,
//           recipientId: "1"
//         }
//       ]
//     },
//     status: 'sent'
//   };

//   // Send the request to DocuSign API
//   const envelopeResponse = await axios.post(
//     EnvelopeDAO.getEnvelopeApiUrl(),
//     payload,
//     { headers: EnvelopeDAO.getEnvelopeApiHeaders() }
//   );

//   return envelopeResponse.data;
// };

// const axios = require('axios');
// const fs = require('fs');
// const path = require('path');

// const documentPath = "C:/Users/ADMIN/Downloads/Application.pdf";
// const email = "gurunathan.s@elonnativesystem.com";
// const name = "Recipient Name";

// const EnvelopeDAO = require('../dao/envelopeDAO');

// const file = fs.readFileSync(documentPath);
// const documentBase64 = Buffer.from(file).toString('base64');

// const payload = {
//     documents: [
//       {
//         documentBase64: documentBase64,
//         documentId: "1",
//         fileExtension: 'pdf',
//         name: 'Document'
//       }
//     ],
//     emailSubject: 'Please sign this document',
//     recipients: {
//       signers: [
//         {
//           email: email,
//           name: name,
//           recipientId: "1"
//         }
//       ]
//     },
//     status: 'sent'
//   };

// //   const accessToken = require('../dao/envelopeDAO')
// const accessToken = "eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwAA7JcfTTrbSAgAACy7LZA620gCAAhnpshLtg5LpZuzs5bdODcVAAEAAAAYAAEAAAAFAAAADQAkAAAAMzQ4ODkzNGEtYzUxNy00NWNhLTg1MzMtZTI0ZjFiNjFmYjlhIgAkAAAAMzQ4ODkzNGEtYzUxNy00NWNhLTg1MzMtZTI0ZjFiNjFmYjlhMAAAWmzPSzrbSDcAu7tNuJ5-7UCZmu7ocl_Azw.yMYXw_QyZrLVLBLQrvYu6dQ68TVRIOBXntcaphetI-8T11Oj8rUJZFnID6wx2hq2rz5-3Gkg9A7XdgblQmecLG0-PorBuFtPE2bfw8Y1eBJ_y-ujZcZyKYeaZKH21Dy0RdUOWoQmqlcWioY1Ih0g6joS8zpLp-UdAmvryPCqh67rsksm2Hqn47fy_eGm3-mbu7Vy78d7D3Santh77frL-0u1WeqifyS6jaGFvGdt7-1Hxkjv3LLMXxRwiIahLgQMB7nsP38kf5hHL3yd9aeArxoxlrm3R8fXFLBSVdxYs1mftSP-dklE3L4hwQWBq8ktWwI3E8ricWr3aFYpA1vbIg"


//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${accessToken}`
//   };
  
//   axios.post(apiUrl, payload, { headers })
//   .then(response => {
//     console.log('Envelope sent successfully:', response.data);
//   })
//   .catch(error => {
//     console.error('Error sending the envelope:', error.message);
//   });


// const axios = require('axios');
// const fs = require('fs');
// const path = require('path');

// const EnvelopeDAO = require('../dao/envelopeDAO');

// async function downloadFile(url, filePath) {
//   const response = await axios.get(url, { responseType: 'arraybuffer' });
//   const buffer = Buffer.from(response.data, 'binary');
//   fs.writeFileSync(filePath, buffer);
// }

// exports.createEnvelope = async (documentUrl, email, name) => {
//   const tempFilePath = path.join(__dirname, 'temp.pdf');
//   await downloadFile(documentUrl, tempFilePath);

//   // Read the PDF file and encode it to Base64
//   const file = fs.readFileSync(tempFilePath);
//   const documentBase64 = Buffer.from(file).toString('base64');

//   // Define the request payload
//   const payload = {
//     documents: [
//       {
//         documentBase64,
//         documentId: "1",
//         fileExtension: 'pdf',
//         name
//       }
//     ],
//     emailSubject: 'Simple Signing Example',
//     recipients: {
//       signers: [
//         {
//           email,
//           name,
//           recipientId: "1"
//         }
//       ]
//     },
//     status: 'sent'
//   };

//   // Send the request to DocuSign API
//   const envelopeResponse = await axios.post(
//     EnvelopeDAO.getEnvelopeApiUrl(),
//     payload,
//     { headers: EnvelopeDAO.getEnvelopeApiHeaders() }
//   );

//   fs.unlinkSync(tempFilePath); // remove the temporary file

//   return envelopeResponse.data;
// };


const axios = require('axios');
const EnvelopeDAO = require('../dao/envelopeDAO');

exports.createEnvelope = async (documentUrl, email, name) => {
  // Fetch the file content from the URL and encode it to Base64
  // console.log("abc");
  const response = await axios.get(documentUrl, { responseType: 'arraybuffer' });
  const documentBase64 = Buffer.from(response.data, 'binary').toString('base64');

  // console.log("Base64",documentBase64);

  // Define the request payload
  const payload = {
    documents: [
      {
        documentBase64,
        documentId: "1",
        fileExtension: 'pdf',
        name
      }
    ],
    emailSubject: 'Simple Signing Example',
    recipients: {
      signers: [
        {
          email,
          name,
          recipientId: "1"
        }
      ]
    },
    status: 'sent'
  };

  // Send the request to DocuSign API
  const envelopeResponse = await axios.post(
    EnvelopeDAO.getEnvelopeApiUrl(),
    payload,
    { headers: EnvelopeDAO.getEnvelopeApiHeaders() }
  );

  return envelopeResponse.data;
};
