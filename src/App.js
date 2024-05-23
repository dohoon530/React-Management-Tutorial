import React, { Component } from'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any/1',
  'name': 'John',
  'birthday': '001214',
  'gender': 'Male',
  'job': 'Student'
},
{
'id': 2,
  'image': 'https://placeimg.com/64/64/any/2',
  'name': 'Jane',
  'birthday': '900121',
  'gender': 'Female',
  'job': 'FT Worker'
},
{
'id': 3,
  'image': 'https://placeimg.com/64/64/any/3',
  'name': 'Ken',
  'birthday': '890618',
  'gender': 'Male',
  'job': 'PT Worker'
}

]


class App extends Component {
  render() {
    return (
      <div> 
        {
          customer.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
      </div>
   
    );
  }
}

export default App;
