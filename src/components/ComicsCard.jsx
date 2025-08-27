const ComicsCard = ({ img, title }) => {
  return (
    <div className="card-col" >
      <div>
        <div>
          <img src={img} alt={title} />
        </div>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default ComicsCard;