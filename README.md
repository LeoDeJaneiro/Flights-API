# Flights API

This RESTful API responses within less than 1 sec with a list of unique flights which have been fetched from two endpoints.
The custom header _X-flight_sources_ adds metadata on which sources have responded.

**`GET /flights`**

| status |                       | payload  | custom header    |     |     |     |     |     |     |     |     |
| ------ | --------------------- | -------- | ---------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| 200    | OK                    | Flight[] | X-flight_sources |     |     |     |     |     |     |     |     |
| 500    | Internal Server Error |          |                  |     |     |     |     |     |

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
