import React, {useState} from 'react';
import Home from './Home';
import Team from './Team';
import OurPartners from './OurPartners';
import Popi from './Popi';
import FuneralInsurance from './FuneralInsurance';
import Claim from './Claim';
import HealthInsurance from './HealthInsurance';
import emailjs from '@emailjs/browser';
import AboutUs from './AboutUs';

const ContactUs = () => {

    const [path, setPath]= useState('')
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')
    const [clientStatus, setClientStatus]= useState('')
    const [subject, setSubject]= useState('')
    const [message, setMessage]= useState('')
    const [sending, setSending]= useState(false)

    function sendEmail(e){
        e.preventDefault();
        setSending(true)
        // emailjs.sendForm('service_vnk6qr9', 'template_z8d2yyo', e.target, 'Uef210SDrpG6qGu_F')
        emailjs.send("service_vnk6qr9","template_z8d2yyo",{
            email: email,
            to_name: "Health iAccess",
            from_name: name,
            message: `Message from:${name}\n Email address:${email}\n Phone number: ${phone}\n Client status: ${clientStatus}\n Subject: ${subject}\n Message: ${message}\n`,            }, "Uef210SDrpG6qGu_F");
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        setSending(false)
    }

    if (path==='Home'){
      return  <Home/>
     } else if(path==='Contact'){
          return <ContactUs/> 
     } else if(path==='About'){
          return <AboutUs/> 
     } else if(path==='Team'){
          return <Team/>
        } else if(path==='Partners'){
            return <OurPartners/>
       } else if(path==='Popi'){
       } else if(path==='Health'){
            return <HealthInsurance/>
       } else if(path==='Popi'){
            return <Popi/>
       } else if(path==='Claim'){
            return <Claim/>
       } else if(path==='Funeral'){
            return <FuneralInsurance/> 
    } else{ 
  return (
    <div>




		{/* <div id="loader-wrapper">
			<div id="loader"><div className="loader-inner"></div></div>
		</div> */}





		<div id="page" className="page">



			<header id="header" className="header">


			    <div className="wsmobileheader clearfix">
			    	<a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
			    	<span className="smllogo"><img src="images/logo.png" width="180" height="40" alt="mobile-logo"/></span>
						<a href="https://api.whatsapp.com/send?phone=27822891681"><i className="fab fa-whatsapp"></i></a>
			 	</div>


			 	<div className="headtoppart bg-lightgrey">
			    	<div className="headerwp clearfix">

			     		<div className="headertopleft">
			        		<div className="address clearfix"><a href="https://api.whatsapp.com/send?phone=27822891681"><i className="fab fa-whatsapp"></i>+27 82 289 1681 - We will gladly assist you via WhatsApp</a>
			            	</div>
			     		</div>

					    <div className="headertopright">
					        <a className="linkedinicon" title="Linkedin" href="#"><i className="fab fa-linkedin-in"></i> <span className="mobiletext02">Linkedin</span></a>
					        <a className="facebookicon" title="Facebook" href="#"><i className="fab fa-facebook-f"></i> <span className="mobiletext02">Facebook</span></a>
				      	</div>

				    </div>
			  	</div>


			  	<div className="wsmainfull menu clearfix">
    				<div className="wsmainwp clearfix">

    					<div className="desktoplogo"><a href="index.html"><img src="images/logo.png"  width="180" height="40" alt="header-logo"/></a></div>


							<nav className="wsmenu clearfix">
								<ul className="wsmenu-list">



                                <li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Home')}><a  >Home </a></li>

<li className="nl-simple" aria-haspopup="true" style={{cursor:'pointer'}} onClick={()=>setPath('About')}><a  >About Us </a></li>

<li aria-haspopup="true"><a href="#">Products <span className="wsarrow"></span></a>
        <ul className="sub-menu">
                <li aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Funeral')}><a  >Funeral Insurance </a></li>

                <li aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Health')}><a  >Health Insurance</a></li>
               
        </ul>
    </li>

<li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Partners')}><a  >Our Partners </a></li>


<li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Claim')}><a  >Claim </a></li>

<li className="nl-simple" aria-haspopup="true"style={{cursor:'pointer'}} onClick={()=>setPath('Contact')}><a  >Contact </a></li>



										<li aria-haspopup="true"><a href="#">Login <span className="wsarrow"></span></a>
												<ul className="sub-menu">
													<li aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/plexi/r/agent-portal/login_desktop/" target="_blank">Business Owner</a></li>
													<li aria-haspopup="true"><a href="#">Policyholder</a></li>
													<li aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/f?p=222:LOGIN_DESKTOP" target="_blank">Admin</a></li>
												</ul>
											</li>
										<li className="nl-simple header-btn" aria-haspopup="true"><a href="https://dev.zd-solutions.co.za/ords/plexi/r/agent-portal/login_desktop/" target="_blank">Biz Owner SignUp</a></li>
								</ul>
							</nav>
    				</div>
    			</div>

			</header>




			<div id="breadcrumb" className="division">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className=" breadcrumb-holder">


								<nav aria-label="breadcrumb">
								  	<ol className="breadcrumb">
								    	<li className="breadcrumb-item"><a href="index.html">Home</a></li>
								    	<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
								  	</ol>
								</nav>

								<h4 className="h4-sm steelblue-color">Contact Us</h4>

							</div>
						</div>
					</div>
				</div>
			</div>




			<section id="contacts-2" className="wide-60 contacts-section division">
				<div className="container">
					<div className="row">



				 		<div className="col-lg-7">


				 			<h4 className="h4-md steelblue-color">Have a Question? We Respond and Answer Queries on 24/7 Basis.</h4>

				 			<p className="contact-notice">Give us a call or send an email. If you are you have a question on any of insuarnce products as a new client or business owner.
				 			</p>

				 			<div className="row">


				 				<div className="col-md-6">
				 					<div className="contact-box mb-40">

										<h5 className="h5-sm steelblue-color">General Enquiries</h5>
										<p>22 Sloane Street, Bryanston, 2191</p>
										<p>Johannesburg, 2191 South Africa</p>
										<p>Phone: +27(0) 11 516 0503</p>
										<p>WhatsApp: +27(0) 82 289 1681</p>
										<p>Email: <a href="mailto:info@healthiaccess.co.za" className="blue-color">info@healthiaccess.co.za</a></p>
				 					</div>
				 				</div>


				 				<div className="col-md-6">
				 					<div className="contact-box mb-40">

										<h5 className="h5-sm steelblue-color">Business Owners</h5>
										<p>22 Sloane Street, Bryanston, 2191</p>
										<p>Johannesburg, 2191 South Africa</p>
										<p>Phone: +27(0) 11 516 0503</p>
										<p>WhatsApp: +27(0) 82 289 1681</p>
										<p>Email: <a href="mailto:benefits@healthiaccess.co.za" className="blue-color">benefits@healthiaccess.co.za</a></p>
				 					</div>
				 				</div>
							</div>
						</div>


				 		<div className="col-lg-5">
				 			<div className="form-holder mb-40">
								<form name="contactForm" className="row contact-form">

					                <div id="input-name" className="col-md-12">
					                	<input type="text" name="from_name" className="form-control name" placeholder="Enter Your Name*" required onChange={(e)=>setName(e.target.value)}/>
					                </div>

					                <div id="input-email" className="col-md-12">
					                	<input type="text" name="email" className="form-control email" placeholder="Enter Your Email*" required onChange={(e)=>setEmail(e.target.value)}/>
					                </div>

					                <div id="input-phone" className="col-md-12">
					                	<input type="tel" name="phone" className="form-control phone" placeholder="Enter Your Phone Number*" onChange={(e)=>setPhone(e.target.value)} required/>
					                </div>

					                <div id="input-patient" className="col-md-12 input-patient">
					                    <select id="inlineFormCustomSelect3" name="patient" className="custom-select patient" onChange={(e)=>setClientStatus(e.target.value)} required>
					                        <option value="">Have Made Contact Before?</option>
											<option>New Client</option>
											<option>New Business Owner</option>
											<option>Existing Client</option>
											<option>Registered Business Owner</option>
											<option>Other</option>
					                    </select>
					                </div>

					                <div id="input-subject" className="col-md-12">
					                	<input type="text" name="subject" className="form-control subject" placeholder="Subject*" onChange={(e)=>setSubject(e.target.value)} required/>
					                </div>

					                <div id="input-message" className="col-md-12 input-message">
					                	<textarea className="form-control message" name="message" rows="6" placeholder="Your Message ..." onChange={(e)=>setMessage(e.target.value)} required></textarea>
					                </div>
                                    {
                                        sending ? <div className="col-md-12 contact-form-msg text-center">Sending....</div> :
                                        <div className="col-lg-12 mt-15 form-btn">
					                	<button type="submit" className="btn btn-blue blue-hover submit" onClick={sendEmail}>Send Your Message</button>
					                </div>
                                    }
					               

					                <div className="col-md-12 contact-form-msg text-center">
					                	<div className="sending-msg"><span className="loading"></span></div>
					                </div>

				                </form>
				 			</div>
				 		</div>


				 	</div>
				</div>
			</section>






			<footer id="footer-1" className="bg-image wide-40 footer division">
				<div className="container">


					<div className="row">


						<div className="col-md-6 col-lg-3">
							<div className="footer-info mb-40">

								<img src="images/footer-logo-white.png" width="180" height="40" alt="footer-logo"/>


								<p className="p-sm mt-20">We are an integrated financial services company. HiA’s mission and vision are rooted in our name of making health and financial services products accessible in the communities we serve.
								</p>


								<div className="footer-socials-links mt-20">
									<ul className="foo-socials text-center clearfix">

										<li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
										<li><a href="#" className="ico-twitter"><i className="fab fa-twitter"></i></a></li>
										<li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g"></i></a></li>
										<li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr"></i></a></li>



									</ul>
								</div>

							</div>
						</div>



						<div className="col-md-6 col-lg-3">
							<div className="footer-box mb-40">


								<h5 className="h5-xs">Our Location</h5>

								<p>22 Sloane Street, Bryanston</p>
								<p>Johannesburg, 2191, South Africa</p>

								<p className="foo-email mt-20">E: <a href="mailto:info@healthiaccess.co.za">info@healthiaccess.co.za</a></p>


								<p>P: +27(0) 11 516 0503</p>

							</div>
						</div>



						<div className="col-md-6 col-lg-3">
							<div className="footer-box mb-40">


								<h5 className="h5-xs">Working Hours</h5>


								<p className="p-sm">Mon - Thur - <span>8:00 AM - 5:00 PM</span></p>
								<p className="p-sm">Friday - <span>8:00 AM - 5:00 PM</span></p>
								<p className="p-sm">Sat - Sun - <span>Closed</span></p>

							</div>
						</div>


						<div className="col-md-6 col-lg-3">
							<div className="footer-box mb-40">


								<h5 className="h5-xs">WhatsApp</h5>


								<h5 className="h5-xl blue-color">+27(0) 82 289 1681</h5>


								<p className="p-sm mt-15">Contact on this number, always available to assist with information and enquiries.
								</p>

								<p className="foo-email mt-20"><a href="popi.html">Privacy Statement</a></p>

							</div>
						</div>


					</div>



					<div className="bottom-footer">
						<div className="row">
							<div className="col-md-12">
								<p className="footer-copyright">&copy; 2022 <span>Health iAccess</span>. All Rights Reserved</p>
							</div>
						</div>
					</div>


				</div>
			</footer>




		</div>




		<script src="js/jquery-3.3.1.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/modernizr.custom.js"></script>
		<script src="js/jquery.easing.js"></script>
		<script src="js/jquery.appear.js"></script>
		<script src="js/jquery.stellar.min.js"></script>
		<script src="js/menu.js"></script>
		<script src="js/sticky.js"></script>
		<script src="js/jquery.scrollto.js"></script>
		<script src="js/materialize.js"></script>
		<script src="js/owl.carousel.min.js"></script>
		<script src="js/jquery.magnific-popup.min.js"></script>
		<script src="js/imagesloaded.pkgd.min.js"></script>
		<script src="js/isotope.pkgd.min.js"></script>
		<script src="js/hero-form.js"></script>
		<script src="js/contact-form.js"></script>
		<script src="js/comment-form.js"></script>
		<script src="js/appointment-form.js"></script>
		<script src="js/jquery.datetimepicker.full.js"></script>
		<script src="js/jquery.validate.min.js"></script>
		<script src="js/jquery.ajaxchimp.min.js"></script>
		<script src="js/wow.js"></script>


		<script src="js/custom.js"></script>

		<script>
			new WOW().init();
		</script>


	</div>
  )
}
}


export default ContactUs