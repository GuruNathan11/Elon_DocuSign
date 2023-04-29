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
