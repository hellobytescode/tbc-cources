function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";

const ROOTS_PAGE = "";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, "/login"),
  verifyOtp: path(ROOTS_AUTH, "/verify-otp"),
};

export const PATH_PAGE = {
  root: ROOTS_PAGE,
  account: path(ROOTS_PAGE, "/user/account"),

  //ecom
  ecom: {
    productCart: path(ROOTS_PAGE, "/e-com/cart"),
    productDetails: (productId: string) =>
      path(ROOTS_PAGE, `/e-com/product/${productId}`),
    productList: (query: string) =>
      path(ROOTS_PAGE, `/e-com/products/${query}`),
  },
};
