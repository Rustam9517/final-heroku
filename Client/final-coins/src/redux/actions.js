import {
  fetchCoinsBegin,
  fetchCoinsFailure,
  fetchCoinsSuccess,
  fetchLoginBegin,
  fetchLoginFailure,
  fetchLoginSuccess,
  fetchProductsBegin,
  fetchProductsFailure,
  fetchProductsSuccess,
} from "./coinAction";

export function fetchProducts(type) {
  return (dispatch) => {
    dispatch(fetchProductsBegin());
    if (type) {
      return fetch(`/coinByType?type=${type}`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchProductsFailure(error)));
    } else {
      return fetch(`/coins`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchProductsFailure(error)));
    }
  };
}
export function loginFetch(login, pass) {
  return (dispatch) => {
    dispatch(fetchLoginBegin());
     const logInfo = fetch(`login`, {
      method: "POST",
      body: JSON.stringify({
        login: login,
        pass: pass,
      }),
      headers: { "Content-type": "application/json; charset=utf-8" },
    })
      .then((res) => {
          if(res.status===401){
              return res.status;

          }
          else{
              return res.json();
          }
      })
      .then((json) => {
        if(json===401){
            return json;
        }
        else {
            window.localStorage.setItem("access_token", json.newToken);
            window.localStorage.setItem("login", json.login);
            window.localStorage.setItem("role", json.role);
            dispatch(fetchLoginSuccess(json));
        }
      })
     return logInfo;
  };
}



export function fetchFilterCoins(input, values) {
  return (dispatch) => {
    dispatch(fetchCoinsBegin());
    if (values) {
      return fetch(
        `/coinsSearch?name=${input}&country=${values.country}&composition=${values.composition}&priceFrom=${values.priceFrom}&priceTo=${values.priceTo}&yearFrom=${values.yearFrom}&yearTo=${values.yearTo}`
      )
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchCoinsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchCoinsFailure(error)));
    } else if (input && input !== "undefined") {
      return fetch(`/coinsSearch?name=${input}`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchCoinsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchCoinsFailure(error)));
    } else {
      return fetch(`/coins`)
        .then(handleErrors)
        .then((res) => res.json())
        .then((json) => {
          dispatch(fetchCoinsSuccess(json));
          return json;
        })
        .catch((error) => dispatch(fetchCoinsFailure(error)));
    }
  };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
