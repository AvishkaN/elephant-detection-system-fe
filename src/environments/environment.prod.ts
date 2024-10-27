const url = "localhost";
const port = "5100";
const serverProtocol = "http";

export const environment = {
  production: true,
  site_name: "Elephant Detector",
  api_url: `${serverProtocol}://${url}:${port}/api/`,
  asserts: `${serverProtocol}://${url}:${port}/assets/`,
};
