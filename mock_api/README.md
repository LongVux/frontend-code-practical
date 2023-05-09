Mock API
========

A simple mock API for the Talent First AI - Front-end Code Practical Test.

This code was written and targetted for Node.js v20.

Getting Started
---------------

1. Ensure you have a compatible Node.js (and NPM) version installed. This code was originally written using Node.js v20.

2. Install dependencies

   ```sh
   npm ci
   ```

3. Start API server

   ```sh
   npm start
   ```

4. The mock API server will now have started with base address <http://127.0.0.1:3000>. The server has CORS enabled.

API Documentation
-----------------

### `/api/users`

Returns a JSON list of all User objects.

### `/api/users/<id>`

Returns a JSON User object.

An example User object:

```json
{
  "id": 7293,
  "first_name": "Douglas",
  "last_name": "Cartwright",
  "username": "douglas.cartwright",
  "email": "douglas.cartwright@email.com",
  "gender": "Genderfluid",
  "phone_number": "+850 366.955.5195 x81814",
  "date_of_birth": "1964-02-12",
  "employment": {
    "title": "Future Construction Officer",
    "key_skill": "Networking skills"
  },
  "address": {
    "city": "Swaniawskimouth",
    "street_name": "Magdalena Ports",
    "street_address": "37131 Dare Crossing",
    "zip_code": "42124-0586",
    "state": "Iowa",
    "country": "United States",
    "coordinates": {
      "lat": 40.278916989536015,
      "lng": -154.69297286628412
    }
  },
  "subscription": {
    "plan": "Professional",
    "status": "Idle",
    "payment_method": "Apple Pay",
    "term": "Annual"
  },
  "uuid": "e9f45f1d-4993-4306-becc-9dd8faa2885e",
  "profile_picture_url": "/images/profiles/molestiasvelitneque.png"
}
```

### `/images/profiles/<profile_filename>`

Returns the image file of a User's profile picture. These are from the `profile_picture_url` attribute in the User object.
