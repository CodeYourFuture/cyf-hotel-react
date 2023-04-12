// card data and contact info

export const contactDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
export const places = [
  {
    id: 1,
    name: "London",
    url: "http://visitlondon.com",
    img:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "London is a great place to visit."
  },
  {
    id: 2,
    name: "Manchester",
    url: "https://www.visitmanchester.com/",
    img:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "Manchester is a great place to visit."
  },
  {
    id: 3,
    name: "Glasgow",
    url: "http://visitglasgow.com",
    img:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "London is a great place to visit."
  }
];

export const appModes = {
  normal: "https://cyf-react.glitch.me/", // seems to load fast
  loading: "https://cyf-react.glitch.me/delayed", // seems to load slow
  error: "https://cyf-react.glitch.me/error" //  shows error message
};
