const source1 = {
  source: "id1",
  value: {
    flights: [
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T04:30:00.000Z",
            flight_number: "144",
          },
          {
            departure_date_time_utc: "2019-08-10T06:50:00.000Z",
            flight_number: "145",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T20:25:00.000Z",
            flight_number: "8545",
          },
          {
            departure_date_time_utc: "2019-08-10T18:00:00.000Z",
            flight_number: "8544",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T04:30:00.000Z",
            flight_number: "144",
          },
          {
            departure_date_time_utc: "2019-08-10T05:35:00.000Z",
            flight_number: "8542",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T16:00:00.000Z",
            flight_number: "146",
          },
          {
            departure_date_time_utc: "2019-08-10T18:00:00.000Z",
            flight_number: "8544",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T20:25:00.000Z",
            flight_number: "8545",
          },
          {
            departure_date_time_utc: "2019-08-10T06:50:00.000Z",
            flight_number: "145",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T08:00:00.000Z",
            flight_number: "8543",
          },
          {
            departure_date_time_utc: "2019-08-10T18:00:00.000Z",
            flight_number: "8544",
          },
        ],
      },
    ],
  },
};

const source2 = {
  source: "id2",
  value: {
    flights: [
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T04:30:00.000Z",
            flight_number: "144",
          },
          {
            departure_date_time_utc: "2019-08-10T06:50:00.000Z",
            flight_number: "145",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T20:25:00.000Z",
            flight_number: "8545",
          },
          {
            departure_date_time_utc: "2019-08-10T18:00:00.000Z",
            flight_number: "8544",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T04:30:00.000Z",
            flight_number: "144",
          },
          {
            departure_date_time_utc: "2019-08-10T05:35:00.000Z",
            flight_number: "8542",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T16:00:00.000Z",
            flight_number: "146",
          },
          {
            departure_date_time_utc: "2019-08-10T18:00:00.000Z",
            flight_number: "8544",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T20:25:00.000Z",
            flight_number: "8545",
          },
          {
            departure_date_time_utc: "2019-08-10T06:50:00.000Z",
            flight_number: "145",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T08:00:00.000Z",
            flight_number: "8543",
          },
          {
            departure_date_time_utc: "2019-08-10T18:00:00.000Z",
            flight_number: "8544",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T20:25:00.000Z",
            flight_number: "8545",
          },
          {
            departure_date_time_utc: "2019-08-10T05:35:00.000Z",
            flight_number: "8542",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T16:00:00.000Z",
            flight_number: "146",
          },
          {
            departure_date_time_utc: "2019-08-10T06:50:00.000Z",
            flight_number: "145",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T08:00:00.000Z",
            flight_number: "8543",
          },
          {
            departure_date_time_utc: "2019-08-10T06:50:00.000Z",
            flight_number: "145",
          },
        ],
      },
      {
        slices: [
          {
            departure_date_time_utc: "2019-08-08T07:55:00.000Z",
            flight_number: "2102",
          },
          {
            departure_date_time_utc: "2019-08-10T05:25:00.000Z",
            flight_number: "2101",
          },
        ],
      },
    ],
  },
};

const result = [
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T04:30:00.000Z",
        flight_number: "144",
      },
      {
        departure_date_time_utc: "2019-08-10T06:50:00.000Z",
        flight_number: "145",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T20:25:00.000Z",
        flight_number: "8545",
      },
      {
        departure_date_time_utc: "2019-08-10T18:00:00.000Z",
        flight_number: "8544",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T04:30:00.000Z",
        flight_number: "144",
      },
      {
        departure_date_time_utc: "2019-08-10T05:35:00.000Z",
        flight_number: "8542",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T16:00:00.000Z",
        flight_number: "146",
      },
      {
        departure_date_time_utc: "2019-08-10T18:00:00.000Z",
        flight_number: "8544",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T20:25:00.000Z",
        flight_number: "8545",
      },
      {
        departure_date_time_utc: "2019-08-10T06:50:00.000Z",
        flight_number: "145",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T08:00:00.000Z",
        flight_number: "8543",
      },
      {
        departure_date_time_utc: "2019-08-10T18:00:00.000Z",
        flight_number: "8544",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T20:25:00.000Z",
        flight_number: "8545",
      },
      {
        departure_date_time_utc: "2019-08-10T05:35:00.000Z",
        flight_number: "8542",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T16:00:00.000Z",
        flight_number: "146",
      },
      {
        departure_date_time_utc: "2019-08-10T06:50:00.000Z",
        flight_number: "145",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T08:00:00.000Z",
        flight_number: "8543",
      },
      {
        departure_date_time_utc: "2019-08-10T06:50:00.000Z",
        flight_number: "145",
      },
    ],
  },
  {
    slices: [
      {
        departure_date_time_utc: "2019-08-08T07:55:00.000Z",
        flight_number: "2102",
      },
      {
        departure_date_time_utc: "2019-08-10T05:25:00.000Z",
        flight_number: "2101",
      },
    ],
  },
];

module.exports = { source2, source1, result };
