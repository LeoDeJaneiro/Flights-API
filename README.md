# Flight Proxy API

This RESTful API responses within less than 1 sec with a list of unique flights which have been fetched from two endpoints.

**Route**

`GET /flights`

**200 Response Schema**

```json
[
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
    },
    ...
]
```

## Prepare

- rename `.env.sample` to `.env` and fill in authentication values
- install dependencies
  ```bash
  $ npm install
  ```

## Running the API

This API has been built with Express.js and will be served on http://localhost:3000 locally.

```bash
# start server
$ npm run start
```

## Run test

```bash
# unit tests
$ npm run test
# unit test coverage
$ npm run test:coverage
```
