import {useEffect, useState} from 'react';

export default () => {
  const [response, setResponse] = useState();

  const getBackupData = () => fetch('/backupData.json')
    .then(resp => resp.json())
    .then(resp => setResponse(resp));

  useEffect(() => {
    fetch('https://knxhx.richdataservices.com/rds/api/catalog/money/pilot_recipients/variables')
        .then(resp => resp.json())
        .then(resp => {
          const columnKeys = resp.map( column => column.id );

          fetch('https://knxhx.richdataservices.com/rds/api/query/money/pilot_recipients/select?limit=200')
            .then(rowResp => rowResp.json())
            .then(rowResp => {
              setResponse(rowResp.records.map(record =>
                Object.fromEntries(columnKeys.map((key, index) => [key, record[index]]))));
            }).catch(err => getBackupData());
        }).catch(err => getBackupData());
  }, []);

  return response;
}
