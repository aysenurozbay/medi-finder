import { filterProviders } from "./filterProviders";

const mockProviders = [
  {
    id: "1",
    name: "Dr A",
    city: "Ankara",
    country: "TR",
    type: "doctor",
    rating: 4.8,
    specialty: "cardiology",
  },
  {
    id: "2",
    name: "Dr B",
    city: "Istanbul",
    country: "TR",
    type: "clinic",
    rating: 4.2,
    specialty: "neurology",
  },
];

describe("filterProviders", () => {
  it("filters by specialty", () => {
    const result = filterProviders(mockProviders, {
      search: "",
      city: null,
      country: null,
      type: null,
      minRating: null,
      specialty: "cardiology",
      sort: "rating",
    });

    expect(result).toHaveLength(1);
    expect(result[0].specialty).toBe("cardiology");
  });
});
