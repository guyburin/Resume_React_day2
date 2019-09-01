import React, { Component } from 'react';

export default class Header extends Component {

   render() {
       return (
           <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
               <div className="row">
                   <div className="col-md-4">
                   <div class="text-center">
                           <img src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/65601090_2306182356102095_190383723999395840_n.jpg?_nc_cat=105&_nc_eui2=AeHnt8N5hke7IgihWT-yJuDhEDsofcI-XcKcaXnVHugiKIuBYQdgMqBUOU6D8d-iXwr_WuXsbDGbWoXqhGmv2SqiVgVAPk35Rt_xldGPNU3NjA&_nc_oc=AQk0iM8TCpbknfrGpHNw2opwVcGpXL-06bsaPBXLDrteOVXkm4oj1NhvNZ28umrvuDI&_nc_pt=1&_nc_ht=scontent.fbkk10-1.fna&oh=ab05171962901138aa6af6f8e7cb72f5&oe=5E01D9A5"
                           className="circle" width="100%" />
                       </div>
                   </div>
                   <div className="col-md-8">
                    <div className="card">
                            <div className="card-header">
                                <h1>ข้อมูลพื้นฐาน</h1>
                            </div>
                            <div className="card-body">
                                <h2>ชื่อ : นาย บุรินทร์ พันธ์ชาติ</h2>
                                <div style={{fontSize:'20px',marginTop:'25px'}}>
                                <div className="row">
                                    <div className="col-3">วันเกิด :</div><div className="col">10 มิถุนายน 2541</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">อายุ :</div><div className="col">20 ปี</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">น้ำหนัก :</div><div className="col">64 Kg.</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">ส่วนสูง</div><div className="col">172 Cm.</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">เกรดเฉลี่ย</div><div className="col">4.00</div>
                                </div> 
                                </div>
                            </div>
                        </div>
                   </div>
               </div>       
            </div>
           
       )
   }

}
