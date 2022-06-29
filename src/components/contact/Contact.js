import React, { useRef, useState, useEffect } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";

function Contact() {
  const [show, setShow] = useState(true)
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [fail, setFail] = useState(false);
  const initialValues = {
    user_name: "",
    user_email: "",
    message: "",
    user_subject: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      enviar()
    }
  }, [formErrors, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.user_name) {
      errors.user_name = "Preencher o campo nome!";
    }
    if (!values.user_email) {
      errors.user_email = "Preencher o campo email!";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "Email com formato incorreto!";
    }
    if (!values.user_subject) {
      errors.user_subject = "Preencher o campo assunto!";
    }
    if (!values.message) {
      errors.message = "Preencher o campo da mensagem!";
    }
    return errors;
  };
  function enviar() {
    emailjs
        .sendForm(
          "service_id",
          "template_id",
          formRef.current,
          "user_id"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setFormValues({user_name: "", user_email: "", message: "", user_subject: ""})
          },
          (error) => {
            console.log(error.text);
            setFail(true);
          }
        )
  }
  if(done) {
    setTimeout(() => {
      setShow(false)
    }, 2000);
  }
  if(fail) {
    setTimeout(() => {
      setShow(false)
    }, 2000);
  }
  if(show === false) {
    setTimeout(() => {
      setShow(true)
      setDone(false)
      setFail(false)
    },2000)
  }
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-title">Contato</div>
          <div className="contact-img">
            <AiOutlineMail size="7rem" color="white" />
          </div>
        </div>
        <div className="contact-form">
          <form
            className="contact-f-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              className="contact-input"
              type="text"
              placeholder="Nome"
              name="user_name"
              value={formValues.user_name}
              onChange={handleChange}
            />
            <input
              className="contact-input"
              type="text"
              placeholder="Assunto"
              name="user_subject"
              value={formValues.user_subject}
              onChange={handleChange}
            />
            <input
              className="contact-input"
              type="text"
              placeholder="Email"
              name="user_email"
              value={formValues.user_email}
              onChange={handleChange}
            />
            <div className="contact-text">
              Colocar um endereço de e-mail válido para eu responder sua
              mensagem
            </div>
            <textarea
              className="contact-area"
              rows={5}
              placeholder="Mensagem"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            <div className="btn-validation-area">
              <button className="btn-contact">Enviar</button>
              <div className="validation-msg">
                {formErrors.user_name && (
                  <div className="div-try f">{formErrors.user_name}</div>
                )}
                {formErrors.user_subject && (
                  <div className="div-try f">{formErrors.user_subject}</div>
                )}
                {formErrors.user_email && (
                  <div className="div-try f">{formErrors.user_email}</div>
                )}
                {formErrors.message && (
                  <div className="div-try f">{formErrors.message}</div>
                )}
                {done && show && <div className="div-try t">Enviado com sucesso!</div>}
                {fail && show && <div className="div-try f">Falha ao enviar!(Tente Novamente!! Caso o erro persistir o limite mensal de envio foi atingido. Linkedin no Rodapé )</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
