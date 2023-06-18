import React from 'react'
import axios from 'axios';
import Nav from './NavBar'
/*
id, firstname,  lastname, age, gender, email, phone, username, birthDate, image, height, weight, 
address:{city, coordinates : {lat, lng}}, bank: {cardExpire}, company : {name}
*/

const Display = () => {
  const Displaying = () => {
    axios.get('https://dummyjson.com/users')
      .then((res) => {
        // handle success
        if (res.status === 200) {
          var s = res.data.users;
          for (var i = 0; i < 30; i++) {
            var dis = document.getElementById("show-data").innerHTML
            // var value = s[i].firstName + " " + s[i].lastName;
            // document.getElementById("show-data").innerHTML = dis + '<li>(\'' + value + '\')</li>'
            document.getElementById("show-data").innerHTML = dis + `<tr>
            <td>${s[i].id}</td>
            <td>${s[i].firstName}</td>
            <td>${s[i].lastName}</td>
            <td>${s[i].age}</td>
            <td>${s[i].gender}</td>
            <td>${s[i].email}</td>
            <td>${s[i].phone}</td>
            <td>${s[i].username}</td>
            <td>${s[i].birthDate}</td>
            <td>${s[i].image}</td>
            <td>${s[i].height}</td>
            <td>${s[i].weight}</td>
            <td>${s[i].address.city}</td>
            <td>${s[i].address.coordinates.lat}</td>
            <td>${s[i].address.coordinates.lng}</td>
            <td>${s[i].bank.cardExpire}</td>
            <td>${s[i].company.name}</td>
            </tr>
            `
          }
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });

  }
  const Hide = () => {
    document.getElementById("show-data").innerHTML = `<tr>
    <th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Email</th>
    <th>Phone</th>
    <th>UserName</th>
    <th>DOB</th>
    <th>Image</th>
    <th>Height</th>
    <th>weight</th>
    <th>City</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Card Expire</th>
    <th>Company Name</th>
  </tr>`
  }


  return (
    <div className='m-auto'>
      <Nav />
      <div className='m-auto'>
        <center><h1> Display the First and the Last Name</h1></center>
        <center><button onClick={Displaying} className='btn btn-info btn-group-toggle my-2'>Display the data</button></center>
        <center><button onClick={Hide} className='btn btn-dark btn-group-toggle my-2'>Hide the data</button></center>
        <table className='table-sm table-info m-auto table-hover g-5' id='show-data' style={{fontSize:'10px'}}>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UserName</th>
            <th>DOB</th>
            <th>Image</th>
            <th>Height</th>
            <th>weight</th>
            <th>City</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Card Expire</th>
            <th>Company Name</th>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Display