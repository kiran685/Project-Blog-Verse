const ProductCart = ()=>{
    
    return( 
        <div className = "border -1 border-black w-{200px} flex flex-col items-center gap-10 pt-4 pb-4 pl-3 pr-3 rounded-4xl ">
            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIXuEgbwn6Yxt96iGZbkRsFq2TAbOtF4kWoxQFucPNlM1_mvpFHb_mUZN3HIkqXEThKejOnSurQn97p_cSirhTWf2xeMwqpuVUDURzTy4r_d00ypMR94bKKI-o9kwVshZm9M7pMchuipY&usqp=CAc" className="w:{100px} h:{100px}border-4 border-black  rounded-2xl"/>
            <div className="flex flex-col gap-5 ">
                <h1 className="font-bold text-4xl text-blue-200">Mobile Phone</h1>
            <p className="font-bold text-4xl text-black-100">Prize:18000</p>
            <p className="flex justify-center items-center">7,500 mah battery,snapdragon8s elite</p>
            </div>
            <button className="bg-amber-100 text-white w:{400px} py-4 rounded-3xl cursor-pointer hover:big-blue-200">Add to Cart</button>
        </div>
    )

}
export default ProductCart