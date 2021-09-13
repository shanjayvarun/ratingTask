import React, { Component } from "react";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartDisplay: [
        {
          productName: "Fancy product",
          productPriceOffer: "$40.00 - $80.00",
          productAction: "View option",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },
        {
          productName: "Special Item",
          productPrice: "$20.00",
          productPriceOffer: " $18.00",
          productAction: "Add to cart",
          top: "sale",
          star: "⭐",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },
        {
          productName: "Sale Item",
          productPrice: "$36.00",
          productPriceOffer: " $19.00 ",
          productAction: "Add to cart",
          top: "sale",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },
        {
          productName: "Popular Item",
          productPriceOffer: "$40.00",
          productAction: "Add to cart",
          star: "⭐",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },

        {
          productName: "Sale Item",
          productPrice: "$36.00",
          productPriceOffer: " $19.00 ",
          productAction: "Add to cart",
          top: "sale",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },
        {
          productName: "Fancy product",
          productPriceOffer: "$40.00 - $80.00",
          productAction: "View option",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },

        {
          productName: "Special Item",
          productPrice: "$20.00",
          productPriceOffer: " $18.00",
          productAction: "Add to cart",
          top: "sale",
          star: "⭐",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },
        {
          productName: "Popular Item",
          productPriceOffer: "$40.00",
          productAction: "Add to cart",
          star: "⭐",

          features: [
            {
              disableRemove: "Remove",
            },
          ],
        },
      ],
      name: "cart",
      count: 0,
    };
  }

  addCart = (index) => {
    if (this.state.cartDisplay[index].productAction === "Add to cart") {
      this.setState({
        count: this.state.count + 1,
      });

      this.setState((state) => {
        const cartDisplay = [...state.cartDisplay];
        cartDisplay[index].disable = true;
        return cartDisplay;
      });
    }
  };
  subCart = (index) => {
    if (this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1,
      });
      this.setState((state) => {
        const cartDisplay = [...state.cartDisplay];
        cartDisplay[index].disable = false;
        return cartDisplay;
      });
    }
  };

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="!"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  {this.state.name}
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    {this.state.count}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <header class="bg-dark py-5">
          <div class="container px-4 px-lg-5 my-5">
            <div class="text-center text-white">
              <h1 class="display-4 fw-bolder">Shop in style</h1>
              <p class="lead fw-normal text-white-50 mb-0">
                With this shop hompeage template
              </p>
            </div>
          </div>
        </header>

        <section class="py-5">
          <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {this.state.cartDisplay.map((ele, index) => {
                return (
                  <div key={index}>
                    <div class="col mb-5">
                      <div class="card h-100">
                        <div
                          class="badge bg-dark text-white position-absolute"
                          style={{ top: "0.5rem", right: "0.5rem" }}
                        >
                          {ele.top}
                        </div>
                        <img
                          class="card-img-top"
                          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                          alt="..."
                        />
                        <div class="card-body p-4">
                          <div class="text-center">
                            <h5 class="fw-bolder">{ele.productName}</h5>
                            <div class="d-flex justify-content-center small text-warning mb-2">
                              <div class="bi-star-fill">{ele.star}</div>
                              <div class="bi-star-fill">{ele.star}</div>
                              <div class="bi-star-fill">{ele.star}</div>
                              <div class="bi-star-fill">{ele.star}</div>
                              <div class="bi-star-fill">{ele.star}</div>
                            </div>
                            <span class="text-muted text-decoration-line-through">
                              {ele.productPrice}
                            </span>
                            {ele.productPriceOffer}
                          </div>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div class="text-center">
                            <button
                              class="btn btn-outline-dark mt-auto"
                              href="!"
                              disabled={ele.disable}
                              onClick={() => {
                                this.addCart(index);
                              }}
                            >
                              {ele.productAction}
                            </button>
                            {ele.features.map((element) => {
                              if (ele.productAction !== "View option") {
                                return (
                                  <button
                                    class="btn btn-outline-dark mt-auto"
                                    href="!"
                                    onClick={() => {
                                      this.subCart(index);
                                    }}
                                  >
                                    {element.disableRemove}
                                  </button>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cart;
