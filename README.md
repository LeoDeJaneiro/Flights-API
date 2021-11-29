# Flights API - Express.js

This RESTful API has been developed as coding challenge. 
The requirement was to respond with a list of unique flights (which have been requested from two unreliable endpoints) within 1 sec and to omit responses which haven't been sent in time, and errors.

After 800 ms, pending requests are canceled and the source-metadata (sources from which data has been included in the response) is added to a custom http header _X-flight_sources_.

**`GET /flights`**

| status |                       | payload  | custom header    |
| ------ | --------------------- | -------- | ---------------- |
| 200    | OK                    | Flight[] | X-flight_sources |
| 500    | Internal Server Error |          |                  |

## Prepare

- rename `.env.sample` to `.env` and fill in authentication values
- install dependencies
  ```bash
  $ npm install
  ```

## Running the API

This API has been built with Express.js.

```bash
# start dev server [http://localhost:3000]
$ npm run start
```

## Run test

```bash
# unit tests
$ npm run test
# unit test coverage
$ npm run test:coverage
```

## Flight Schema

```json
{
    "slices": [
        {
            "origin_name": string,
            "destination_name": string,
            "departure_date_time_utc": string,
            "arrival_date_time_utc": string,
            "flight_number": string,
            "duration": number
        },
        {
            "origin_name": string,
            "destination_name": string,
            "departure_date_time_utc": string,
            "arrival_date_time_utc": string,
            "flight_number": string,
            "duration": number
        }
    ],
    "price": number
}
```
