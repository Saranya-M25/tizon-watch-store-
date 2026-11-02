import topSeller from "../../data/topSeller";
import Watchcard from "../../components/watchcard/Watchcard";

const Products = () => {

  return (
    <>
    <div>
      <h1 className="heading-font pt-4 ps-4 pb-4 ms-4">
        Latest Release

      </h1>
    </div>
      <div className=" mencard">

        {topSeller.map((product) => (
          <div  key={product.id}>
            <Watchcard
              product={product}
            />
          </div>
        ))}

      </div>
      </>
  );
};

export default Products;


