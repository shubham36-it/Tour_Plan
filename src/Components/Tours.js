import Card from "./Card";

function Tours({ tours, removeTour }) {
  return (
    <div className="container">
      {/* heading */}
      <div>
        <h2 className="title">Plan With Shubh</h2>
      </div>
      {/* content */}
      <div className="cards">
        {}
        {}
        {
            tours.map((tour) => {
            return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>;
           })
        }
      </div>
    </div>
  );
}

export default Tours;
