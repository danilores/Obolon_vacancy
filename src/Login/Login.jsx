import { useState, useEffect } from 'react'
import { render } from 'react-dom'
import ObolonAPI from '../../services/ObolonAPI';
import './Login.css'
import "/obolon_png.png"

// bring to ui components

const FormInput = ({ title = 'untitled', type = 'txt', required = false, value, setValue, children = null }) => {
  return (
    <div className="input-container">
      <label>{title}</label>
      <input value={value} onChange={e => setValue(e.target.value)} type={type} required={required} />
      {children}
    </div>
  )
}

function Login () {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState({status: false, message: ''});

    useEffect(() => {
      if (isError.status === true) {
        setTimeout(() => setIsError({status: false, message: ''}), 3000)
      }
    }, [isError]);
  
    // Дамми данные авторизации
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
  
    const handleSubmit = async(event) => {
      event.preventDefault();
  
      // var { uname, pass } = document.forms[0];
      // email: '1234567', role: 'user', userName: 'tsar', pass: 'zxc'
      
      setIsLoading(true);
      const answer = await ObolonAPI.login({email: email, role: 'user', userName: 'tsar', pass: password});

      // const answer = await ObolonAPI.register();
      
      if (answer && answer !== 'Wrong user or password') {
        // login success
        // need to create custom hook, that will save \ get token to \ from localstorage
        localStorage.setItem('TOKEN', answer);
        console.log(answer);        
        setIsLoading(false);
        setIsSubmitted(true);
      } else {
        // setErrorMessages({ name: "Error", message: `${answer}` });
        setIsError({status: true, message: answer})
        setIsLoading(false);
      }

  
      // Find user login info(чисто пока бд нет тестить)
      // const userData = database.find((user) => user.username === uname.value);
  
      // Проверка данных входа
      // if (userData) {
      //   if (userData.password !== pass.value) {
      //     setErrorMessages({ name: "err", message: "Невірний e-mail або пароль" });
      //   } else {
      //     setIsSubmitted(true);
      //   }
      // } else {
      //   setErrorMessages({ name: "err", message: "Невірний e-mail або пароль" });
      // }
    };
  
    // Код ошибки
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

    // основная форма при авторизации
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* email type must be "email" */}
        <FormInput title='email' type='txt' required value={email} setValue={setEmail} />
        <FormInput title='password' type='password' required value={password} setValue={setPassword}>
          {isError.status
           ? isError.message
           : null
          }
          {isLoading
           ? 'Loading...'
           : null
          }
        </FormInput>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
              <img src='obolon_png.png' width="188px" lenght="120px"/>
      <div className="login-form">
        <div className="title">Авторизація</div>
        {isSubmitted ? <div>Юзер вошёл</div> : renderForm}
      </div>
    </div>
  );
}

export default Login