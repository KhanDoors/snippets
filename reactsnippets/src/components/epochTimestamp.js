// https://www.epochconverter.com/
// https://www.epochconverter.com/programming/#javascript

// get coin history from api call

const coinTimestamp = [];

for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  coinTimestamp.push(
    new Date(
      coinHistory?.data?.history[i].timestamp * 1000
    ).toLocaleDateString()
  );
}
