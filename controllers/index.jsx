const React = require('react')
const Def = requiere('./default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <p clasName="text-center">
            {place.cusines}
          </p>  
          <img src={place.pic} alt={place.name}/>
          <p clasName="text-center">
            Located in {place.city},{place.state}
         </p>   
        </div>
      )
    })
}
    return(
        <Def>
            <main>
                <h1>Places to Rant</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
module.export = index