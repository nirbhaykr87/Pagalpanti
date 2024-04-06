import React from 'react'

export default function Documentation() {
    const htmlContent = `
    <div style="color: red; font-size: 16px;">
      <p>This is a styled text area.</p>
      <p>It uses HTML and CSS to define its appearance.</p>
    </div>
  `;
    
  return (
   <>
   <div className="container ">
<h3 className='fw-bold  text-decoration-underline mb-4'>Documentation</h3>
<div className="row">

<div className="general col-md-6 col-sm-12 mt-4">
    <p className='fw-medium'>General</p>

<p><span className='fw-bold' style={{color:'#01D293'}}>start karo</span> is the entrypoint for the program and all program must end with  <span className='fw-bold' style={{color:'#01D293'}}>ok bye</span>. Anything outside of it will be ignored.</p>


   <p className='p-4' style={{backgroundColor:'rgb(51 51 51)',borderRadius:'12px'}}>
    <span  className=''  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>start karo;</span>
    <br />
    <span  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)',color:'#999999',paddingLeft:'12px'}}>// write code here</span> <br />


    <span  className=''  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>ok bye;</span>

  
   
</p>
</div>





<div className="variables col-md-6 col-sm-12 mt-4">
    <p className='fw-medium'>Variables</p>
<p>Variables can be declared using <span className='fw-bold' style={{color:'#01D293'}}>maan lo</span>.</p> <br />


<p className='p-4' style={{backgroundColor:'rgb(51 51 51)',borderRadius:'12px'}}>
    <span  className=''  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>start karo;</span>
    <br />

<span style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>maan lo</span> a <span style={{color:'#67CDCC',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}> = </span > <span  style={{color:'#F08D49',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>12;</span> <br />


    <span  className=''  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>ok bye;</span>

  
   
</p>




</div>


</div>
















<div className="row">

<div className="general col-md-6 col-sm-12 mt-4">
    <p className='fw-medium'>Print</p>

<p><span className='fw-bold' style={{color:'#01D293'}}>likho</span> is used to print the statement. </p>


   <p className='p-4' style={{backgroundColor:'rgb(51 51 51)',borderRadius:'12px'}}>
    <span  className=''  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>start karo;</span>
    <br />
    <span  className=''  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>likho </span> 
    <span  className=''  style={{color:'#7EC699',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}> "Nirbhay Kumar";</span> 
     
    
    <br />


    <span  className=''  style={{color:'#CC99CD',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>ok bye;</span>

  
   
</p>
</div>





<div className="variables col-md-6 col-sm-12 mt-4 mb-4">
    <p className='fw-medium'>Evaluation</p>
<p><span className='fw-bold' style={{color:'#01D293'}}>Evaluation</span> can be done by..</p> 


<p className='p-2' style={{backgroundColor:'rgb(51 51 51)',borderRadius:'12px'}}>
    <span  className=''  style={{color:'#CC99CD',fontSize:'15px',backgroundColor:'rgb(51 51  51)'}}>start karo;</span>
    <br />

<span style={{color:'#CC99CD',fontSize:'15px',backgroundColor:'rgb(51 51  51)'}}>maan lo</span> a <span style={{color:'#67CDCC',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}> = </span > <span  style={{color:'#F08D49',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}>12;</span> <br />
<span style={{color:'#CC99CD',fontSize:'15px',backgroundColor:'rgb(51 51  51)'}}>maan lo</span> b <span style={{color:'#67CDCC',fontSize:'17px',backgroundColor:'rgb(51 51  51)'}}> = </span > <span  style={{color:'#F08D49',fontSize:'15px',backgroundColor:'rgb(51 51  51)'}}>10;</span> <br />

<span  className=''  style={{color:'#CC99CD',fontSize:'15px',backgroundColor:'rgb(51 51  51)'}}>likho </span> 
    <span  className=''  style={{color:'#7EC699',fontSize:'15px',backgroundColor:'rgb(51 51  51)'}}> a+b;</span> 
     <br />


    <span  className=''  style={{color:'#CC99CD',fontSize:'15px',backgroundColor:'rgb(51 51  51)'}}>ok bye;</span>

  
   
</p>




</div>


</div>













   </div>
   
   
   </>
  )
}
