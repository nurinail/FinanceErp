import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.svg";
import style from "./loginSignUp.module.scss";
import { useForm } from "react-hook-form";
import type { LoginType } from "../../types/types";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useState } from "react";

const LoginSignUp = () => {
  const users=useSelector((state:RootState)=>state.login.users);
  const navigate=useNavigate();
  const [isCorrect,setIsCorrect]=useState<boolean>(false)
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<LoginType>({
      mode:"onSubmit",
      defaultValues:{
      }
    });
    const onSubmit=(data:LoginType)=>{
      users.map((item:LoginType)=>{
        if(item.username===data.username && item.password===data.password){
          navigate("/history");
          setIsCorrect(false)
        }else{
          setIsCorrect(true)
        }
      })
    }
  return (
    <div className={style.loginSignUp}>
      <div className={style.loginSignUp}>
        <div className={style.loginSignUp_box}>
          <img
            className={style.loginSignUp_box_img}
            src={logo}
            alt="logo"
          />
          <form onSubmit={handleSubmit(onSubmit)} className={style.loginSignUp_box_form}>
            <h2 className={style.loginSignUp_box_form_title}>Login</h2>
            <div className={style.loginSignUp_box_form_item}>
              <label
                className={style.loginSignUp_box_form_item_label}
                htmlFor="username">
                Username
              </label>
              <input
                className={style.loginSignUp_box_form_item_input}
                type="text"
                id="username"
                placeholder="username daxil edin"
                {...register("username", {
                required: {
                  value: true,
                  message: "username adı daxil edin!",
                },
              })}/>
              <p style={{color:"red"}}>{errors.username?.message}</p>
            </div>
            <div className={style.loginSignUp_box_form_item}>
              <label
                className={style.loginSignUp_box_form_item_label}
                htmlFor="password">
                Password
              </label>
              <input
                className={style.loginSignUp_box_form_item_input}
                type="password"
                placeholder="Password"
                id="password"
                {...register("password", {
                required: {
                  value: true,
                  message: "password daxil edin!",
                },
              })}/>
              <p style={{color:"red"}}>{errors.password?.message}</p>
            </div>
            <p className={style.isCorrectt}>{isCorrect?"username və ya şifrə səhvdir":null}</p>
            <div className={style.loginSignUp_box_form_link}>
            <Link
              className={style.loginSignUp_box_form_link_item}
              to={"/login"}>
              Şifrəni unutmusan?
            </Link>
            <Link
              className={style.loginSignUp_box_form_link_item}
              to={"/signup"}>
              Yeni hesab yarat
            </Link>

            </div>
            <button
              className={style.loginSignUp_box_form_btn}
              type="submit"
            >
              Giriş
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
