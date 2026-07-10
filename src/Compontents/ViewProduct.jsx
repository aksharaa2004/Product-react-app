import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewProduct = () => {
    const [data, changeData] = useState(
        [
            {"name":"SummerFridays","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDN-VIhyxAv-hKIUIqk9eJiunoplEISQFu8RWuf-GEg&s=10","Category":"skin Care","price":350},
            {"name":"Body Lotion","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iwP72PJvDdnqOVMZuH6fsvQE1C1aQE5DS-DZ7GVVVw&s=10","Category":"skin Care","price":350},
            {"name":"Serum","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfRqjREpvMUXZHOVJ7y26gOIfmqZ1BPasF9bFFSX1Ww&s=10","Category":"skin Care","price":350},
            {"name":"Glow Cream","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jGDI6JO_xTdonPBUFLG2ornX5A3A4I5cYikULf3vhA&s=10","Category":"skin Care","price":350},
            {"name":"SummerFridays","avatar":"https://lumineve.in/cdn/shop/files/1_7_5536df5f-7abc-4795-8f95-67449e512e1d.webp?v=1781603910&width=1000","Category":"skin Care","price":350},
            {"name":"SummerFridays","avatar":"https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/products/VitaminC10_1200-1-min.png?crop=center&height=1260&v=1646543848&width=840","Category":"skin Care","price":350},
            {"name":"SummerFridays","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDN-VIhyxAv-hKIUIqk9eJiunoplEISQFu8RWuf-GEg&s=10","Category":"skin Care","price":350},
            {"name":"SummerFridays","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9ZQqeL4NlksHVa2x2UJAf4GDXa57ci6JMSBWxFIq3A&s=10","Category":"skin Care","price":350},
            {"name":"SummerFridays","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnDN-VIhyxAv-hKIUIqk9eJiunoplEISQFu8RWuf-GEg&s=10","Category":"skin Care","price":350}
        ]
    )

  return (
    <div>
        <NavBar />
        <h2 className="text-center my-4">Products</h2>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                            (value,index) =>
                            {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                            <div class="card" >
                                <img src={value.avatar} height={500} alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <p class="card-text">{value.price}</p>
                                    <p class="card-text">{value.Category}</p>
                                    
                                    <a href="#" class="btn btn-dark">Add Cart</a>
                                </div>
                            </div>
                        </div>
                                )
                            }
                        )}
                       
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ViewProduct