import styles from "./OrderForm.module.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function OrderForm() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    
    try {
        const response = await fetch('http://localhost:3333/order/send  ', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          console.log('Запрос успешно отправлен!');
          
        } else {
          console.error('Ошибка при отправке запроса:', response.statusText);
          
        }
      } catch (error) {
        console.error('Ошибка при отправке запроса:', error.message);
        
      }
    
  };
  return (
    <>
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className={styles.field} placeholder={"Name"}
                {...register("name", { required: true })}
              />
              {errors.name && <span><br></br>Поле обязательно</span>}
            </div>

            <div>
              <input
                className={styles.field} placeholder={"Phone number"}
                type="tel"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span><br></br>Поле обязательно</span>}
            </div>

            <div>
              <input
                className={styles.field} placeholder={"Email"}
                type="email" 
                {...register("email", { required: true })}
              />
              {errors.email && <span><br></br>Поле обязательно</span>}
            </div>

            <button className={styles.button} type="submit">
              Order
            </button>
          </form>
        </div>
    </>
  );
}
