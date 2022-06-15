import { gql } from "@apollo/client";

export const SIGNUP_USER = gql `

mutation signupuser ( $signupuser : signUpUser! ){
    user : signup(signUpUser: $signupuser){
      name
      email
      password
    }
  }

`

export const SIGNIN_USER = gql `

mutation signinuser ( $signIn : SignInUser! ){
  user : signin(SignInUser : $signIn){
    email
    password
  }
}

`

export const DELETE_USER = gql `

mutation deleteUser ( $userId : ID! ){
    deluser(_id : $userId){
      _id
      name
      email
      password
      isAdmin
    }
  }

`

export const UPDATE_USER = gql `

mutation updateuser ( $updateUser : UpdateUser! ){
    updateUser (UpdateUser : $updateUser){
      _id
      name
      email
      password
      isAdmin
    }
  }

`

export const CREATE_COURSE = gql `

mutation createCourse ( $createcourse : createCourse! ){
    createcourse(createCourse : $createcourse){
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

export const DELETE_COURSE = gql `

mutation deletecourse ( $courseId : ID! ){
    delcourse (_id : $courseId){
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

export const UPDATE_COURSE= gql `

mutation updateCourse ( $updateCourse : UpdateCourse! ){
    updateCourse(UpdateCourse : $updateCourse){
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

export const DELETE_ORDER = gql `

mutation deleteOrder ( $orderId : ID! ) {
    delorder(_id : $orderId){
      _id
      userid
      orderitem{
          course_id
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

