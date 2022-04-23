import React from 'react'


let data=[
    {
        id:1,
        name:"Levis",
        image:"https://www.reviewsxp.com/blog/wp-content/uploads/2020/05/Clothing-Brands-Made-in-USA-850x491.jpg"
    },
    {
        id:2,
        name:"Tees",
        image:"https://www.dangerpress.com/wp-content/uploads/2016/02/Clothing_Line-800x800-1.jpg"
    },
    {
        id:3,
        name:"Luna",
        image:"https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1240/MTgwMTM5NzcwOTI2NjA1NDM0/clothing-company-names.webp"
    },
    {
        id:4,
        name:"Tough Nickel",
        image:"https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_1240/MTgwMTM5MzUyNzA0MTY1MjA4/clothing-company-names.webp"
    }
    
]

const Products = () => {
  return (
    <div>
      products:
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
          <div>
              {data.map((item)=>(
                  <div key={item.id}>
                      <h1>{item.name}</h1>
                      <img src={item.image} alt="" />

                  </div>
              ))}
          </div>

      </div>
    </div>
  )
}

export default Products
