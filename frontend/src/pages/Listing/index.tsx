import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { BASE_URL } from "utils/requests";

function Listing() 


     //FORMA ERRADA
      axios.get(`${BASE_URL}/movie?size=12&page=0`)
      .then(responde=> {
       console.log(responde.data);


      }); 



      

    return (
        <>

        <Pagination/>

        <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
            
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
            
          </div>  <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
            
          </div>  <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
            
          </div>  <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <MovieCard/>
            
          </div>         </div>


        </div>

        
        
    </>
    );
}

export default Listing;