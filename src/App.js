
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Programs from './Programs';
import Footer from './Footer'
import Documentation from './Documentation';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <>
    <div className='container'>
     

    <div className=" col-md-12 col-sm-12 text-center">
      <img src="images/logo11.png" alt="Site logo"  className="responsive-img"/>
</div>
<div className="col-md-12 col-sm-12 text-center textheading  ">
A toy programming language written in Javascript 
</div>

<div className="text-center col-md-12 col-sm-12 mt-4">

<a href="#playground" className="" style={{textDecoration:'none'}}>
    <button className="btn btn-primary btn-lg fw-medium mt-4" style={{backgroundColor:'rgb(255 87 51)',border:'none'}}>Playground</button>  </a>
    
    




    <a href="https://github.com/nirbhaykr87" target="_blank" className="" style={{textDecoration:'none'}}>

    <button className="btn btn-primary btn-lg fw-medium mt-4 mx-2" style={{backgroundColor:'white',color:'rgb(255 87 51)',border:'none'}}>View Source</button> </a>


</div>

<div className='text-center'>
<p className="mt-4">Made by <span style={{color:'#FF421A'}}>@Nirbhay</span> | <span  style={{color:'#FF421A'}}>@Kartik</span> | <span  style={{color:'#FF421A'}}>@Asmit</span></p>

</div>













</div>
   
   <Programs/>
   <Documentation/>

   <Footer/>
    </>
  );
}

export default App;
