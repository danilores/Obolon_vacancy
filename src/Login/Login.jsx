import { useState } from 'react'
import { render } from 'react-dom'
import './Login.css'
import "/obolon_png.png"
function Login(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
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
  
    const handleSubmit = (event) => {
      //Что бы страница не перезапускалась
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info(чисто пока бд нет тестить)
      const userData = database.find((user) => user.username === uname.value);
  
      // Проверка данных входа
      if (userData) {
        if (userData.password !== pass.value) {
          setErrorMessages({ name: "err", message: "Невірний e-mail або пароль" });
        } else {
          setIsSubmitted(true);
        }
      } else {
        setErrorMessages({ name: "err", message: "Невірний e-mail або пароль" });
      }
    };
  
    // Код ошибки
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
    // основная форма при авторизации
      const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>E-mail </label>
              <input type="text" name="uname" required />
               </div>
            <div className="input-container">
              <label>Пароль</label>
              <input type="password" name="pass" required />
              {renderErrorMessage("err")}
            </div>
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