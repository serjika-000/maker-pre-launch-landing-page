import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <img src="assets/logo.svg" class="logo" alt="" />
    </header>
    <main>
      <img src="assets/illustration-hero-mobile.png" class="img-mobile" alt="" />
     
      <section class="hero">
        <img src="assets/illustration-hero-left.svg" class="img-hero-left" alt="" />
        <img src="assets/bg-hero-squiggle.svg" class="img-hero-middle" alt=" background" />
        <div class="presentation-hero">
          <h1>Get paid for the work you <span class="span-color">love </span>to do.</h1>
          <p class="content-hero">
            The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a
            side hustle, we’ve got you covered.
          </p>
          <img src="assets/icon-scroll.svg" alt="" />
        </div>
        <img src="assets/illustration-hero-right.svg" class="img-hero-right" alt="" />
      </section>
    
      <section class="section-middle-content">
        
        <div class="first-box-middle margin-box-middle">
          <img src="assets/illustration-passions.svg" class="img-box-start" alt="" />
          <div class="text-content-box">
            <h4>Indulge your passions</h4>
            <p class="paragraph-box-middle">Your passions shouldn't be just for the weekend. Earn a living doing what you love.</p>
          </div>
        </div>
        <div class="second-box-middle margin-box-middle margin-box1-middle-tablet">
          <img src="assets/illustration-financial-freedom.svg" class="img-box-middle-left" alt="" />
          <div class="text-content-box">
            <h4>Gain financial freedom</h4>
            <p class="paragraph-box-middle">Start making money work for you. There’s nothing quite like earning while you sleep.</p>
          </div>
        </div>
        <div class="first-box-middle margin-box-middle margin-box2-middle-tablet">
          <img src="assets/illustration-lifestyle.svg" class="img-box-middle-right" alt="" />
          <div class="text-content-box">
            <h4>Choose your lifestyle</h4>
            <p class="paragraph-box-middle">Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</p>
          </div>
        </div>
        <div class="second-box-middle">
          <img src="assets/illustration-work-anywhere.svg" class="img-box-end" alt="" />
          <div class="text-content-box">
            <h4>Work from anywhere</h4>
            <p class="paragraph-box-middle">Selling online means not being pinned down. Want to work AND travel? Go for it!</p>
          </div>
        </div>
        
      </section>

     
      <section class="price-container">
        <div class="content-price-container">
          <h3>Our pricing plans</h3>
          <p>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
        </div>
       
        <div class="box-price-container">
         
          <div class="start-box-price">
            <img src="assets/icon-free.svg" class="start-box-icon" alt="" />
            <div class="start-box-content">
              <h5>Dip your toe</h5>
              <p>Just getting started? No problem at all! Our free plan will take you a long way.</p>
            </div>
            <div class="options-start-box">
              <h2>Free</h2>
              <div class="options-content">
                <img src="assets/icon-check-cyan.svg" alt="" />
                <p>Unlimited products</p>
              </div>
              <div class="options-content">
                <img src="assets/icon-check-cyan.svg" alt="" />
                <p>Basic analytics</p>
              </div>
              <div class="options-content">
                <img src="assets/icon-check-cyan.svg" alt="" />
                <p>Limited marketplace exposure</p>
              </div>
              <div class="options-content">
                <img src="assets/icon-check-cyan.svg" alt="" />
                <p>10% fee per transaction</p>
              </div>
            </div>
          </div>
         
          <div class="end-box-price">
            <img src="assets/icon-paid.svg" class="end-box-icon" alt="" />
            <div class="end-box-content">
              <h5 class="title-end-box">Dive right in</h5>
              <p class="paragraph-end-box">Ready for the big time? Our paid plan will help you take your business to the next level.</p>
            </div>
            <div class="options-end-box">
              <div class="title-price-end-box">
                <h2 class="title-end-box">$25.00</h2>
                <p class="paragraph-end-box">/ month</p>
              </div>
              <div class="end-options-content">
                <img src="assets/icon-check.svg" alt="" />
                <p class="paragraph-end-box">Custom domain</p>
              </div>
              <div class="end-options-content">
                <img src="assets/icon-check.svg" alt="" />
                <p class="paragraph-end-box">Advanced analytics and reports</p>
              </div>
              <div class="end-options-content">
                <img src="assets/icon-check.svg" alt="" />
                <p class="paragraph-end-box">High marketplace visibility</p>
              </div>
              <div class="end-options-content">
                <img src="assets/icon-check.svg" alt="" />
                <p class="paragraph-end-box">High marketplace visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <img src="assets/bg-footer-squiggle.svg" alt="" />
      <div class="footer-content">
        <h3>Get notified when we launch</h3>
        <div class="box-footer-form">
          <form class="footer-form" novalidate>
            <input type="email" class="inputForm" placeholder="Email address" required aria-label="input email" />
            <button class="buttonFormFooter" aria-label="submit email">Get notified</button>
          </form>
          <p class="error">Oops! That doesn't look like an email address</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default App
