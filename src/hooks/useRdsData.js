import {useEffect, useState} from 'react';

export default () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    Promise.all([
      fetch('/backupData.json').then(resp => resp.json()),
      fetch('/latlon.json').then(resp => resp.json())
    ]).then(resp => {
      const newStore = resp?.[0]?.map(place => {
        const loc = resp?.[1]?.find(location => location.name === place.project_name);
        return {
          ...place,
          lat: loc.lat,
          lng: loc.lng,
        };
      });
      setResponse(newStore);
    });
  }, []);

  return response;
}
