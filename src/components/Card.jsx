const Card = ({ props, onDelete }) => {
    return (
        <>
           <div className='card' key={props.id}>
                <p>{props.text}</p>
                <button className="delete-button" onClick={(event) => { event.preventDefault(); onDelete(props.id); }}>Delete</button>
              </div>
        </>
    )
}

export default Card;