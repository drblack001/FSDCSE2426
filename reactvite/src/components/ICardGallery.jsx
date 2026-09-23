import React from 'react'
import ICard from './Icard'


function ICardGallery() {
  const student=[{
    college:'Abes EC',
    roll:'879',
    name:'Rajat',
    Branch:'CSE'
  },
  {
    college:'Abes EC',
    roll:'879',
    name:'Rajat',
    Branch:'CSE'
  },
  {
    college:'Abes EC',
    roll:'879',
    name:'Rajat',
    Branch:'CSE'
  }]
  return (
    <div>
        {/* <ICard college="ABES Engineering College" pic = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" roll = "880" name = "Rajat" branch = "CSE"  />
        <ICard college = "ABES ENGINEERING COLLEGE" roll = "880" name="Rajat" branch = "CSE" />
        <ICard college = "ABES ENGINEERING COLLEGE" roll = "880" name="Rajat" branch = "CSE" />
        <ICard college = "ABES ENGINEERING COLLEGE" roll = "880" name="Rajat" branch = "CSE" /> */}
        {/* <ICard data={student}/> */}
        {
          student.map((ele)=>(
            <Icard data={ele}/>
          ))
        }
    </div>
  )
}

export default ICardGallery
