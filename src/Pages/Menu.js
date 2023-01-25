import { useState, useEffect } from "react";
import { db } from "../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const collectionRef = collection(db, "Menu");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data(); // firestore guarda la informacion de cada documento en data()
          data.id = doc.id;
          return data;
        });

        setMenu(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
  }, []);

  console.log(menu);
  return (
    <div>
      <h1 className="text-center">Menu</h1>
      <div>
        {menu.map((plato) => (
          <div key={plato.id} style={{ color: "#880022" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={plato.image} alt={plato.name} />
              <Card.Body>
                <Card.Title>{plato.name}</Card.Title>
                <Card.Text>{plato.description}</Card.Text>
                <Button variant="primary">Price: ${plato.price}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
