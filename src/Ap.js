import React, { useEffect, useState } from 'react';

const Hello = () => {

     const [userData,setUserData]=useState([]);

     useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/comments")
      .then((result)=> result.json ())
      .then((result)=>{
         setUserData(result);
      });
     },[]);
     
     
    return(

      <div className="container mt-5">
         <table className="table table-strip table-dark table-bordered table-hover">
         <thead>
            <tr>
               <th>postId</th>
               <th>id</th>
               <th>name</th>
               <th>email</th>
               <th>body</th>
               
            </tr>
            </thead>

         <tbody >
           {userData.map(({postId,id,name,email,body},index)=>(
               <tr>
                  <td key={id}>{postId}</td>
                  <td key={id}>{id}</td>

                  <td key={id}>{name}</td>
                  <td key={id}>{email}</td>
                  <td key={id}>{body}</td>
               </tr>
            ))}
         </tbody>

               
            
         </table>
      </div>

    )
            }

export default Hello;