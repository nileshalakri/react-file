import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { Link, useParams } from "react-router-dom";


export default function Productdetail() {
	const[rec,setRec]=useState({});

    let {productId} = useParams(); //Object { productId: "1" }
    console.log("IN SINGLE PRODUCT COMP");
    console.log(productId);

	useEffect(()=>{
		axios
		.get('http://localhost:3004/products/'+productId)
		.then(res=>{
			console.log(res);
			console.log(res.data);

			setRec(res.data)
		})
	})

  return (
    <div class="container product-details">
						<div class="col-sm-5">
							<div class="view-product">
								<img src={rec.image} alt="" />
								
							</div>
							

						</div>
						<div class="col-sm-7">
							<div class="product-information">
								<img src="images/product-details/new.jpg" class="newarrival" alt="" />
								<h2>{rec.title}</h2>
								<p>Web ID: 1089772</p>
								<img src="images/product-details/rating.png" alt="" />
								<span>
									<span>US {rec.price}</span>
									<label>Quantity:</label>
									<input type="text" value="3" />
									<button type="button" class="btn btn-fefault cart">
										<i class="fa fa-shopping-cart"></i>
										Add to cart
									</button>
									<Link to={"/deletePro/" +rec.id} class="btn btn-fefault cart">
									<i class="fa fa-shopping-cart"></i>
									Delete
									</Link>
									<Link to={"/editPro/" +rec.id} class="btn btn-fefault cart">
									<i class="fa fa-shopping-cart"></i>
									Edit
									</Link>
								</span>
								<p><b>Availability:</b> In Stock</p>
								{/*<p><b>Stock:</b>{rec.rating.count}</p>
  								<p><b>Rating:</b>{rec.rating.rate}</p>*/}
								<p><b>Category:</b>{rec.category}</p>
								<p>
								{rec.description}
								</p>
								<p><b>Condition:</b> New</p>
								<p><b>Brand:</b> E-SHOPPER</p>
								<a href="/"><img src="images/product-details/share.png" class="share img-responsive"  alt="" /></a>
							</div>
						</div>
					</div>
  )
}
