/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="card-title">{name}!</h2>
              <p>{details}</p>
              <p>{quantity}</p>
              <p>{supplier}</p>
            </div>
            <div className="card-actions justify-end">
              <div className="btn-group btn-group-vertical space-y-1">
                <button className="btn ">View</button>
                <button className="btn">Update</button>
                <button className="btn">X</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
