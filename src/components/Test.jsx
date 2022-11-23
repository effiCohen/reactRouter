import React from "react";
import "./Form/test.css";

const Test = () => {
  return (
    <>
      <div className="row flex-nowrap m-0 p-0 mb-5 col-12 ">
        <div className="col-6 col-md-3 col-xl-2 px-sm-2 px-0 bg-side">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2  min-vh-100 ">
            <a
              href="/"
              class="d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none mt-2"
            >
              <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White-768x230.png"
                alt=" logo "
                className="logo "
              />
            </a>
            <ul
              class="nav nav-pills flex-column mb-3  align-items-start align-items-sm-start  "
              id="menu"
            />
            <li class="nav-item m-2">
              <i class="bx bx-home-alt-2 bx-sm txt-hover"> Home </i>
            </li>
            <li class="nav-item m-2">
              <i class="bx bx-search bx-sm txt-hover"> Search</i>
            </li>
            <li class="nav-item m-2">
              <i class="bx bx-library bx-sm txt-hover"> library</i>
            </li>
            <div className="mt-4 text-small">
              <li class="nav-item ">
                <i class="bx bxs-plus-square bx-sm txt-hover">new playlist</i>
              </li>
              <li class="nav-item m-2">
                <i class="bx bxs-heart bx-sm txt-hover"> favourites</i>
              </li>
            </div>

            <li />
          </div>
        </div>
         <div className="mycontainer bg-dark row m-0 p-0 mb-auto  ">
        <div className="d-flex justify-content-between p-2 ">
          <h3 className="text-light under-line">Spotify playlist </h3>
          <p className="text-light under-line">all option</p>
        </div>
        <div className="row m-0 p-0 d-flex justify-content-center col-lg-12">
          <div className="col-10 col-lg-12 ">
            <div className="one d-flex justify-content-center  row ">
              <div className="spotifyCard ">
                <div className="img-holder">
                  <img
                  src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>feelin good</h2>
                  <p>feel good with this positiv song </p>
                </div>
                <div className="play-icon">
                  <div className="circle">
                    <div className="triangle"></div>
                  </div>
                </div>
              </div>
              <div className="spotifyCard col-9">
                <div className="img-holder">
                  <img
                  src="https://i1.sndcdn.com/artworks-000849498034-4dpsoq-t500x500.jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>rap god</h2>
                  <p>Get happy with today's dose of feel-good songs! </p>
                </div>
                <div className="play-icon">
                  <div className="circle">
                    <div className="triangle"></div>
                  </div>
                </div>
              </div>
              <div className="spotifyCard col-10">
                <div className="img-holder">
                  <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAPFy0dHR0tLS0rKy0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rKy0tLSstLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADcQAAICAQMDAwIDBgQHAAAAAAABAhEDBBIhBRMxQVFhBnEUIoEyUpGhwfAHQtHxFSN0grGz4f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEBAQADAAIBBAMAAAAAAAABEQIDEiExUUETgaGxBCJx/9oADAMBAAIRAxEAPwD5DQaCjr6XTqCTcJTk1fCTSv05dWehWbj0SjuZo45/llCUG+E3GufuuDj5INNp+ja/gAV0QaiUIFJQ1EoFAQJKEYUShqIBloISAAoFDEEYUSghAy0EgaEYEoNEAFolDAAwolBoNCBSUNRKAFog1EAwo7mJLLGL/Lwqacd1Pj54ONQYTa5Tafw6Nq5sduGFY7k2kkvS4r9Y20ziZp7pOXu2xsmWUv2pN/diUSZSUNRKAYWiUNRKEopKGolAZaJQ9EoDwlEoeiUI8JRKHolCPC0ShqDQHhaJQaDQAhB6JQHhKJQ9EoQwtEoaiUB4UlDUSgPCkGoggbYTYau0Dtm7nxm2E2mntg7Yjxn2g2mrtg7Yjxm2h2mjtgeMRyM+0O0v7ZO2I8UbSUX9sPaEeM+0m00doZYgP1Zdodpq7QO2B4zbSbTSoE2iPGbaHaX7CbQPFG0m0ucSULRinaTaWtBoNPFO0O0saAIYTaTaOAATaQcIB0e2L2zd2xe2bawY+2Ttmp4wOIjZu2Ttl7QtgartE7RbZBHintE7Rc2KJSvYibRmQRq3EFDyYNwBWRofgWSA8LQCOQNwjFiWNYshDAbARgbAISxWBgBI2I2DcIj2DcVNg3ANXbiFNhAa9U5IDYGiuTN2EFlchkyxxtCVGSQlls0UtAabiWAgjNYGxbBYlC2K2NQtCMN4GyUChHgB3AoFCPEkVtFu0G0BitDMdRDtFoUtEcS1wA0LQoaFaLpRK5IZK2K0OwUBEoFD0ChaCUEagBoevlApljOi8Rnmkk2zfWTDOAI2hu4LJgIOSKaMs0XvIIxLZ2AskgOAjViotUQygI8LEAbLO1fJNqlTQHEt2kSFps9DKJZKA0ICtCpwF2nXw6Bzi68rlL3MM8DXoT7HeazRRYoj9sm0NGJ2+BJYzZiiWPALVerluBXKB0p4CqWnYaXq5jiLtNebDRXHGPUeqjaBxL3Au0+mcnQafrrDtIeg/wCER+SE+8V/Rrt70vJy9Rjly2y7PqV6eTBkztnXHIHhoXNIrbJNgCjN8FSPrnR5aPS9GwavPosWeTbjK8eNzbllnFNylHmqRn11i9x8mQ9n0/UdI6f1XR5dRosH4fUYbbgoxgpNLdtlGH5WpJOpLm18NHkeh/Qev1eJZsWOKxyVweSai5r3iuXXy6v7C9oc6edTQ+ZcJnX0P0brcmbLp44ay4UnkjKUVSl+y07qSfwfQf8ADf6Xy4J5VrMEFvwxlCMtk3GpPda5UXyieusVepI+Q1yXWdjSfSOqnpnqtijhSb35JxhaXFpN27fC934F+kNJiy6qEM1ONSai/EpJWov39XXrRHk8k45vV/hpz9uRx4u7oOKB7/XaNOM3l08MTjOUce3bcoLxLj3V8HktXpmm1Vf36GPi888s3MXeMYd6s1/g6Sa9VZ7npDw6PTwnDRrU5Z13G0nJWrf+WTS9KS+/zv1nS8Gtz4VpsXbdRlqINLHGMN0d21L/AD8tcKnwXek8387Pjw3ToNMPVdOtzr1PX/VH0w9Pmj2McnDI4wx/m3yc6tqvPvyYOrfROvUHl7SkkrcITjKaSX7q8/ZNkfda+/HrPv5eGni5K9p63pf0nqdTijmxY90G9v7UU7unw34XuM/oDXNvbji6nsdZIeeOeX4VlzpF9Z/Ly2JcnVwxi07R3I/4f62M1DZB2r3qa2KvRvzfxRXL6W1fclg2R3KKn+3FKUW63RbfKT4fta9ybdXz1zP5ebkuQbTo9P6NnzynDHD80P202o7edtNv1u/4M5rnTafo64dr9H6gr5pc2nsojpUalkQk81BtHrFcOlp+XSA8sYWo+nr7j6jUbvBzszHPv5K5Pw1fjpe5Dn7WQrIj2rbkkV2SQGdeuGRLA2QgtXhWj6/puiZtZ9P6fBgUXNy3fmltVRz5G+T5DRtwdZ1WOKhj1WohBeIwz5YRVu3UYySXLZHX07zr6n0Lpn/A9Bqc2qnB5syqGODbTcYyWOCbrdK5ybaVJfazRoOi9vB03dDU65/8qUJRzdvBp1WNqTUWrgl43brUWvWn8d1WpyZXuy5J5JeN2Scpyr2uTbNen6xqoY+zHUZo4v3I5JqPykk+F8LgzsP0r7ppOOsan/otN/7c55b/AAk6vn1WfVT1GWWR9uDW5txipSk2oLxFcLhex85x9X1W9z/Faje0ouffy73FNtRct1uKbbr5Zo6Vny4reLLkxtqn25yhuS8KW1q15Ivw54t2PpH19j/GaHFqdJNvBib34ktqSX5VPb6OFeH6Sv7+I/w/0eKeqbyU5Qhuxp/vKS/N8tL/AM36FGm1WbGnHHmywi3bjDJOEZcU7jF0+ODnrE4zUotxafDTaa+zXKMfLz7+PriXNbccXh7rLjyZoXqMax5Iykltkmmvdcvj7+1nkNS5LJy758Pku1WqyypynKTXNtu7917HL70m222/u2zL/j+K8S7f7fr/AMbdV2dF1KeOae7349LXhHfn11yy6bJbhPfFS2trdC03GXvG0vPyeEcnfk141KdU+fHPlm1+J9favqkeoSWrWWbexx247lwp7adRvh1av5MvSJayGuy5suSXZan5yXBpu4VC/wAu1etLw/c85p9BmnGEcmSTS8W2/BT12OaUYwWSco+HHc2v155M55JuC+C2fP1j0Wm604aDUZMD2p6jM4NekZ5krj7cS4K9Prc0umzfcnvlk5nue+nkin+bz44PKx0WWO3GpyUXTlBSey7v9m68r+R15KUYKClJxb8W9vvyrryHXln8Kng/3ru9cz5FoMDWWadwUpbnuklGXmXl+F/Ao+ruoywZtFqOXUJ71+9CSxb18+6+Ujz3Uck5Y1BzlKMf2YuT2rh+I+PVnNet3zx/iJ5JY4tWm3NqKrdGKk+LSSHz3ovhz/P+Xs/qvNj0mnzZcT/Pq5JJr5hTkvit0vvP5PlTdHpfrLrS1eWLgmscI1BNJO3zJ0vHiK/7UcCWPg11Hj4sn38qVNkmOoFkcYa0nKvHFJFE8Zs2iZIcC9lerEQs2EK1HqrAFoB12uGRCIgUTaqQaA4jobciLV4WES2WOiRkWKFkWmGOBsxMTFjLYxM7WvPLZh9y3Npk1ZRiZ0MatUY9dY3kTHiTik0cfPg2tqjuYkTV6S1aRE7yqvOvMyh7nb+nMCWRTl4XiPv7WZ8nTpedtnS6ZppQalJJfA++9g55ernN7IwpW1bfivWq9EZtTKEYfK+P6B0mRyuT9uDLscm7s5dXIy4tXjT8Nu+G/wC+A6zXRq1x8e4mr0yT/Ly36exZq+mbFzT5RWxTJHC5xUjDm0PJ6jSwUYJV5Od1B8/0HPJ9Ga83k0buhMuDijsvGmjNlw0aztPq5UMIs4GxwK5Yy/YsZKEmaZQM8ypSxRsIOQej1YWwCpks7deZIJLAEm1UiJjICHgibVLoI14DNjRqgZWr5jTiiaceCyrTxs6WFUYddY6eeVOLSNcs1YYEbdF+nfgx66aSNGHS82a/w9/I0G1TRdFp8tfovH/wwvS8JDTKjPk0bbOpGSa/tgtL5/v3J9iYsicY7V9w9PWVvb4T9a/qdzTaXHPyufQ0Qz4ocOPKHKm9/wASMb6fGCVq/W2YNXNX9jR1DqTk+Djalti1XHN/NTPrOaRjy8vksjhrn1KcjKlaYrnRmyuy6TK2jSUsUuBmyGrKzJkLlLGfKzLkNGQzTNeUVXZA0QrUuYiWJFjWdmvOw1hQljJiUdFkEVxL8ZFpxoxovjEogasMjHqt+I2aaJ0cETFgRrxzo5u66OY1Sx8F+jw8qynHM6OCBh100xor+Q8YhxwLYwMfYFQvqWuIkY8i0N2hnXHq1x9/b9fH6mfPO/Pku0tKUb9145M+pVN/cN+Jk/7MmRFTiXzl/v8A6meUh61hMxhyI15ZGSbLlGKXESRayjKy5RjPlZmyGiZmmzSUqzZDPMvyFEjWVFisIaAVpY41hUiuwpna8xcmCyQJROg0WboLhGPEjYmR1WnEWRZdikZ4mvDjMuq35joYJcGiLMuJo24ZKrZzdV0cxu0yVWdLBlj7nEnqgLUnP1za1enx5L8FykcLRZXXDNuXqUMfEuXXoY2XReXQchFI5uPq+OXuh5dRj6ePcWUerpYtS4u15/14F1S8Neqv+n9Dn49ZC1ckbYdSjJqFRa8c8efn+YfRecuxizToqlkXr/ubuqaelTq/HHg40mOVU+rJzXNMzOQzZTKRpBiZJmaUgzbZXJGkBJsz5B8jM0jTlNLMokWSYlmkTSECQrSxw0iJCbibjt15S6KHM6kOspNOVsxouTOaspZ32TYudR0oSLVqKOR32CGRkXhpPK7n42vBPx5yu4C7J9I0/qV0Japu7lx7XxQYapR8NnNsiD0gndd3T9Um06aQy1snxJ/Z+bOPjypF6z1/oZ3xz9Np3f26MM7LFna4s5Pf9h1mfBF4VO3WwZOP1sj1MrZzY5fkMc9eSbwv2evwdScoqMnbSXIjyWeUWum2tvH8P5tnYl1GEeLvj09zn68Nl+L56lbpSMefMl5aX3Z5/WdQnJt7mvZJvj0KI7pfb58G3Pgz7ai+T9PSafWxlaUvAMuU42ni4u+C7LmvwF4m/FTr59X5chmySEeUplnRc5TafeK8pVKZU5F4nWjukMu4g8LXMsiFCdjyjBECIzoZMrQbEcOMiqyWCou3BUylMNiNeph3lKYbJXKtUh1Mz2FSFWkrSspYspkUiyEibFytMZsZ5DOpFqyJEVcWwv0LljvzwZ/xhXPUE5avY1KMV6W/cmTN6Ixd4R5Q9R7Rt7xXPUGR5AbivUvZoeWxLKdwLHhaucxHMrCA028gtkAMZCEOl5hgIJBGhCEACBBICoISEFVCEhCVQQohBVpEQ0QkEo6CyEJWD8kIQRlAyEGACQggBEEgGAWQgACEIBv/2Q=="
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>Dark & Stormy</h2>
                  <p>Beautifully dark, dramatic tracks</p>
                </div>
                <div className="play-icon">
                  <div className="circle">
                    <div className="triangle"></div>
                  </div>
                </div>
              </div>
              <div className="spotifyCard col-10">
                <div className="img-holder">
                  <img
                  src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>Sleep</h2>
                  <p>Gentle ambient piano to help you fall asleep.</p>
                </div>
                <div className="play-icon">
                  <div className="circle">
                    <div className="triangle"></div>
                  </div>
                </div>
              </div>
       
              <div className="spotifyCard col-10">
                <div className="img-holder">
                  <img
                  src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>RapCaviar</h2>
                  <p>New music from Roddy Ricch, Don Toliver and Gucci Mane.</p>
                </div>
                <div className="play-icon">
                  <div className="circle">
                    <div className="triangle"></div>
                  </div>
                </div>
              </div>
       
            </div>
          </div>
        </div>
        </div>
      </div>
        
        

     
    </>
  );
};

export default Test;