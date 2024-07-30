import axios from "axios";


const API_KEY ='AIzaSyCL-TBn48kt7jpaAhWGtWpLoXyFLSJm4Ec'


// export const authenticate = async (mode, password, email) => {
//   const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

//   const res = await axios.post(url,
//     {
//       email: email,
//       password: password,
//       returnSecureToken: true
//     })

//   console.log(res.data)
// }

export const createUser = async (email, password) => {
  const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
  )
}

export const login = async (email, password) => {
  const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY,
   {
    email: email,
    password:password,
    returnSecureToken: true
  }
  )
  console.log(res.data)
}
