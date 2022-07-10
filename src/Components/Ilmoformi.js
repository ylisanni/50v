import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    starting_year: yup.number().min(1900).max(2022).integer(),
    email: yup.string().email(),
    is_asteriski_member: yup.boolean(),
    is_alcohol_free: yup.boolean(),
    is_vege: yup.boolean(),
    excretory_diets: yup.string(),
    is_attending_sillis: yup.boolean(),
    avecs_name: yup.string(),
    other_info: yup.string(),
    is_greeting: yup.boolean(),
    party_representing: yup.string(),
    is_consenting: yup.boolean(),
  })
  .required();

export default function Ilmoformi() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="ilmoformi">
      <form onSubmit={handleSubmit(onSubmit)} name="ilmoformi">
        <div className="row">
          <div className="column six">
            <label>
              Etunimi <span className="required">*</span>
              <input {...register("first_name")} />
            </label>
          </div>

          <div className="column six">
            <label>
              Sukunimi <span className="required">*</span>
              <input {...register("last_name")} />
            </label>
          </div>
        </div>

        <div className="row">
          <div className="column six">
            <label>
              Opiskelujen aloitusvuosi
              <input type="numer" {...register("starting_year")} />
            </label>
          </div>

          <div className="column six">
            <label>
              Sähköposti <span className="required">*</span>
              <input {...register("email")} />
            </label>
          </div>
        </div>

        <div className="row">
          <div className="column six">
            <label>
              Oletko Asteriskin jäsen?
              <input type="numer" {...register("is_asteriski_member")} />
            </label>
          </div>

          <div className="column six">
            <label>
              Alkoholiton / Alkoholillinen <span className="required">*</span>
              <input {...register("is_alcohol_free")} />
            </label>
          </div>
        </div>

        <div>
          <input className="submit" type="submit" />
          <span id="image-loader">
            <img alt="" src="images/loader.gif" />
          </span>
        </div>
      </form>

      <div id="message-warning"> Error</div>
      <div id="message-success">
        <i className="fa fa-check"></i>Your message was sent, thank you!
        <br />
      </div>
    </div>
  );
}
