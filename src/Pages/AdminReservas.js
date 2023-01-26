import { collection, getDocs } from "firebase/firestore";
import {useState, useEffect} from 'react';
import { db } from "../Config/Firebase";
import { Table, Button } from "react-bootstrap";


const AdminReservas = () => {
  const [reservas, setReservas] = useState([])

  useEffect(() => {

   
      const getReservas = async() => {
      try {
        const collectionRef = collection(db, 'Reservas')
        const response = await getDocs(collectionRef)
  
        const docs = response.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        })
  
        setReservas(docs)
      
      } catch (error) {
        console.log(error)
      }
    }
     
    getReservas()

  }, [])


  return (
    <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Email</th>
            <th>Fecha de Reserva</th>
            <th>Mesa Reservada</th>
            <th>Accion</th>
          </tr>
        </thead>

        {reservas.map(reserva => (
          <tbody key={reserva.id}>
            <td>{reserva.id}</td>
            <td>{reserva.name}</td>
            <td>{reserva.email}</td>
            <td>{reserva.fecha}</td>
            <td>{reserva.mesa}</td>
            <td>
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Eliminar</Button>
            </td>
            
          </tbody>
        ))}
      </Table>
    </div>
  )
}

export default AdminReservas;