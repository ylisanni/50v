import React, { useState } from "react";
import api from "../api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  starting_year: yup
    .number()
    .min(1900)
    .max(2022)
    .integer()
    .nullable(true)
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  email: yup.string().email().required(),
  is_asteriski_member: yup.string().required().oneOf(["yes", "no"]),
  is_alcohol_free: yup
    .string()
    .required()
    .oneOf(["Alkoholillinen", "Alkoholiton"]),
  menu: yup.string().required().oneOf(["VG", "LI", "KA"]),
  excretory_diets: yup.string(),
  is_attending_sillis: yup.string().required().oneOf(["yes", "no"]),
  avecs_name: yup.string(),
  other_info: yup.string(),
  show_name: yup.string().required().oneOf(["yes", "no"]).default("yes"),
  is_greeting: yup.string().required().oneOf(["yes", "no"]),
  party_representing: yup.string(),
  is_consenting: yup.string().required().oneOf(["yes", "no"]),
});

export default function Ilmoformi(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const resp = await api.post(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <div className="ilmoformi">
      <form onSubmit={handleSubmit(onSubmit)} name="ilmoformi">
        <div className="row">
          <div className="column six">
            <label>
              {props.lang === "en" ? "First name" : "Etunimi"}
              <span className="required"> *</span>
              <input {...register("first_name")} />
              <p className="valError">
                {errors.first_name
                  ? props.lang === "en"
                    ? "Check first name"
                    : "Tarkista etunimi"
                  : null}
              </p>
            </label>
          </div>

          <div className="column six">
            <label>
              {props.lang === "en" ? "Last name" : "Sukunimi"}
              <span className="required"> *</span>
              <input {...register("last_name")} />
              <p className="valError">
                {errors.last_name
                  ? props.lang === "en"
                    ? "Check last name"
                    : "Tarkista sukunimi"
                  : null}
              </p>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="column six">
            <label>
              {props.lang === "en"
                ? "Starting year of studies"
                : "Opiskelujen aloitusvuosi"}
              <input type="numer" {...register("starting_year")} />
              <p className="valError">
                {errors.starting_year
                  ? props.lang === "en"
                    ? "Check starting year"
                    : "Tarkista opiskelujen aloitusvuosi"
                  : null}
              </p>
            </label>
          </div>

          <div className="column six">
            <label>
              {props.lang === "en" ? "Email" : "Sähköposti"}
              <span className="required"> *</span>
              <input {...register("email")} />
              <p className="valError">
                {errors.email
                  ? props.lang === "en"
                    ? "Check email"
                    : "Tarkista sähköposti"
                  : null}
              </p>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="column six">
            <fieldset>
              <label>
                {props.lang === "en"
                  ? "Are you member of Asteriski?"
                  : "Oletko Asteriski jäsen?"}
                <span className="required"> *</span>
                <div className="radiot">
                  <label htmlFor="rad1">
                    <input
                      id="rad1"
                      type="radio"
                      {...register("is_asteriski_member")}
                      value="yes"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Yes" : "Kyllä"}
                    </span>
                  </label>
                </div>
                <div className="radiot">
                  <label htmlFor="rad2">
                    <input
                      id="rad2"
                      type="radio"
                      {...register("is_asteriski_member")}
                      value="no"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "No" : "En"}
                    </span>
                  </label>
                </div>
                <p className="valError">
                  {errors.is_asteriski_member
                    ? props.lang === "en"
                      ? "This is mandatory"
                      : "Valinta on pakollinen"
                    : null}
                </p>
              </label>
            </fieldset>
          </div>

          <div className="column six">
            <fieldset>
              <label>
                {props.lang === "en"
                  ? "Alcohol-free / Alcohol"
                  : "Alkoholiton / Alkoholillinen"}
                <span className="required"> *</span>
                <div className="radiot">
                  <label htmlFor="rad3">
                    <input
                      id="rad3"
                      type="radio"
                      {...register("is_alcohol_free")}
                      value="Alkoholiton"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Alcohol-free" : "Alkoholiton"}
                    </span>
                  </label>
                </div>
                <div className="radiot">
                  <label htmlFor="rad4">
                    <input
                      id="rad4"
                      type="radio"
                      {...register("is_alcohol_free")}
                      value="Alkoholillinen"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Alcohol" : "Alkoholillinen"}
                    </span>
                  </label>
                </div>
                <p className="valError">
                  {errors.is_alcohol_free
                    ? props.lang === "en"
                      ? "This is mandatory"
                      : "Valinta on pakollinen"
                    : null}
                </p>
              </label>
            </fieldset>
          </div>
        </div>

        <div className="row">
          <div className="column six">
            <fieldset>
              <label>
                {props.lang === "en" ? "Menu" : "Menu"}
                <span className="required"> *</span>
                <div className="radiot">
                  <label htmlFor="rad5">
                    <input
                      id="rad5"
                      type="radio"
                      {...register("menu")}
                      value="VG"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Vegetarian" : "Kasvis"}
                    </span>
                  </label>
                </div>
                <div className="radiot">
                  <label htmlFor="rad6">
                    <input
                      id="rad6"
                      type="radio"
                      {...register("menu")}
                      value="LI"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Meat" : "Liha"}
                    </span>
                  </label>
                </div>
                <div className="radiot">
                  <label htmlFor="rad7">
                    <input
                      id="rad7"
                      type="radio"
                      {...register("menu")}
                      value="KA"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Fish" : "Kala"}
                    </span>
                  </label>
                </div>
                <p className="valError">
                  {errors.menu
                    ? props.lang === "en"
                      ? "This is mandatory"
                      : "Valinta on pakollinen"
                    : null}
                </p>
              </label>
            </fieldset>
          </div>

          <div className="column six">
            <label>
              {props.lang === "en"
                ? "Special diets and allergies"
                : "Erityisruokavaliot ja allergiat"}
              <textarea {...register("excretory_diets")} />
              <p className="valError">
                {errors.excretory_diets
                  ? props.lang === "en"
                    ? "Invalid value"
                    : "Virheellinen arvo"
                  : null}
              </p>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="column six">
            <fieldset>
              <label>
                {props.lang === "en"
                  ? "Are you attending to the herring breakfast?"
                  : "Osallistutko silliaamiaiselle?"}
                <span className="required"> *</span>
                <div className="radiot">
                  <label htmlFor="rad8">
                    <input
                      id="rad8"
                      type="radio"
                      {...register("is_attending_sillis")}
                      value="yes"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Yes" : "Kyllä"}
                    </span>
                  </label>
                </div>
                <div className="radiot">
                  <label htmlFor="rad9">
                    <input
                      id="rad9"
                      type="radio"
                      {...register("is_attending_sillis")}
                      value="no"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "No" : "En"}
                    </span>
                  </label>
                </div>
                <p className="valError">
                  {errors.is_attending_sillis
                    ? props.lang === "en"
                      ? "This is mandatory"
                      : "Valinta on pakollinen"
                    : null}
                </p>
              </label>
            </fieldset>
          </div>
          <div className="column six">
            <label>
              {props.lang === "en"
                ? "Avecs name (NOTE! Avecs need to register separately)"
                : "Avecin nimi (HUOM! Avecin on ilmoittauduttava erikseen)"}
              <input {...register("avecs_name")} />
              <p className="valError">
                {errors.avecs_name
                  ? props.lang === "en"
                    ? "Check avecs name"
                    : "Tarkista avecin nimi"
                  : null}
              </p>
            </label>
          </div>
        </div>

        <div className="row">
          <div className="column six">
            <label>
              {props.lang === "en"
                ? "Table party wishes and other greetings"
                : "Pöytäseuruetoiveet ja muut terveiset"}
              <textarea {...register("other_info")} />
              <p className="valError">
                {errors.avecs_name
                  ? props.lang === "en"
                    ? "Invalid value"
                    : "Virheellinen arvo"
                  : null}
              </p>
            </label>
          </div>
          <div className="column six">
            <fieldset>
              <label>
                {props.lang === "en"
                  ? "My name can be shown in the list of those who registered"
                  : "Nimeni saa näkyä ilmoittautuneiden listassa"}
                <span className="required"> *</span>
                <div className="radiot">
                  <label htmlFor="rad11">
                    <input
                      checked
                      id="rad11"
                      type="radio"
                      {...register("show_name")}
                      value="yes"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "Yes" : "Kyllä"}
                    </span>
                  </label>
                </div>
                <div className="radiot">
                  <label htmlFor="rad10">
                    <input
                      id="rad10"
                      type="radio"
                      {...register("show_name")}
                      value="no"
                    />
                    <span className="radiothing">
                      {props.lang === "en" ? "No" : "Ei"}
                    </span>
                  </label>
                </div>
                <p className="valError">
                  {errors.show_name
                    ? props.lang === "en"
                      ? "This is mandatory"
                      : "Valinta on pakollinen"
                    : null}
                </p>
              </label>
            </fieldset>
          </div>
        </div>

        {props.invited ? (
          <div className="row">
            <div className="column six">
              <fieldset>
                <label>
                  {props.lang === "en"
                    ? "I want to offer my greetings"
                    : "Esitän tervehdyksen"}
                  <span className="required"> *</span>
                  <div className="radiot">
                    <label htmlFor="rad12">
                      <input
                        checked
                        id="rad12"
                        type="radio"
                        {...register("is_greeting")}
                        value="yes"
                      />
                      <span className="radiothing">
                        {props.lang === "en" ? "Yes" : "Kyllä"}
                      </span>
                    </label>
                  </div>
                  <div className="radiot">
                    <label htmlFor="rad13">
                      <input
                        id="rad13"
                        type="radio"
                        {...register("is_greeting")}
                        value="no"
                      />
                      <span className="radiothing">
                        {props.lang === "en" ? "No" : "En"}
                      </span>
                    </label>
                  </div>
                  <p className="valError">
                    {errors.is_greeting
                      ? props.lang === "en"
                        ? "This is mandatory"
                        : "Valinta on pakollinen"
                      : null}
                  </p>
                </label>
              </fieldset>
            </div>
            <div className="column six">
              <fieldset>
                <label>
                  {props.lang === "en"
                    ? "The entity you represent when greeting"
                    : "Tervehdyksessä edustamasi taho(t)"}
                  <input {...register("party_representing")} />
                  <p className="valError">
                    {errors.party_representing
                      ? props.lang === "en"
                        ? "Check the value"
                        : "Tarkista arvo"
                      : null}
                  </p>
                </label>
              </fieldset>
            </div>
          </div>
        ) : null}

        <div className="row">
          <div className="column twelve check">
            <label>
              <input
                {...register("is_consenting")}
                type="checkbox"
                value="yes"
              />
              {props.lang === "en"
                ? "I consent that the data entered is used to organize the 50th anniversary event. Data is removed after the event."
                : "Hyväksyn, että tietojani käytetään vuosijuhlien järjestämiseen. Tiedot poistetaan vuosijuhlien jälkeen."}
              <span className="required"> *</span>
              <p className="valError">
                {errors.is_consenting
                  ? props.lang === "en"
                    ? "This is mandatory"
                    : "Valinta on pakollinen"
                  : null}
              </p>
            </label>
          </div>
        </div>

        <div className="text-center">
          <button className="submit" type="submit">
            <>
              {loading ? (
                <span className="loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              ) : props.lang === "en" ? (
                "Register"
              ) : (
                "Ilmoittaudu"
              )}
            </>
          </button>
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
