import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '이승찬',
  'birthday': '921212',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '921212',
  'gender': '남자',
  'job': '직장인'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '아무개',
  'birthday': '921212',
  'gender': '남자',
  'job': '직장인'
}]

class App extends React.Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return(<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}  
              job={c.job}
            />);
          })
        }  
      </div>
    );
  }  
}

export default App;
