

import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-router-dom';
import{ RestaurantListAction} from '../Actions/restuarentAction'
import { useDispatch,useSelector } from 'react-redux';


function Restaurantlist() {
   
const dispatch=useDispatch()
const result=useSelector(state=>state.restaurantReducer)
const {restaurantList}=result

  useEffect(()=>{
    dispatch( RestaurantListAction(
      
    ))
    // getrestaurantdata()
  },[])

  return (
    <Row>{
      
      restaurantList.map(item=>(
     <RestCard  data={item}/>
    ))  
      }
        
    </Row>
  )
}

export default Restaurantlist





