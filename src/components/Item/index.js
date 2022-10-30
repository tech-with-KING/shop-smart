import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './style.css'
class SingleProduct extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
    }
    
    render() { 
        const ratings =[1,2,3,4,5]
        return ( 
            <div class="product_card" style={{width:'600px'}}>
                <div className='device_container'>
                    <div className='like_circle'>
                        
                    </div>                                                                               
                    
                </div>
                <div className='device_info_container'>
                <Link to={`/${this.props.Link}`} >
                      <p className='device_name'>
                        This is the device name _
                    </p> 
                </Link>
                    <p className='device_spec'>
                        -this is the spec
                    </p>                                                                               
                    <p className='device_price'>
                        this is the device
                    </p>                     
                    <div className='device_rating'>
                        {
                            ratings.map((rating)=>{
                                return(
                                    <Star style={{fontSize:'30px',color:'gray'}} key={rating}/>
                                )
                            })
                        }
                        <p>[no reviews yet]</p>
                    </div>                     
                    <p className='compare'>
                        compare with 2 online shops 
                    </p>                       
                </div>
            
            </div>

         );
    }
}
 
export default SingleProduct;