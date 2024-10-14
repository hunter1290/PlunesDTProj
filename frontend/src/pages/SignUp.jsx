import React,{useState} from 'react'
import styled from 'styled-components'
import authImage from '../assets/authImage.png'
import logo from '../assets/logo.png'
import { userContext } from '../context/context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
  
  const [userID,setUserID] = useState('');
  const [password,setPassword] = useState('');
  const [number,setNumber] = useState('');
  
  const Navigate = useNavigate();
  const userValue = useContext(userContext);

  const handleLogin = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicate JSON request
        },
        body: JSON.stringify({
          username: userID, 
          number: number,
          password: password,
        }),
      });
  
      if (!res.ok) {
        alert("Invalid Cred!!! Try Again")
        throw new Error(`Login failed: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json(); // Parse the response as JSON
      // console.log("Login successful:", data);
      userValue.setUser({
        "userName":userID,
        "number":number,
        "token":data.token
      })
      sessionStorage.setItem('user',data.token)
      Navigate('/')
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  
  return (
     <Main>
          <Left>
             <Logo src={logo}/>
             <AuthImage src={authImage}/>
             <Dummy></Dummy>
            </Left> 
            <Right>
             <Intro>Welcome To <span>Plunes AWC</span></Intro>
             <IntroAnother>Log-in To your Account</IntroAnother>

             <Details>
                 <p>User ID</p>
                 <input type="text" onChange={e=>{setUserID(e.target.value)}}/>
             </Details>

             <Details>
                 <p>Mobile No</p>
                 <input type="text" onChange={e=>{setNumber(e.target.value)}}/>
             </Details>
             <Details>
                 <p>Password</p>
                 <input type="password"  onChange={e=>{setPassword(e.target.value)}}/>
                 <p style={{"textAlign":"right"}}>Forgot Password ?</p>
             </Details>

             <LoginButton onClick={handleLogin}> Log In</LoginButton>

            </Right> 
     </Main>
  )
}


const Main = styled.div`
height: 100vh;
 display: grid;
 grid-template-columns: 40% 60%;
 font-family:'popins';`
;

const Left = styled.div`
 display: flex;
 flex-direction: column;
 gap: 25px;

`;
const Logo = styled.img`
padding: 20px;
width: 12vw;
`
;
const AuthImage = styled.img`
z-index: 2;
width: 36vw;
margin-left: 30%;
`
;
const Dummy = styled.div`
background-color: #F3FFDA;
position: absolute;
bottom: 1px;
height: 40vh;
width: 20vw;
border-top-right-radius: 5000px;
border-top-left-radius: 5000px;
border-bottom-right-radius: 3000px;
`;

const Right  = styled.div`
  background: #F3FFDA;
border-bottom-left-radius: 600px;
border-top-left-radius: 1000px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column  ;

`;

const Intro = styled.p`
  text-align: center;
font-size: 36px;
font-weight: 600;

span{
  color: #00A82E;
}
`

;
const IntroAnother = styled.p`
  
  text-align: center;
font-size: 20px;
font-weight: 600;
`

;

const Details  = styled.div`
  display: flex;
flex-direction: column;
p{
  size: 12px;
  line-height: 18px;
  font-weight: 500;
}

input{
  padding: 4px 4px 4px 20px;
  border: 1px solid #8AC0FF;
  border-radius: 10px;
  height: 60px;
  width: 30vw;
}
`
;
const LoginButton = styled.button`
cursor: pointer;
  width: 30vw;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color:  #00A82E;
  color: white;
  font-weight: 600;
  font-size: 20px;
` 
;