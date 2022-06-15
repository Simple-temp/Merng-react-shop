import { gql } from "@apollo/client";

export const GET_ALL_USER = gql `

query getAllUser{
    users{
      _id
      name
      email
      password
      isAdmin
    }
  }

`

export const GET_USER_BY_ID = gql `

query getUserById ( $userId : ID! ) {
    user (_id : $userId){
      _id
      name
      email
      password
      isAdmin
    }
  }

`

export const GET_ALL_COURSE = gql `

query getAllCousre {
    courses{
      _id
      name
      quantity
      category
      img
      description
      totalsell
      rating
      price
    }
  }

`

export const GET_COURSE_BY_ID = gql `

query getCourseById ( $courseId : ID! ){
    course (_id: $courseId){
      _id
      name
      quantity
      category
      img
      description
      totalsell
      rating
      price
    }
  }

`

export const GET_ALL_ORDER = gql `

query getAllOrders {
    orderitem{
      _id
      userid
      orderitem{
          _id
          name
          quantity
          category
          img
          description
          totalsell
          rating
          price
      }
      paymentMethod
      itemprice
      totalPrice
      isPaid
      paidAt
      isSelled
      sellAt
    }
  }  

`
export const GET_ORDER_BY_ID = gql `

query getOrderById ( $orderId : ID! ){
    orderitemById (_id : $orderId){
      _id
      userid
      orderitem{
         _id
        name
        quantity
        category
        img
        description
        totalsell
        rating
        price
      }
      paymentMethod
      itemprice
      totalPrice
      isPaid
      paidAt
      isSelled
      sellAt
    }
  }
  
`
