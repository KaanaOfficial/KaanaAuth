import { countryList } from "@doubco/countries";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { country } = body;
  return {
    countries: countryList,
  };
});
