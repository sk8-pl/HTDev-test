const getTimeDataApi = async () => {
  const timeZone = fetch(`https://worldtimeapi.org/api/timezone`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return timeZone;
};

export default getTimeDataApi;
