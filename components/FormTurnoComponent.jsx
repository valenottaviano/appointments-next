import React , {useState} from 'react'
import ButtonComponent from './ButtonComponent'
import axios from 'axios'
import  Link  from 'next/link'

export default function FormTurnoComponent(props) {
  const [name ,setName] = useState('')
  const [surname ,setSurname] = useState('')
  const [phone ,setPhone] = useState('')
  const [email ,setEmail] = useState('')
  const [service ,setService] = useState('')
  const [ready , setReady] = useState(false)

  if(!name || !surname || !phone || !email || !service || !props.timeSelected || ready){
  }else{
    setReady(true)
  }


  const handleOnFormSubmit = async (e)=>{
    e.preventDefault()
    let dateQuery = props.dateSelected.toLocaleDateString().replace('/','').replace('/','')
    const res = await axios.post (`/api/turnos`,
    {name:name,
    surname:surname,
    phoneNumber: String(phone),
    email: email,
    service: service,
    date: props.dateSelected.toLocaleDateString(),
    dateQuery: dateQuery,
    time: props.timeSelected
    })
  }
    return (
        <form  onSubmit={handleOnFormSubmit}>
          <label>Nombre</label>
          <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <label>Apellido</label>
          <input type="text" name="surname" value={surname} onChange={(e)=>{setSurname(e.target.value)}} />
          <label>Número de Teléfono</label>
          <input type="tel" name="phoneNumber" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
          <label>Email</label>
          <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <label>Servicio</label>
          <select name="servicio" onChange={(e)=>{setService(e.target.value)}}>
            <option value="" selected={true} disabled>
              Seleccioná un servicio
            </option>
            <option value="esmaltadoSemipermanente" >
              Esmaltado Semipermanente
            </option>
            <option value="esmaltadoSemipermanente">
              Esmaltado Semipermanente
            </option>
            <option value="esmaltadoSemipermanente">
              Esmaltado Semipermanente
            </option>
            <option value="esmaltadoSemipermanente">
              Esmaltado Semipermanente
            </option>
          </select>
          {ready ? <Link href="/success"><button type="submit" >Confirmar Turno</button></Link> : ""}
          
          <style jsx>{`
              form {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background-color: #edf8ff;
                padding: 3rem;
                min-width: 40%
              }
              form label {
                margin: 2rem 0rem 1rem 0rem;
                font-weight: 700;
                color: #09215d;
              }
              form input {
                width 100%;
                border: none;
                border-radius: 30px;
                padding: 0.8rem 1rem;
              }
              form select {
                border: none;
                padding: 0.8rem 1rem;
                margin-bottom: 3rem;
              }
              button{
                  padding: 0.8rem 2rem;
                  color:white;
                  background-color: #0078FF;
                  border: none;
                  cursor:pointer;
                  font-family: 'Nunito';
                  font-weight: 600;
                  font-size: 1rem;
              }
              .button-disabled{
                padding: 0.8rem 2rem;
                  color: #424242;
                  background-color: #E1E1E1;
                  border: none;
                  cursor:pointer;
                  font-family: 'Nunito';
                  font-weight: 600;
                  font-size: 1rem;
              }
      `}</style>
      <style jsx>
        {`
              
                `}</style>    
        </form>
    )
}
