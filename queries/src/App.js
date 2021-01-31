import ApolloClient, { gql } from 'apollo-boost';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

    const client = new ApolloClient({
      uri: 'https://countries.trevorblades.com',
    });

    client 
    .query({
      query: gql`
      {
        countries {
          code,
          name, 
          continent {name},
        }
      }
      `
    })
    .then(result => setCountries(result.data.countries));
    
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <th>Code</th>
          <th>Country</th>
          <th>Continent</th>
        </thead>
        <tbody>
          {countries.map((country, index) => 
            <tr key={index}>
              <td>{country.code}</td>
              <td>{country.name}</td>
              <td>{country.continent.name}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
