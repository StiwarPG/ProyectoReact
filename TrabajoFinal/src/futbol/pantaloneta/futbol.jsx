import React, { useEffect, useState } from "react";
import { CardInfoComp } from "../../cartas/card";
import { CartaAmpliada } from "../../cartas/max";
import "../../estilos/cartas/style.css";

export function AppMultiple() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedShirt, setSelectedShirt] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/api/productos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener los datos de la API");
                }
                return response.json();
            })
            .then((data) => {

                const productosConPrecioNumerico = data.map((producto) => ({
                    ...producto,
                    precio: Number(producto.precio),
                }));
                setProductos(productosConPrecioNumerico);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleMoreInfo = (shirt) => setSelectedShirt(shirt);
    const closeShirtInfo = () => setSelectedShirt(null);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    const productosFiltrados = productos.filter(
        (producto) =>
            producto.categoria === "pantaloneta" && producto.section === "futbol"
    );

    return (
        <div className="app-container">
            <header className="header">
                <div className="icon-basketball"></div>
                <h1>Pantalonetas</h1>
                <div className="icon-basketball"></div>
            </header>
            <div className="card-container">
                {productosFiltrados.map((producto) => (
                    <CardInfoComp
                        key={producto._id}
                        {...producto}
                        onMoreInfo={() => handleMoreInfo(producto)}
                    />
                ))}
            </div>

            {selectedShirt && (
                <CartaAmpliada
                    shirt={selectedShirt}
                    closeShirtInfo={closeShirtInfo}
                />
            )}
        </div>
    );
}

