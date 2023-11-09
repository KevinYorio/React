
export const Character = ({name, image}) => {
return (
    <div className="border border-3 p-3 d-flex flex-column m-2">
        <p>Nombre: {name}</p>
        <img src={image} alt="foto" />
    </div>
)
}
